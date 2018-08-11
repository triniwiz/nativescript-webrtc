import { Observable } from 'tns-core-modules/data/observable';
import { WebRTC } from 'nativescript-webrtc';
import * as frame from 'tns-core-modules/ui/frame';
export class HelloWorldModel extends Observable {
  webrtc: WebRTC;
  page;
  constructor() {
    super();
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

    setTimeout(() => {
      this.webrtc.connect();
    }, 3000);
  }

  setPage(page) {
    this.page = page;
  }
}
