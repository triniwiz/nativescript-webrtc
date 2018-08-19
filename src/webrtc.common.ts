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

export enum Quality {
  MAX_480P,
  MAX_720P,
  MAX_1080P,
  MAX_2160P,
  HIGHEST,
  LOWEST
}

export enum WebRTCDataChannelMessageType {
  BINARY = 'binary',
  TEXT = 'text'
}

export interface WebRTCIceCandidate {
  sdpMid: string;
  sdpMLineIndex: number;
  sdp: string;
}

export interface WebRTCSdp {
  type: WebRTCSdpType;
  sdp: string;
}

export enum SignalingState {
  STABLE = 'stable',
  HAVE_LOCAL_OFFER = 'have-local-offer',
  HAVE_LOCAL_PRANSWER = 'have-local-pranswer',
  HAVE_REMOTE_OFFER = 'have-remote-offer',
  HAVE_REMOTE_PRANSWER = 'have-remote-pranswer',
  CLOSED = 'closed'
}

export enum IceGatheringState {
  NEW = 'new',
  GATHERING = 'gathering',
  COMPLETE = 'complete'
}

export enum IceConnectionState {
  NEW = 'new',
  CHECKING = 'checking',
  CONNECTED = 'connected',
  COMPLETED = 'completed',
  FAILED = 'failed',
  DISCONNECTED = 'disconnected',
  CLOSED = 'closed'
}

export enum WebRTCDataChannelState {
  CONNECTING = 'connecting',
  CLOSED = 'closed',
  CLOSING = 'closing',
  OPEN = 'open'
}

export class IceServer {
  username?: string;
  password?: string;
  url: string;
}

export interface WebRTCOptions {
  iceServers?: IceServer[];
  enableVideo?: boolean;
  enableAudio?: boolean;
}

export enum WebRTCState {
  CONNECTING,
  DISCONNECTED,
  CONNECTED
}

export enum WebRTCSdpType {
  OFFER = 'offer',
  PRANSWER = 'prAnswer',
  ANSWER = 'answer'
}
