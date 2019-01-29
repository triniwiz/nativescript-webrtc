/* Core */

export interface TNSKeyValue {
    key: string;
    value: string;
}

export declare enum TNSRTCBundlePolicy {
    BALANCED = 'password',
    MAX_COMPAT = 'max-compat',
    MAX_BUNDLE = 'max-bundle'
}

export interface TNSRTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    protocol?: string;
    negotiate?: boolean;
    ordered?: boolean;
}

export declare enum TNSRTCIceTransportPolicy {
    ALL = 'all',
    PUBLIC = 'public',
    RELAY = 'relay'
}

export interface TNSRTCMediaConstraints {
    mandatory?: Array<TNSKeyValue>;
    optional?: Array<TNSKeyValue>;
}


export declare enum TNSRTCPeerConnectionState {
    NEW = 'new',
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    FAILED = 'failed',
    CLOSED = 'closed'
}


export declare enum TNSRTCRtcpMuxPolicy {
    NEGOTIATE = 'negotiate',
    REQUIRE = 'require'
}

export declare enum TNSRTCRtpTransceiverDirection {
    INACTIVE = 'inactive',
    RECV_ONLY = 'recvonly',
    SEND_ONLY = 'sendonly',
    SEND_RECV = 'sendrecv'
}

export declare enum TNSRTCSdpSemantics {
    PLAN_B = 'plan-b',
    UNIFIED_PLAN = 'unified-plan'
}


export interface TNSRTCConfigurationOptions {
    bundlePolicy?: TNSRTCBundlePolicy;
    sdpSemantics?: TNSRTCSdpSemantics;
    iceCandidatePoolSize?: number;
    iceTransportPolicy?: TNSRTCIceTransportPolicy;
    rtcpMuxPolicy?: TNSRTCRtcpMuxPolicy;
    iceServers?: Array<TNSRTCIceServerBase>;
    peerIdentity?: string;
}
/* Core */

/* Base */
declare class TNSRTCConfigurationBase {
    constructor(options?: TNSRTCConfigurationOptions);
}

declare abstract class TNSRTCDataChannelBase {
    constructor(channel: any);
}

declare class TNSRTCDataChannelEventBase {
    event: TNSRTCDataChannelBase;
    constructor(event: any);
}

declare abstract class TNSRTCDTMFSenderBase {
    constructor(sender: any);
    toneBuffer: string;
    abstract dispose(): void;
    abstract insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}


declare abstract class TNSRTCIceCandidateBase {
    _iceCandidate: any;
    candidate: string;
    sdp: string;
    sdpMid: string | null;
    sdpMLineIndex: number;
    usernameFragment: string;
    serverUrl: string;
    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number);
}


declare abstract class TNSRTCIceServerBase {
    server: any;
    protected constructor(urls: Array<string>, username?: string, credential?: string);
    abstract toWebRtc(): void;
    iceServer: any;
    credentialType: any;
    urls: Array<String>;
    username: string;
}

declare class TNSRTCMediaStreamBase {
    constructor(stream: any);
}

declare class TNSRTCMediaStreamConstraintsBase {
    constructor(audio: any, video: any);
}

declare abstract class TNSRTCMediaStreamTrackBase {
    id: string;
    enabled: boolean;
    kind: string;
    mute: boolean;
    abstract dispose(): void;
    readyState: string;
    constructor(mediaStreamTrack: any);
}

declare class TNSRTCRtpParametersBase {
    constructor(parameters: any);
}

declare class TNSRTCRtpReceiverBase {
    constructor(receiver: any);
}


declare abstract class TNSRTCRtpSenderBase {
    constructor(sender: any);
    dtmf: TNSRTCDTMFSenderBase;
    id: string;
    abstract dispose(): void;
    track: TNSRTCMediaStreamTrackBase;
    parameters: TNSRTCRtpParametersBase;
    abstract replaceTrack(track: TNSRTCMediaStreamTrackBase): void;
}

