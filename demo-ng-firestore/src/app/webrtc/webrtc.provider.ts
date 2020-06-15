import { Injectable } from "@angular/core";
import { screen } from "@nativescript/core/platform";
import {
  TNSRTCIceCandidate,
  TNSRTCMediaDevices,
  TNSRTCMediaStream,
  TNSRTCMediaStreamConstraints,
  TNSRTCPeerConnection,
  TNSRTCSdpType,
  TNSRTCSessionDescription,
  WebRTC,
  TNSRTCIceServer,
  TNSRTCConfiguration,
  WebRTCView,
} from 'nativescript-webrtc';
import { FirebaseProvider } from './firebase.provider';
import { WebRTCIceCandidate, WebRTCRoom, WebRTCOffer } from './webrtc.model';
import { Observable, Subject } from "rxjs";
import { take, skip } from "rxjs/operators";


@Injectable()
export class WebRTCProvider {
  public localView: WebRTCView;
  public remoteView: WebRTCView;

  private config: TNSRTCConfiguration;
  private clientId:string;                            // our clientId
  private connection: TNSRTCPeerConnection;
  private localStream: TNSRTCMediaStream;
  private inCall: boolean = false;                    // are we currently in a call
  private isInitiator: boolean = false;               // are we the initiator of the call
  private remoteStreamUpdate$ = new Subject();
  private room: WebRTCRoom;                           // currently active room data
  private roomId: string;                             // currently active room id
  private rooms:Array<string>;                        // current list of known rooms
  private cameraPosition: 'user' | 'environment';

  constructor(private firebase: FirebaseProvider) {

    /*
       TODO: obtain IceServers to RemoteConfig (so we can change them without app update)
    */
    this.config = new TNSRTCConfiguration({
      iceServers: [
        new TNSRTCIceServer(['stun:stun.l.google.com:19302']),
        new TNSRTCIceServer(['stun:stun1.l.google.com:19302']),
      ]
    });

    /*
       Wait until we are signalled that we have Firebase auth
    */
    this.firebase.getFirebaseAuth()
    .subscribe((clientId) => {
      this.clientId = clientId;

      /*
         Set initially available rooms
      */
      this.firebase.getAvailableRooms()
      .pipe(take(1))
      .subscribe((rooms:Array<string>) => {
        // console.log(`Initial rooms available: ${JSON.stringify(rooms)}`);
        this.rooms = rooms;
      });

      /*
         Start listening for changes in available rooms
      */
      this.firebase.getAvailableRooms()
      .pipe(skip(1))
      .subscribe((rooms:Array<string>) => {
        const roomsDiff:Array<string> = rooms.filter(room => this.rooms.indexOf(room)===-1);
        if (roomsDiff.length>0) {
          console.log(`New rooms available: ${JSON.stringify(roomsDiff)}`);

          /*
             Start listening to room changes for new room

             TODO: check if we are busy in another call and handle
          */
          this.roomId = roomsDiff[0];
          this.firebase.startListenActiveRoomChanges(this.roomId);
        }
        this.rooms = rooms; // save available rooms so we can compare on next change
      });

      /*
         Start listening to changes in active room
      */
      this.firebase.getActiveRoomData()
      .subscribe((room:WebRTCRoom) => {
        this.room = room; // save active room
        
        if (this.room) {
          /*
             As the peer handle an incoming call from the initiator
          */
          if (this.clientId!==room.initiatorId && room.initiatorOffer && !room.peerOffer) {
            console.log(`Incoming initiatorOffer from ${room.initiatorId}`);
            this.answerIncomingCall();
          }

          /*
             As the initiator handle the answer from our peer
          */
          if (this.clientId===room.initiatorId && room.initiatorOffer && room.peerOffer) {
            console.log(`Incoming peerOffer from ${room.peerId}`);
            this.handlePeerAnswer();
          }
        }
      });
    });
  }

