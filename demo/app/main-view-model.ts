import { Observable } from 'tns-core-modules/data/observable';
import { Webrtc } from 'nativescript-webrtc';

export class HelloWorldModel extends Observable {
  public message: string;
  private webrtc: Webrtc;

  constructor() {
    super();

    this.webrtc = new Webrtc();
    this.message = this.webrtc.message;
  }
}
