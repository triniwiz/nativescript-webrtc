import { Component, OnInit } from "@angular/core";

import { WebRTCPeer } from './webrtc.model';
import { WebRTCProvider } from "./webrtc.provider";


@Component({
  templateUrl: './webrtc.component.html',
})
export class WebRTCComponent {

  constructor(
    private webrtc:WebRTCProvider,
  ) {}

  public videoLoaded(event) {
    try {
      const view = event.object;
      if (view && view.id === 'localVideoView') {
        this.webrtc.localView = view;
        this.webrtc.localView.mirror = true;
        this.webrtc.init();
      }
      if (view && view.id === 'remoteVideoView') {
        this.webrtc.remoteView = view;
      }
    } catch(error) {
      console.error(error);
    }
  }

  public makeCall(event) {   
    this.webrtc.makeCall(event.object);
  }

  public endCall(event) {
    this.webrtc.endCall(event.object);
  }

  public switchCamera(event) {
    this.webrtc.switchCamera(event.object);
  }

  public shareScreen(event) {
    this.webrtc.shareScreen(event.object);
  }
}