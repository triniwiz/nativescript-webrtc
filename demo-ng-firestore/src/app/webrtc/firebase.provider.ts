import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { WebRTCPeer, WebRTCRoom, WebRTCIceCandidate, WebRTCOffer } from './webrtc.model';
import * as firebase from "nativescript-plugin-firebase";


@Injectable()
export class FirebaseProvider {
  private activeRoom$ = new Subject<WebRTCRoom>();         // subject emitting active room data
  private activeRoomUnsubscribe;                           // function for unsubscribe to Firebase listener;
  private authObj;                                         // Firebase auth object
  private availableRooms$ = new Subject<Array<string>>();  // subject emitting all rooms available to us
  private availableRoomsUnsubscribe;                       // function for unsubscribe to Firebase listener;
  private hasFirebaseAuth$ = new Subject<string>();        // subject used for signalling we have Firebase auth

  constructor(
    private zone:NgZone,
  ) {}

  public initFirebase() {
    return new Promise((resolve, reject) => {
      firebase.init({
        analyticsCollectionEnabled: false,
        iOSEmulatorFlush: false,            // flush token before init due to Firebase bug with iOS simulator
        persist: true,                      // observed crash on iOS when set to false
      }).then(() => {
        console.info(`firebase init success!`);
        this.doAuth().then(() => {
          console.info(`firebase anonymous login success: userId ${this.authObj.uid}`);
          resolve();
        }).catch((error) => { reject(`firebase login error: ${error}`); });
      }).catch((error) => { reject(`firebase init error: ${error}`); });
    });
  }

  private doAuth() {
    return new Promise((resolve, reject) => {
      let loginOptions: firebase.LoginOptions = {
        type: firebase.LoginType.ANONYMOUS
      };

      firebase.login(loginOptions)
      .then(async (authObj: any) => {
        this.authObj = authObj;
        this.hasFirebaseAuth$.next(this.authObj.uid); // signal that we have Firebase auth
        resolve();
      })
      .catch((error: any) => { reject(error); });
    });
  }

  /*
     Used for subscribing to available rooms
  */
  public getFirebaseAuth() : Observable<string> {
    return this.hasFirebaseAuth$.asObservable();
  }

  /*
     Register ourselves in Firebase as a potential webrtc peer
  */
  public registerAsPeer(displayName) {
    return new Promise((resolve, reject) => {

      const peerDoc:WebRTCPeer = {
        clientId: this.authObj.uid,
        displayName: displayName,
        timestamp: new Date(),
      }

      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_peers");
      colRef.doc(this.authObj.uid).set(peerDoc)
      .then(() => {
        /*
           Start listening to room changes so we can answer incoming calls
        */
        this.startListenAvailableRooms();
        resolve();
      })
      .catch((error) => { reject(error); });
    });
  }

  /*
     Used for subscribing to available rooms
  */
  public getAvailableRooms() : Observable<Array<string>> {
    return this.availableRooms$.asObservable();
  }

  /*
     Listen to changes in rooms available to us
  */
  private startListenAvailableRooms()  {
    const peersColRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_peers");
    const roomsColRef: firebase.firestore.CollectionReference = peersColRef.doc(this.authObj.uid).collection("room_invites");

    this.availableRoomsUnsubscribe = roomsColRef.onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
      this.zone.run(() => {
        let rooms:Array<string> = [];
        snapshot.forEach((docSnap) => {
          rooms.push(docSnap.id);
        });
        this.availableRooms$.next(rooms);
      }); // end of zone
    }); // end of onSnapshot
  }

  /*
     Used for subscribing to available rooms
  */
  public getActiveRoomData() : Observable<WebRTCRoom> {
    return this.activeRoom$.asObservable();
  }

  /*
     Listen to changes in rooms available to us
  */
  public startListenActiveRoomChanges(roomId:string) {
    this.stopListenActiveRoomChanges();

    const roomsColRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_rooms");
    const roomDocRef: firebase.firestore.DocumentReference = roomsColRef.doc(roomId);

    this.activeRoomUnsubscribe = roomDocRef.onSnapshot((docSnap: firebase.firestore.DocumentSnapshot) => {
      this.zone.run(() => {
        if (docSnap.exists) {
          const data = docSnap.data();
          const room:WebRTCRoom = {
            initiatorId: data.initiatorId,
            initiatorOffer: data.initiatorOffer,
            peerOffer: data.peerOffer,
            peerId: data.peerId,
            participants: data.participants,
            timestamp: data.timestamp,
          }

          this.activeRoom$.next(room);
        }
      }); // end of zone
    }); // end of onSnapshot
  }

  private stopListenActiveRoomChanges() {
    if (this.activeRoomUnsubscribe) {
      this.activeRoomUnsubscribe();
      this.activeRoomUnsubscribe = undefined;
      this.activeRoom$.next(undefined);
    }
  }

  public getPeers() {
    return new Promise((resolve, reject) => {
      const date = new Date();
      date.setHours(date.getHours()-2); // 2 hours ago

      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_peers");
      const query = colRef.where("timestamp", ">", date);

      query.get()
      .then((snapshot: firebase.firestore.QuerySnapshot) => {
        let peers:Array<WebRTCPeer> = [];
        snapshot.forEach((doc) => {
          peers.push(<WebRTCPeer>doc.data());
          resolve(peers);
        });
      })
      .catch((error) => { reject(error); });
    });
  }

  public createRoom(room: WebRTCRoom) {
    return new Promise((resolve, reject) => {
      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_rooms");
      colRef.add(room)
      .then((documentRef) => { resolve(documentRef.id); })
      .catch((error) => { reject(error); });
    });
  }

  /*
     Add roomId to our peer's doc
  */
  public sendRoomInvite(peerId:string, roomId: string) {
    return new Promise((resolve, reject) => {
      const peersColRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_peers");
      const invitesColRef: firebase.firestore.CollectionReference = peersColRef.doc(peerId).collection("room_invites");

      invitesColRef.doc(roomId).set({})
      .then((documentRef) => { resolve(); })
      .catch((error) => { reject(error); });
    });
  }

  public addIceCandidate(roomId:string, iceCandidate: WebRTCIceCandidate) {
    return new Promise((resolve, reject) => {
      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_rooms");
      colRef.doc(roomId).collection(this.authObj.uid)
      .add(iceCandidate)
      .then((documentRef) => { resolve(documentRef.id); })
      .catch((error) => { reject(error); });
    });
  }

  public getIceCandidates(roomId:string, peerdId:string) {
    return new Promise((resolve, reject) => {
      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_rooms");
      const query = colRef.doc(roomId).collection(peerdId);

      query.get()
      .then((snapshot: firebase.firestore.QuerySnapshot) => {
        let iceCandidates:Array<WebRTCIceCandidate> = [];

        snapshot.forEach((doc) => {
          iceCandidates.push(<WebRTCIceCandidate>doc.data());
          resolve(iceCandidates);
        });
      })
      .catch((error) => { reject(error); });
    });
  }

  public addPeerOffer(roomId:string, offer:WebRTCOffer) {
    return new Promise((resolve, reject) => {
      /*
         First add offer to Firestore room
      */
      const colRef: firebase.firestore.CollectionReference = firebase.firestore.collection("webrtc_rooms");
      colRef.doc(roomId)
      .update({
        peerOffer: offer,
        peerId: this.authObj.uid,
      })
      .then(() => { resolve(); })
      .catch((error) => { reject(error); });
    });
  }
}