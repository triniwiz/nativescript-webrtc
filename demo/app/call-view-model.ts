import { Observable } from 'tns-core-modules/data/observable';
import { WebRTC, WebRTCRemoteView } from 'nativescript-webrtc';
import * as frame from 'tns-core-modules/ui/frame';
import { SocketIO } from 'nativescript-socketio';
import { SocketService } from '~/socket-server';
import { ios } from 'tns-core-modules/utils/utils';
import { isIOS } from 'tns-core-modules/platform';
import * as settings from 'tns-core-modules/application-settings';
export class CallViewModel extends Observable {
  webrtc: WebRTC;
  socketIO: SocketIO;
  me: string;
  other: string;
  localStream:any;
  remoteStream:any;
  constructor(me: string, other: string) {
    super();
    this.me = me;
    this.other = other;
    this.socketIO = SocketService.getInstance();

    this.socketIO.on('call:answer', data => {
      this.answerCall(data.sdp);
    });

    this.socketIO.on('call:answered', data => {
      this.webrtc.handleAnswerReceived(data.sdp);
    });

    this.socketIO.on('call:iceCandidate', data => {
      this.webrtc.addIceCandidate(data.iceCandidate);
    });
  }

  call(username) {
    console.log('calling', username);
    this.webrtc = new WebRTC({});
    this.webrtc.on('webRTCClientDidCreateLocalCapturer', args => {
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
      if (isIOS) {
        const device = ios.getter(UIDevice, UIDevice.currentDevice);
        if(device.name.toLocaleLowerCase().indexOf('pro') > -1) return;
        if (device.name.toLocaleLowerCase().indexOf('simulator') === -1) {
          const video = frame.topmost().getViewById('localVideoView') as any;
          video.videoTrack = localVideoTrack;
          video.start();
        }
      } else {
        const video = frame.topmost().getViewById('localVideoView') as any;
        video.videoTrack = localVideoTrack;
        video.start();
      }
    });

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      console.log('remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      const video = frame.topmost().getViewById('remoteVideoView') as any;
      video.videoTrack = remoteVideoTrack;
    });

    this.webrtc.on('webRTCClientStartCallWithSdpType', args => {
      console.log(
        'call',
        'webRTCClientStartCallWithSdpType',
        args.object.get('type')
      );
      const sdp = args.object.get('sdp');
      if (args.object.get('type') === 'answer') {
        this.webrtc.handleAnswerReceived(sdp);
      } else {
        this.socketIO.emit('call', {
          from: settings.getString('me'),
          to: username,
          sdp: sdp
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      const iceCandidate = args.object.get('iceCandidate');
      this.socketIO.emit('iceCandidate', {
        to: username,
        from: settings.getString('me'),
        iceCandidate: iceCandidate
      });
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

    this.webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
      console.log('answer', 'remoteVideoTrack');
      const object = args.object;
      const remoteVideoTrack = object.get('remoteVideoTrack');
      this.remoteStream = object.get('stream');
      const video = frame
        .topmost()
        .getViewById('remoteVideoView') as WebRTCRemoteView;
        video.videoTrack = remoteVideoTrack;
    });

    this.webrtc.on('webRTCClientStartCallWithSdpType', args => {
      if (args.object.get('type') === 'answer') {
        console.log('from', this.me, 'to', this.other);
        this.socketIO.emit('answered', {
          from: this.me,
          to: this.other,
          sdp: sdp
        });
      }
    });

    this.webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
      console.log('answer', 'webRTCClientDidGenerateIceCandidate');
      const iceCandidate = args.object.get('iceCandidate');
      this.socketIO.emit('iceCandidate', {
        to: this.other,
        from: this.me,
        iceCandidate: iceCandidate
      });
    });

    setTimeout(() => {
      this.webrtc.connect();
      setTimeout(() => {
        this.webrtc.createAnswerForOfferReceived(sdp);
      }, 3000);
    }, 2000);
  }
}
