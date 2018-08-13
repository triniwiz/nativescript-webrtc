import { Observable } from 'tns-core-modules/data/observable';
export class Common extends Observable {
  defaultServers = [
    'stun:stun.l.google.com:19302',
    'stun:stun1.l.google.com:19302',
    'stun:stun2.l.google.com:19302',
    'stun:stun3.l.google.com:19302',
    'stun:stun4.l.google.com:19302'
  ];
}

export interface WebRTCOptions {
  iceServers?: string[];
  enableVideo?: boolean;
  enableAudio?: boolean;
}

export enum WebRTCState {
  Connecting,
  Disconnected,
  Connected
}

export enum WebRTCSdpType {
  Offer = 'offer',
  PrAnswer = 'prAnswer',
  Answer = 'answer'
}
