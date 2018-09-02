import { Injectable } from '@angular/core';
import { BehaviorSubject, from, throwError } from 'rxjs';
import { SocketIO } from 'nativescript-socketio';
import { Router } from '@angular/router';
import {
  WebRTC,
  WebRTCIceCandidate,
  WebRTCSdp,
  WebRTCSdpType
} from 'nativescript-webrtc-plugin';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class CallService {
  users: BehaviorSubject<any[]>;
  localStream: any;
  remoteStream: any;
  currentUser: string;
  localVideoView: any;
  remoteVideoView: any;
  webrtc: WebRTC;
  other: any;
  inCall: BehaviorSubject<boolean>;

  constructor(public socket: SocketIO, private router: Router) {
    this.socket.on('call:iceCandidate', data => {
      const sdpMid = data.sdpMid;
      const sdpMLineIndex = data.sdpMLineIndex;
      const sdp = data.sdp;
      if (this.webrtc) {
        this.webrtc.addIceCandidate({
          sdp: sdp,
          sdpMid: sdpMid,
          sdpMLineIndex: sdpMLineIndex
        });
      }
    });

    this.socket.on('call:answered', data => {
      console.log('call:answered');
      this.webrtc.handleAnswerReceived({ sdp: data.sdp, type: data.type });
    });

    this.socket.on('call:answer', data => {
      console.log('call:answer');
      this.answerCall({
        sdp: data.sdp,
        type: data.type
      });
    });

    /*
    this.socket.on('call:incoming', data => {
      this.isInitiator = false;
      this.callData = {
        username: this.currentUser,
        to: data.to,
        from: data.from,
        sdp: data.sdp,
        type: data.type
      };
      this.answer(from, data.to, data.sdp, data.type);
    });
    */
    /*
    this.socket.on('user left', data => {
      this.zone.run(() => {
        this.items = this.items.filter(item => {
          if (item.indexOf(data.username) === -1) {
            return item;
          }
        });
      });
    });
    */
  }

  isInitiator: boolean;
  callData: any;

  getUsers() {
    this.socket.emit('getUsers', {});
  }

  answerCall(
    sdp: WebRTCSdp,
    options = { enableVideo: true, enableAudio: true }
  ) {
    this.webrtc = new WebRTC(options);

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      this.remoteStream = object.get('stream');
      const video = this.remoteVideoView;
      if (video) {
        video.videoTrack = remoteVideoTrack;
      }
    });

    this.webrtc.on('webRTCClientStartCallWithSdp', args => {
      const sdp = args.object.get('sdp');
      const type = args.object.get('type');
      if (type === WebRTCSdpType.ANSWER) {
        this.socket.emit('answered', {
          from: this.currentUser,
          to: this.other,
          sdp: sdp,
          type: type
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      const iceCandidate = args.object.get(
        'iceCandidate'
      ) as WebRTCIceCandidate;
      this.socket.emit(
        'iceCandidate',
        Object.assign(
          {
            to: this.other,
            from: this.currentUser
          },
          iceCandidate
        )
      );
    });

    this.initCamera().then(stream => {
      this.localStream = stream;
      this.setUpLocalView();
      this.webrtc.connect();
      this.webrtc.addLocalStream(this.localStream);
      this.webrtc.createAnswerForOfferReceived({
        type: sdp.type,
        sdp: sdp.sdp
      });
    });
  }

  answer(from, to, sdp, type) {
    this.other = from;
    this.answerCall({
      sdp: sdp,
      type: type
    });
  }

  call(username) {
    this.other = username;

    this.webrtc = new WebRTC({
      enableAudio: true,
      enableVideo: true
    });

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      const video = this.remoteVideoView;
      this.remoteStream = object.get('stream');
      if (video) {
        video.videoTrack = remoteVideoTrack;
      }
    });

    this.webrtc.on('webRTCClientStartCallWithSdp', args => {
      const sdp = args.object.get('sdp');
      const type = args.object.get('type');
      if (type === WebRTCSdpType.ANSWER) {
        this.webrtc.handleAnswerReceived({
          sdp: sdp,
          type: type
        });
      } else {
        this.socket.emit('call', {
          from: this.currentUser,
          to: username,
          sdp: sdp,
          type: type
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      const iceCandidate = args.object.get('iceCandidate');
      this.socket.emit(
        'iceCandidate',
        Object.assign(
          {
            to: username,
            from: this.currentUser
          },
          iceCandidate
        )
      );
    });

    this.initCamera().then(stream => {
      this.localStream = stream;
      this.setUpLocalView();
      this.webrtc.connect();
      this.webrtc.addLocalStream(this.localStream);
      this.webrtc.makeOffer();
    });
  }

  private initCamera(): Promise<any> {
    if (WebRTC.hasPermissions()) {
      return this.webrtc.getUserMedia(4);
    } else {
      return from(WebRTC.requestPermissions())
        .pipe(
          switchMap(() => {
            if (WebRTC.hasPermissions()) {
              return from(this.webrtc.getUserMedia(4));
            }
            return throwError('Has no permission');
          })
        )
        .toPromise();
    }
  }

  private setUpLocalView() {
    const localVideo = this.localVideoView;
    localVideo.mirror = true;
    localVideo.stream = this.localStream;
  }
}
