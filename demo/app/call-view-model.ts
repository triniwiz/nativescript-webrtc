import { Observable, fromObject } from 'tns-core-modules/data/observable';
import {
  WebRTC,
  WebRTCView,
  WebRTCSdpType,
  WebRTCIceCandidate,
  WebRTCSdp,
  Quality
} from 'nativescript-webrtc-plugin';
import * as frame from 'tns-core-modules/ui/frame';
import { SocketIO } from 'nativescript-socketio';
import { SocketService } from '~/socket-server';
import { ios } from 'tns-core-modules/utils/utils';
import { isIOS } from 'tns-core-modules/platform';
import * as settings from 'tns-core-modules/application-settings';
import { topmost } from 'tns-core-modules/ui/frame';
export class CallViewModel extends Observable {
  webrtc: WebRTC;
  socketIO: SocketIO;
  me: string;
  other: string;
  localStream: any;
  remoteStream: any;
  constructor(me: string, other: string) {
    super();
    this.me = me;
    this.other = other;
    this.socketIO = SocketService.getInstance();

    this.socketIO.on('call:answer', data => {
      this.answerCall({
        sdp: data.sdp,
        type: data.type
      });
    });

    this.socketIO.on('call:answered', data => {
      this.webrtc.handleAnswerReceived({ sdp: data.sdp, type: data.type });
    });

    this.socketIO.on('call:iceCandidate', data => {
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
  }

  async call(username) {
    console.log('calling', username);
    this.webrtc = new WebRTC({
      enableAudio: true,
      enableVideo: true
    });
    if (WebRTC.hasPermissions()) {
      this.localStream = await this.webrtc.getUserMedia(Quality.HIGHEST);
      this.notify({
        eventName: 'localStream',
        object: fromObject({})
      });
    } else {
      try {
        await WebRTC.requestPermissions();
        if (WebRTC.hasPermissions()) {
          this.localStream = await this.webrtc.getUserMedia(Quality.HIGHEST);
          this.notify({
            eventName: 'localStream',
            object: fromObject({})
          });
        }
      } catch (e) {}
    }

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      console.log('remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      const video = frame.topmost().getViewById('remoteVideoView') as any;
      video.videoTrack = remoteVideoTrack;
    });

    this.webrtc.on('webRTCClientStartCallWithSdp', args => {
      const sdp = args.object.get('sdp');
      const type = args.object.get('type') as WebRTCSdpType;
      console.log('call', 'webRTCClientStartCallWithSdp', type);
      if (type === 'answer') {
        this.webrtc.handleAnswerReceived({
          sdp: sdp,
          type: type
        });
      } else {
        this.socketIO.emit('call', {
          from: settings.getString('me'),
          to: username,
          sdp: sdp,
          type: type
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      const iceCandidate = args.object.get('iceCandidate');
      console.log('webRTCClientDidGenerateIceCandidate: ', iceCandidate);
      this.socketIO.emit(
        'iceCandidate',
        Object.assign(
          {
            to: username,
            from: settings.getString('me')
          },
          iceCandidate
        )
      );
    });
    this.webrtc.connect();
    this.webrtc.addLocalStream(this.localStream);
    this.webrtc.makeOffer();
  }

  answer(from, to, sdp, type) {
    // this.socketIO.emit('answer', {
    //   from: from,
    //   to: to,
    //   sdp: sdp,
    //   type: type
    // });
    this.answerCall({
      sdp: sdp,
      type: type
    });
  }

  async answerCall(
    sdp: WebRTCSdp,
    options = { enableVideo: true, enableAudio: true }
  ) {
    this.webrtc = new WebRTC(options);
    if (WebRTC.hasPermissions()) {
      this.localStream = await this.webrtc.getUserMedia(Quality.HIGHEST);
      this.notify({
        eventName: 'localStream',
        object: fromObject({})
      });
    } else {
      try {
        await WebRTC.requestPermissions();
        if (WebRTC.hasPermissions()) {
          this.localStream = await this.webrtc.getUserMedia(Quality.HIGHEST);
          this.notify({
            eventName: 'localStream',
            object: fromObject({})
          });
        }
      } catch (e) {}
    }

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      console.log('answer', 'remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      this.remoteStream = object.get('stream');
      const video = frame
        .topmost()
        .getViewById('remoteVideoView') as WebRTCView;
      video.videoTrack = remoteVideoTrack;
    });

    this.webrtc.on('webRTCClientStartCallWithSdp', args => {
      const sdp = args.object.get('sdp');
      const type = args.object.get('type') as WebRTCSdpType;
      console.log('answer', 'webRTCClientStartCallWithSdp', type);
      if (type === WebRTCSdpType.ANSWER) {
        this.socketIO.emit('answered', {
          from: this.me,
          to: this.other,
          sdp: sdp,
          type: type
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      console.log('answer', 'webRTCClientDidGenerateIceCandidate');
      const iceCandidate = args.object.get(
        'iceCandidate'
      ) as WebRTCIceCandidate;
      this.socketIO.emit(
        'iceCandidate',
        Object.assign(
          {
            to: this.other,
            from: this.me
          },
          iceCandidate
        )
      );
    });
    this.webrtc.connect();
    this.webrtc.addLocalStream(this.localStream);
    this.webrtc.createAnswerForOfferReceived({
      type: sdp.type,
      sdp: sdp.sdp
    });
  }
}
