import { Common, Quality, WebRTCOptions, WebRTCSdp, WebRTCIceCandidate } from './webrtc.common';
export * from './webrtc.common';
import { View } from 'tns-core-modules/ui/core/view/view';
import './async-await';
export declare class WebRTC extends Common {
    private connection;
    private connectionFactory;
    private configuration;
    private options;
    private constraints;
    private webrtc;
    constructor(options?: WebRTCOptions);
    static requestPermissions(explanation?: string): Promise<any>;
    static hasPermissions(): boolean;
    static init(): void;
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
}
