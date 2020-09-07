import { firestore } from "nativescript-plugin-firebase";

export interface WebRTCPeer {
  clientId: string;
  displayName: string;
  rooms?: firestore.CollectionReference;
  timestamp: Date;
}

export interface WebRTCRoom {
  initiatorId: string; // clientId of peer that initiated the call
  initiatorOffer: WebRTCOffer;
  peerOffer?: WebRTCOffer;
  peerId? : string; // clientId of peer that was called
  participants: Array<string>;
  timestamp: Date;
}

export interface WebRTCOffer {
  sdp: any;
  type: string; // e.g. "offer"
}

export interface WebRTCIceCandidate {
  from: string;
  sdp: string;
  sdpMid: any;
  sdpMLineIndex: any;
  serverUrl: string;
}