declare abstract class TNSRTCRtpTransceiverBase {
    constructor(transceiver: any);
    direction: TNSRTCRtpTransceiverDirection;
    currentDirection: TNSRTCRtpTransceiverDirection;
    mid: string;
    receiver: TNSRTCRtpReceiverBase;
    sender: TNSRTCRtpSenderBase;
    stopped: boolean;
    abstract stop(): void;
}

declare class TNSRTCTrackEventBase {
    mediaTrack: TNSRTCMediaStreamTrackBase;
    transceiver: TNSRTCRtpTransceiverBase;
    receiver: TNSRTCRtpReceiverBase;
    streams: Array<TNSRTCMediaStreamBase>;
    constructor(event: any);
}

/* Base */

export declare class TNSRTCAudioTrack extends TNSRTCMediaStreamTrack {
    private _audioTrack;
    constructor(track: any);
    static fromNative(track: any): TNSRTCAudioTrack;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
    volume: number;
}

export declare class TNSRTCConfiguration extends TNSRTCConfigurationBase {
    private _configuration;
    constructor(options?: TNSRTCConfigurationOptions);
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}

export declare class TNSRTCDataChannel extends TNSRTCDataChannelBase {
    private _channel;
    private constructor();
    static fromNative(channel: any): TNSRTCDataChannel;
    readonly android: any;
    readonly instance: any;
    readonly ios: any;
}

export declare class TNSRTCDataChannelEvent extends TNSRTCDataChannelEventBase {
    private _event;
    constructor(event: any);
    readonly channel: TNSRTCDataChannel;
    static fromNative(event: any): TNSRTCDataChannelEvent;
}

export declare class TNSRTCDTMFSender extends TNSRTCDTMFSenderBase {
    private _sender;
    private constructor();
    static fromNative(sender: any): TNSRTCDTMFSender;
    dispose(): void;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    readonly toneBuffer: string;
    readonly android: any;
    readonly instance: any;
    readonly ios: any;
}

export declare class TNSRTCIceCandidate extends TNSRTCIceCandidateBase {
    _iceCandidate: any;
    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number);
    static fromNative(candidate: any): TNSRTCIceCandidate;
    readonly candidate: string;
    readonly sdp: string;
    readonly sdpMid: string | null;
    readonly sdpMLineIndex: number;
    readonly usernameFragment: string;
    readonly serverUrl: string;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
}


export declare class TNSRTCIceServer extends TNSRTCIceServerBase {
    constructor(urls: Array<string>, username?: string, credential?: string);
    credential: string;
    toWebRtc(): any;
    readonly iceServer: any;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
    credentialType: any;
    urls: Array<String>;
    username: string;
}

export declare class TNSRTCMediaDevices {
    static getUserMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream>;
}

export declare class TNSRTCMediaStream extends TNSRTCMediaStreamBase {
    private _stream;
    private constructor();
    readonly id: string;
    readonly videoTracks: Array<TNSRTCVideoTrack>;
    readonly audioTracks: Array<TNSRTCAudioTrack>;
    addTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void;
    removeTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void;
    static fromNative(stream: any): TNSRTCMediaStream;
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}

declare class TNSRTCMediaStreamConstraints extends TNSRTCMediaStreamConstraintsBase {
    private _mediaStreamConstraints;
    constructor(audio: any, video: any);
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}


export declare class TNSRTCMediaStreamTrack extends TNSRTCMediaStreamTrackBase {
    private _mediaStreamTrack;
    constructor(mediaStreamTrack: any);
    readonly id: string;
    enabled: boolean;
    readonly kind: string;
    readonly readyState: string;
    readonly mute: boolean;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
    readonly mediaStreamTrack: any;
    dispose(): void;
    static fromNative(mediaStreamTrack: any): TNSRTCMediaStreamTrack;
}

