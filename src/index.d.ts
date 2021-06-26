export { IceConnectionState, IceServer, IceGatheringState, Quality, SignalingState, WebRTCDataChannelMessageType, WebRTCDataChannelState, WebRTCIceCandidate, WebRTCOptions, WebRTCSdp, WebRTCSdpType, WebRTCState } from './webrtc.common';

import { View } from '@nativescript/core';
import { Common, Quality, WebRTCDataChannelMessageType, WebRTCIceCandidate, WebRTCOptions, WebRTCSdp } from './webrtc.common';

export declare class WebRTC extends Common {
    private webrtc;
    constructor(options?: WebRTCOptions);
    static requestPermissions(explanation?: string): Promise<any>;
    static hasPermissions(): boolean;
    static init(): void;
    dataChannelSend(name: string, data: string, type: WebRTCDataChannelMessageType): void;
    dataChannelClose(name: string): void;
    dataChannelCreate(name: string): void;
    switchCamera(trackId: string): void;
    handleAnswerReceived(answer: WebRTCSdp): void;
    connect(): void;
    disconnect(): void;
    micEnabled(enabled: boolean): void;
    toggleMic(): void;
    speakerEnabled(enabled: boolean): void;
    createAnswerForOfferReceived(sdp: WebRTCSdp): void;
    makeOffer(): void;
    addLocalStream(stream: any): void;
    addIceCandidate(iceCandidate: WebRTCIceCandidate): void;
    enableTrack(trackId: string, enable: boolean): void;
    getUserMedia(quality?: Quality): Promise<any>;
}
export declare class WebRTCView extends View {
    private _stream;
    createNativeView(): any;
    mirror: boolean;
    videoTrack: any;
    stream: any;
    srcObject: any;
}

export * from './src';