  public init() {
    if (!WebRTC.hasPermissions()) {
      WebRTC.requestPermissions().then(() => {
        if (WebRTC.hasPermissions()) {
          this.setUpUserMedia();
        }
      });
    } else {
      this.setUpUserMedia();
    }
  }

  private createConnection() {
    this.isInitiator=false;
    this.inCall=false;

    this.connection = new TNSRTCPeerConnection(this.config);
    this.connection.onIceCandidate((candidate) => {
      if (!this.roomId) { return console.error('Unable to add IceCandidate without roomId!'); }

      const iceCandidate:WebRTCIceCandidate = {
        from: this.clientId,
        sdp: candidate.sdp,
        sdpMid: candidate.sdpMid,
        sdpMLineIndex: candidate.sdpMLineIndex,
        serverUrl: candidate.serverUrl,
      };
      
      // console.dir(iceCandidate);
      this.firebase.addIceCandidate(this.roomId, iceCandidate);
    });

    this.connection.onTrack((track) => {
      if (track.streams) {
        this.remoteStreamUpdate$.next(track.streams[0]);
      }
    });
  }

  public shareScreen(event) {
    TNSRTCMediaDevices.getDisplayMedia(new TNSRTCMediaStreamConstraints(true, true))
    .then(mediaStream => {
      this.localStream = mediaStream;
      this.localView.srcObject = mediaStream;
      this.localView.mirror = false;
    })
    .catch(error => {
      console.log(error);
    });
  }

  public switchCamera(event) {
    if (this.localStream) {
      for (let track of this.localStream.videoTracks) {
        const next = this.cameraPosition === 'user' ? 'environment' : 'user';
        track.applyConstraints({facingMode: next}).then(() => {
            this.cameraPosition = next;
            this.localView.mirror = next !== 'environment';
        }).catch(e => {
            console.log(e);
        });
      }
    }
  }

  public setUpUserMedia() {
    const video = new Map();
    video.set('facingMode', 'user');
    this.cameraPosition = 'user';
    video.set('width', screen.mainScreen.widthDIPs);
    video.set('height', screen.mainScreen.heightDIPs);
    const constraints = new TNSRTCMediaStreamConstraints(true, video);

    TNSRTCMediaDevices.getUserMedia(constraints)
    .then(mediaStream => {
      this.localStream = mediaStream;
      this.localView.srcObject = mediaStream;
      this.localView.mirror = true;
    })
    .catch(error => {
      console.log(error);
    });
  }

  public endCall(view) {
    this.connection.close();
    this.connection.dispose();
    this.roomId=undefined;
    this.room=undefined;
    this.inCall=false;
    this.isInitiator=false;
    this.remoteStreamUpdate$.next(undefined);
  }