export declare class TNSRTCPeerConnection {
    android: any;
    os: any;
    constructor(config?: TNSRTCConfiguration);
    readonly localDescription: TNSRTCSessionDescription;
    readonly remoteDescription: TNSRTCSessionDescription;
    readonly connectionState: TNSRTCPeerConnectionState;
    onConnectionStateChange(callback: () => void): void;
    onTrack(callback: (track: TNSRTCTrackEvent) => void): void;
    onRemoveTrackListener(callback: () => void): void;
    onRemoveStream(callback: (stream: TNSRTCMediaStream) => void): void;
    onIceGatheringStateChange(callback: any): void;
    onAddStream(callback: (stream: TNSRTCMediaStream) => void): void;
    onNegotiationNeeded(callback: () => void): void;
    onSignalingStateChange(callback: () => void): void;
    onIceCandidate(callback: (candidate: TNSRTCIceCandidate) => void): void;
    onDataChannel(callback: (channel: TNSRTCDataChannelEvent) => void): any;
    defaultIceServers(): Array<TNSRTCIceServer>;
    addIceCandidate(candidate: TNSRTCIceCandidate): void;
    addTrack(track: TNSRTCMediaStreamTrack, streamIds: Array<string>): void;
    close(): void;
    createDataChannel(label: string, channelInit: TNSRTCDataChannelInit): TNSRTCDataChannel;
    createAnswer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription>;
    createOffer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription>;
    setLocalDescription(sdp: TNSRTCSessionDescription): Promise<any>;
    setRemoteDescription(sdp: TNSRTCSessionDescription): Promise<any>;
    dispose(): void;
}

export declare class TNSRTCRtpParameters extends TNSRTCRtpParametersBase {
    private _parameters;
    private constructor();
    static fromNative(parameters: any): TNSRTCRtpParameters;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
}


export declare class TNSRTCRtpReceiver extends TNSRTCRtpReceiverBase {
    private _receiver;
    private constructor();
    static fromNative(receiver: any): TNSRTCRtpReceiver;
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}


export declare class TNSRTCRtpSender extends TNSRTCRtpSenderBase {
    private _sender;
    private constructor();
    static fromNative(sender: any): TNSRTCRtpSender;
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
    dispose(): void;
    replaceTrack(track: TNSRTCMediaStreamTrack): void;
    readonly dtmf: TNSRTCDTMFSender;
    readonly id: string;
    readonly track: TNSRTCMediaStreamTrack;
    readonly parameters: TNSRTCRtpParameters;
}


export declare class TNSRTCRtpTransceiver extends TNSRTCRtpTransceiverBase {
    private _transceiver;
    private constructor();
    static fromNative(transceiver: any): TNSRTCRtpTransceiver;
    stop(): void;
    readonly direction: TNSRTCRtpTransceiverDirection;
    readonly currentDirection: TNSRTCRtpTransceiverDirection;
    readonly mid: string;
    readonly receiver: TNSRTCRtpReceiver;
    readonly sender: TNSRTCRtpSender;
    readonly stopped: boolean;
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}

export declare enum TNSRTCSdpType {
    ANSWER = "answer",
    OFFER = "offer",
    PRANSWER = "pranswer",
    ROLLBACK = "rollback"
}


export declare class TNSRTCSessionDescription {
    private _sessionDescription;
    constructor(...args: any[]);
    static fromNative(sdp: any): TNSRTCSessionDescription;
    readonly type: TNSRTCSdpType;
    readonly sdp: string;
    toJSON(): string;
    readonly instance: any;
    readonly android: any;
    readonly ios: any;
}


export declare class TNSRTCTrackEvent extends TNSRTCTrackEventBase {
    private _event;
    constructor(event: any);
    readonly mediaTrack: TNSRTCMediaStreamTrack;
    readonly transceiver: TNSRTCRtpTransceiver;
    readonly receiver: TNSRTCRtpReceiver;
    readonly streams: Array<TNSRTCMediaStream>;
    static fromNative(event: any): TNSRTCTrackEvent;
}


export declare class TNSRTCVideoTrack extends TNSRTCMediaStreamTrack {
    private _videoTrack;
    constructor(track: any);
    static fromNative(track: any): TNSRTCVideoTrack;
    readonly android: any;
    readonly ios: any;
    readonly instance: any;
}

