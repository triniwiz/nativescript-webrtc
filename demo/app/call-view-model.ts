import { Observable } from 'tns-core-modules/data/observable';
import { WebRTC } from 'nativescript-webrtc';
import * as frame from 'tns-core-modules/ui/frame';
import { SocketIO } from 'nativescript-socketio';
import { SocketService } from '~/socket-server';
export class CallViewModel extends Observable {
  webrtc: WebRTC;
  socketIO: SocketIO;

  constructor() {
    super();
    this.socketIO = SocketService.getInstance();

    this.socketIO.on('call:answer', data => {
      console.log('call:answer');
      this.answerCall(data.sdp);
    });
  }

  call(username) {
    console.log('calling', username);
    this.webrtc = new WebRTC({});
    this.webrtc.on('webRTCClientDidCreateLocalCapturer', args => {
      console.log('create');
      const object = args.object;
      const video = frame.topmost().getViewById('localVideoView') as any;
      if (object && object.get('capturer')) {
        video.capturer = object.get('capturer');
      }
    });

    this.webrtc.on('webRTCClientDidReceiveLocalVideoTrack', args => {
      console.log('localVideoTrack');
      const object = args.object;
      const localVideoTrack = object.get('localVideoTrack');
      const video = frame.topmost().getViewById('localVideoView') as any;
      video.videoTrack = localVideoTrack;
      video.start();
    });

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrack', args => {
      console.log('remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      const video = frame.topmost().getViewById('remoteVideoView') as any;
      video.videoTrack = remoteVideoTrack;
    });


    this.webrtc.on('webRTCClientStartCallWithSdpType', args => {
      console.log('webRTCClientStartCallWithSdpType');
      const sdp = args.object.get('sdp');
      if (args.object.get('type') === 'answer') {
        this.webrtc.handleAnswerReceived(sdp);
      } else {
        this.socketIO.emit('call', {
          to: username,
          sdp: sdp
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      console.log('webRTCClientDidGenerateIceCandidate');
      console.log(args.object.get('iceCandidate'));
    });

    setTimeout(() => {
      this.webrtc.connect();
      this.webrtc.makeOffer();
    }, 2000);
  }

  answer(from, to, sdp) {
    this.socketIO.emit('answer', {
      from: from,
      to: to,
      sdp: sdp
    });
  }

  answerCall(sdp, options = { enableVideo: true, enableAudio: true }) {
    this.webrtc = new WebRTC(options);
    this.webrtc.on('webRTCClientDidCreateLocalCapturer', args => {
      console.log('create');
      const object = args.object;
      const video = frame.topmost().getViewById('localVideoView') as any;
      if (object && object.get('capturer')) {
        video.capturer = object.get('capturer');
      }
    });
    this.webrtc.on('webRTCClientDidReceiveLocalVideoTrack', args => {
      console.log('answer', 'localVideoTrack');
      const object = args.object;
      const localVideoTrack = object.get('localVideoTrack');
      const video = frame.topmost().getViewById('localVideoView') as any;
      video.videoTrack = localVideoTrack;
      video.start();
    });

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrack', args => {
      console.log('answer', 'remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      const video = frame.topmost().getViewById('remoteVideoView') as any;
      video.videoTrack = remoteVideoTrack;
    });

    this.webrtc.on('webRTCClientStartCallWithSdpType', args => {
      console.log('answer', 'webRTCClientStartCallWithSdpType');
      console.log(args.object.get('sdp'));
      if (args.object.get('type') === 'answer') {
        this.webrtc.handleAnswerReceived(sdp);
      } else {

      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      console.log('answer', 'webRTCClientDidGenerateIceCandidate');
      console.log(args.object.get('iceCandidate'));
    });

    setTimeout(() => {
      this.webrtc.connect();
      setTimeout(() => {
        this.webrtc.createAnswerForOfferReceived(sdp);
      }, 5000);
    }, 2000);
  }
}