  public makeCall(peerId) {
    this.createConnection(); // create new connection (dispose of old tracks)

    if (this.connection) {
      this.isInitiator = true;

      if (this.localStream) {
        const videoTracks = this.localStream.videoTracks;
        const audioTracks = this.localStream.audioTracks;
        for (let track of videoTracks) {
          this.connection.addTrack(track, [this.localStream.id]);
        }
        for (let track of audioTracks) {
          this.connection.addTrack(track, [this.localStream.id]);
        }
      }

      this.connection.createOffer({})
      .then((sdp) => {
        this.setInitiatorLocalSdp(peerId,sdp);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  private setInitiatorLocalSdp(peerId:string, sdp: TNSRTCSessionDescription) {
    if (!this.connection) return;
    if (this.connection.localDescription) {
      if (
        this.connection.localDescription.type === TNSRTCSdpType.ANSWER &&
        sdp.type === TNSRTCSdpType.ANSWER
      )
      return;
    }

    const offer:WebRTCOffer = {
      type: sdp.type,
      sdp: sdp.sdp,
    }

    let room:WebRTCRoom = {
      initiatorId: this.clientId,
      initiatorOffer: offer,
      participants: [
        this.clientId,
        peerId,
      ],
      timestamp: new Date(),
    }

    this.firebase.createRoom(room)
    .then((roomId:string) => {
      console.log('Successfully created room with id: '+roomId);
      this.roomId = roomId;

      /*
         Start listening to room changes
      */
      this.firebase.startListenActiveRoomChanges(roomId);

      /*
         Notify peer of new room
      */
      this.firebase.sendRoomInvite(peerId, roomId)
      .catch(error => { console.error(error); });

      /*
         Trigger creation of IceCandidates
      */
      this.connection.setLocalDescription(sdp)
      .catch(error => { console.error(error); });
    })
    .catch((error) => { console.error(error); });
  }

  private answerIncomingCall() {
    this.createConnection();
    this.addPeerIceCandidates(this.roomId, this.room.initiatorId)
    .then(() => {
      if (this.localStream) {
        for (let track of this.localStream.videoTracks) {
          this.connection.addTrack(track, [this.localStream.id]);
        }
        for (let track of this.localStream.audioTracks) {
          this.connection.addTrack(track, [this.localStream.id]);
        }
      }

      this.createAnswerForOfferReceived({
        type: TNSRTCSdpType.OFFER,
        sdp: this.room.initiatorOffer.sdp,
      });
    })
    .catch((error) => { console.error(error); });
  }

  /*
     Add our peer's IceCandidates to our local connection
  */
  private addPeerIceCandidates(roomId:string, peerId:string) {
    return new Promise((resolve, reject) => {

      console.log(`Adding IceCandidates from peer ${peerId} in room ${roomId} to our connection...`);
      this.firebase.getIceCandidates(roomId, peerId)
      .then((iceCandidates:Array<WebRTCIceCandidate>) => {
        iceCandidates.forEach((candidate) => {
          // console.dir(candidate);

          let iceCandidate = new TNSRTCIceCandidate(
            candidate.sdp,
            candidate.sdpMid,
            candidate.sdpMLineIndex
          );

          this.connection.addIceCandidate(iceCandidate);
        }) // end of forEach
        resolve();
      })
      .catch((error) => { console.error(error); });
    });
  }

  private createAnswerForOfferReceived(remoteSdp) {
    if (!this.connection || !remoteSdp) return;
    this.connection.setRemoteDescription(
      new TNSRTCSessionDescription(remoteSdp.type, remoteSdp.sdp)
    )
    .then(() => {
      this.connection.createAnswer({})
      .then((localSdp) => { this.sendNonInitiatorSdp(localSdp); })
      .catch((error) => { console.error(error); });
    })
    .catch((error) => { console.error(error); });
  }

  private sendNonInitiatorSdp(localSdp) {
    if (this.connection == null) return;
    this.connection
    .setLocalDescription(new TNSRTCSessionDescription(localSdp.type, localSdp.sdp))
    .then(() => {
      const offer: WebRTCOffer = {
        sdp: localSdp.sdp,
        type: localSdp.type,
      }
      
      this.firebase.addPeerOffer(this.roomId, offer)
      .then(() => console.log('Peer offer sent to initiator!'))
      .catch((error) => { console.error(error); });
    })
    .catch((error) => { console.error(error); });
  }

  /*
     As the call initiator, handle counter offer from our peer
  */
  private handlePeerAnswer() {
    if (!this.connection || !this.room.peerOffer.sdp || this.inCall) return;

    const peerSdp = new TNSRTCSessionDescription(TNSRTCSdpType.ANSWER, this.room.peerOffer.sdp);
    this.connection
    .setRemoteDescription(peerSdp)
    .then(() => {
      /*
         Finally add peer's IceCandidates to our (initiator's) connection
      */
      this.addPeerIceCandidates(this.roomId, this.room.peerId)
      .then(() => {
        this.inCall = true;
        console.log('You should now have an active in call!');
      })
      .catch((error) => { console.error(error); });
    })
    .catch((error) => { console.error(error); });
  }

  /*
     Used for signalling when a new remote stream is available
  */
  public getRemoteStreamUpdate() : Observable<any> {
    return this.remoteStreamUpdate$.asObservable();
  }
}