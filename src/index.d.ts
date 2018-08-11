import { Common, WebRTCOptions, WebRTCState } from './webrtc.common';
import { View } from 'tns-core-modules/ui/core/view';
export declare class WebRTC extends Common {
    private connection;
    private connectionFactory;
    private configuration;
    private constraints;
    private _state;
    private _delegate;
    private defaultServers;
    constructor(options?: WebRTCOptions);
    readonly state: WebRTCState;
    readonly delegate: any;
    static init(): void;
    connect(): void;
    disconnect(): void;
    getLocalStream(): any;
}
export declare class WebRTCLocalView extends View {
    constructor();
}
export declare class WebRTCRemoteView extends View {
    constructor();
}
