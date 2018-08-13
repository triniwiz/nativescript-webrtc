import { Common, WebRTCOptions, WebRTCState } from './webrtc.common';
import { View } from 'tns-core-modules/ui/core/view';
export declare class WebRTC extends Common {
    private connection;
    private connectionFactory;
    private configuration;
    private constraints;
    private _state;
    private _delegate;
    private defaultConnectionConstraints;
    private remoteIceCandidates;
    constructor(options?: WebRTCOptions);
    readonly state: WebRTCState;
    readonly delegate: any;
    makeOffer(): void;
    handleAnswerReceived(remoteSdp: string): void;
    addIceCandidate(iceCandidate: RTCIceCandidate): void;
    createAnswerForOfferReceived(remoteSdp: string): void;
    private handleRemoteDescriptionSet();
    private handleSdpGenerated(sdp);
    static init(): void;
    connect(): void;
    disconnect(): void;
    getLocalStream(): any;
}
export declare class WebRTCLocalView extends View {
    private _capturer;
    private _localVideoTrack;
    cameraPosition: string;
    constructor();
    capturer: any;
    videoTrack: any;
    start(): void;
    stop(): void;
    toggleCamera(): void;
}
export declare class WebRTCRemoteView extends View {
    private _remoteVideoTrack;
    constructor();
    videoTrack: any;
}
