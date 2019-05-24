declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class BuildConfig {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;

                public constructor();
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCApplicationHelper {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCApplicationHelper>;

                public requestPermissions(param0: globalAndroid.content.Context, param1: native.Array<string>, param2: number, param3: co.fitcom.fancywebrtc.FancyRTCApplicationHelper.Callback): void;

                public handlePermissionResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;

                public handleResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;

                public static getInstance(): co.fitcom.fancywebrtc.FancyRTCApplicationHelper;

                public requestPermission(param0: globalAndroid.content.Context, param1: string, param2: number, param3: co.fitcom.fancywebrtc.FancyRTCApplicationHelper.Callback): void;

                public constructor();

                public onResult(param0: number, param1: co.fitcom.fancywebrtc.FancyRTCApplicationHelper.Callback): void;
            }

            export namespace FancyRTCApplicationHelper {
                export class Callback {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCApplicationHelper.Callback>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCApplicationHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onPermissionResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
                        onResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                    });
                    public constructor();

                    public onResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;

                    public onPermissionResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCAudioTrack extends co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCAudioTrack>;

                public stop(): void;

                public applyConstraints(param0: co.fitcom.fancywebrtc.FancyRTCMediaTrackConstraints, param1: co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack.FancyRTCMediaStreamTrackListener): void;

                public setVolume(param0: number): void;

                public setEnabled(param0: boolean): void;

                public getAudioTrack(): org.webrtc.AudioTrack;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCBundlePolicy {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCBundlePolicy>;
                public static BALANCED: co.fitcom.fancywebrtc.FancyRTCBundlePolicy;
                public static MAX_COMPAT: co.fitcom.fancywebrtc.FancyRTCBundlePolicy;
                public static MAX_BUNDLE: co.fitcom.fancywebrtc.FancyRTCBundlePolicy;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCBundlePolicy>;

                public toString(): string;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCBundlePolicy;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCConfiguration {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCConfiguration>;

                public setRtcpMuxPolicy(param0: co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy): void;

                public setIceTransportPolicy(param0: co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy): void;

                public constructor(param0: java.util.List<co.fitcom.fancywebrtc.FancyRTCIceServer>);

                public setPeerIdentity(param0: string): void;

                public setBundlePolicy(param0: co.fitcom.fancywebrtc.FancyRTCBundlePolicy): void;

                public getSdpSemantics(): co.fitcom.fancywebrtc.FancyRTCSdpSemantics;

                public getIceCandidatePoolSize(): number;

                public getBundlePolicy(): co.fitcom.fancywebrtc.FancyRTCBundlePolicy;

                public getRtcpMuxPolicy(): co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy;

                public getIceServers(): java.util.List<co.fitcom.fancywebrtc.FancyRTCIceServer>;

                public constructor();
                public constructor(param0: java.util.Map<string, any>);

                public setSdpSemantics(param0: co.fitcom.fancywebrtc.FancyRTCSdpSemantics): void;

                public setIceServers(param0: java.util.List<co.fitcom.fancywebrtc.FancyRTCIceServer>): void;

                public setIceCandidatePoolSize(param0: number): void;

                public getPeerIdentity(): string;

                public getIceTransportPolicy(): co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy;

                public getConfiguration(): org.webrtc.PeerConnection.RTCConfiguration;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCDTMFSender {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCDTMFSender>;

                public insertDTMF(param0: string, param1: java.lang.Integer, param2: java.lang.Integer): void;

                public getToneBuffer(): string;

                public dispose(): void;

                public constructor(param0: org.webrtc.DtmfSender);

                public getSender(): org.webrtc.DtmfSender;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCDataChannel {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCDataChannel>;

                public getDataChannel(): org.webrtc.DataChannel;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCDataChannelEvent {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCDataChannelEvent>;
                public channel: co.fitcom.fancywebrtc.FancyRTCDataChannel;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCDataChannelInit {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCDataChannelInit>;

                public getMaxPacketLifeTime(): number;

                public getInit(): org.webrtc.DataChannel.Init;

                public getId(): number;

                public getMaxRetransmits(): number;

                public getProtocol(): string;

                public toJSON(): string;

                public constructor();
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCIceCandidate {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCIceCandidate>;

                public constructor(param0: string, param1: string, param2: number);

                public getCandidate(): string;

                public getSdpMLineIndex(): number;

                public getUsernameFragment(): string;

                public static fromJSON(param0: string): co.fitcom.fancywebrtc.FancyRTCIceCandidate;

                public getIceCandidate(): org.webrtc.IceCandidate;

                public getSdpMid(): string;

                public setSdpMid(param0: string): void;

                public constructor();

                public setCandidate(param0: string): void;

                public setSdp(param0: string): void;

                public setUsernameFragment(param0: string): void;

                public getServerUrl(): string;

                public setSdpMLineIndex(param0: number): void;

                public getSdp(): string;

                public toJSON(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCIceCredentialType {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCIceCredentialType>;
                public static PASSWORD: co.fitcom.fancywebrtc.FancyRTCIceCredentialType;
                public static TOKEN: co.fitcom.fancywebrtc.FancyRTCIceCredentialType;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCIceCredentialType>;

                public toString(): string;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCIceCredentialType;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCIceServer {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCIceServer>;

                public getUrls(): native.Array<string>;

                public setUrls(param0: native.Array<string>): void;

                public constructor(param0: native.Array<string>, param1: string, param2: string);
                public constructor(param0: string, param1: string, param2: string);
                public constructor(param0: string);

                public toWebRtc(): org.webrtc.PeerConnection.IceServer;

                public getCredential(): string;

                public getIceServer(): org.webrtc.PeerConnection.IceServer;

                public setCredentialType(param0: co.fitcom.fancywebrtc.FancyRTCIceCredentialType): void;

                public setUsername(param0: string): void;

                public constructor(param0: native.Array<string>);

                public setCredential(param0: string): void;

                public getCredentialType(): co.fitcom.fancywebrtc.FancyRTCIceCredentialType;

                public getUsername(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCIceTransportPolicy {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy>;
                public static ALL: co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy;
                public static PUBLIC: co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy;
                public static RELAY: co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy>;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy;

                public toString(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaConstraints {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaConstraints>;
                public mandatory: java.util.List<co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue>;
                public optional: java.util.List<co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue>;

                public getMediaConstraints(): org.webrtc.MediaConstraints;

                public toJSON(): string;

                public constructor();
            }

            export namespace FancyRTCMediaConstraints {
                export class KeyValue {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue>;

                    public constructor(param0: string, param1: string);
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaDevices {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaDevices>;
                public static WEBRTC_SCREEN_PERMISSIONS_REQUEST_CODE: number;

                public static getUserMedia(param0: globalAndroid.content.Context, param1: co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints, param2: co.fitcom.fancywebrtc.FancyRTCMediaDevices.GetUserMediaListener): void;

                public static stopCapturers(): void;

                public static getDisplayMedia(param0: globalAndroid.content.Context, param1: co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints, param2: co.fitcom.fancywebrtc.FancyRTCMediaDevices.GetUserMediaListener): void;

                public constructor();
            }

            export namespace FancyRTCMediaDevices {
                export class FancyCapturer {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaDevices.FancyCapturer>;

                    public setAspectRatio(param0: number): void;

                    public getAspectRatio(): number;

                    public setFrameRate(param0: number): void;

                    public setPosition(param0: string): void;

                    public setWidth(param0: number): void;

                    public getHeight(): number;

                    public getCapturer(): org.webrtc.CameraVideoCapturer;

                    public setHeight(param0: number): void;

                    public getWidth(): number;

                    public getPosition(): string;

                    public getFrameRate(): number;
                }

                export class GetUserMediaListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaDevices.GetUserMediaListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCMediaDevices$GetUserMediaListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onSuccess(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;
                        onError(param0: string): void;
                    });
                    public constructor();

                    public onSuccess(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;

                    public onError(param0: string): void;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaStream {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaStream>;

                public getAudioTracks(): java.util.List<co.fitcom.fancywebrtc.FancyRTCAudioTrack>;

                public getVideoTracks(): java.util.List<co.fitcom.fancywebrtc.FancyRTCVideoTrack>;

                public getId(): string;

                public removeTrack(param0: co.fitcom.fancywebrtc.FancyRTCVideoTrack): void;
                public removeTrack(param0: co.fitcom.fancywebrtc.FancyRTCAudioTrack): void;

                public getStream(): org.webrtc.MediaStream;

                public constructor(param0: number);

                public getTracks(): java.util.List<co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack>;

                public addTrack(param0: co.fitcom.fancywebrtc.FancyRTCVideoTrack): void;

                public constructor();

                public addTrack(param0: co.fitcom.fancywebrtc.FancyRTCAudioTrack): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaStreamConstraints {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints>;

                public constructor(param0: boolean, param1: boolean);
                public constructor(param0: java.util.Map<string, any>, param1: java.util.Map<string, any>);
                public constructor(param0: java.util.Map<string, any>, param1: boolean);
                public constructor(param0: boolean, param1: java.util.Map<string, any>);
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaStreamTrack {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack>;

                public getKind(): string;

                public getId(): string;

                public getEnabled(): boolean;

                public dispose(): void;

                public getMediaStreamTrack(): org.webrtc.MediaStreamTrack;

                public constructor(param0: org.webrtc.MediaStreamTrack);

                public getSettings(): co.fitcom.fancywebrtc.FancyRTCMediaTrackSettings;

                public getMute(): boolean;

                public setEnabled(param0: boolean): void;

                public getReadyState(): string;
            }

            export namespace FancyRTCMediaStreamTrack {
                export class FancyRTCMediaStreamTrackListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack.FancyRTCMediaStreamTrackListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack$FancyRTCMediaStreamTrackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onSuccess(): void;
                        onError(param0: string): void;
                    });
                    public constructor();

                    public onError(param0: string): void;

                    public onSuccess(): void;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaTrackConstraints {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaTrackConstraints>;

                public constructor(param0: java.util.Map<string, any>);

                public getFacingMode(): string;

                public setFacingMode(param0: string): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCMediaTrackSettings {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCMediaTrackSettings>;

                public getWidth(): number;

                public getHeight(): number;

                public getFrameRate(): number;

                public facingMode(): string;

                public getAspectRatio(): number;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCPeerConnection {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection>;

                public setOnConnectionStateChange(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnConnectionStateChangeListener): void;

                public getConnectionState(): co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;

                public setOnAddStreamListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnAddStreamListener): void;

                public addIceCandidate(param0: co.fitcom.fancywebrtc.FancyRTCIceCandidate): void;

                public setOnRemoveTrackListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveTrackListener): void;

                public getLocalDescription(): co.fitcom.fancywebrtc.FancyRTCSessionDescription;

                public setOnSignalingStateChangeListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnSignalingStateChangeListener): void;

                public constructor(param0: globalAndroid.content.Context);

                public setOnIceConnectionChange(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceConnectionChangeListener): void;

                public setOnDataChannelListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnDataChannelListener): void;

                public close(): void;

                public getSenders(): java.util.List<co.fitcom.fancywebrtc.FancyRTCRtpSender>;

                public setOnRemoveStreamListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveStreamListener): void;

                public createAnswer(param0: co.fitcom.fancywebrtc.FancyRTCMediaConstraints, param1: co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpCreateListener): void;

                public createOffer(param0: co.fitcom.fancywebrtc.FancyRTCMediaConstraints, param1: co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpCreateListener): void;

                public setOnNegotiationNeededListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnNegotiationNeededListener): void;

                public setOnTrackListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnTrackListener): void;

                public setRemoteDescription(param0: co.fitcom.fancywebrtc.FancyRTCSessionDescription, param1: co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener): void;

                public getConnection(): org.webrtc.PeerConnection;

                public setOnIceCandidateListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceCandidateListener): void;

                public setLocalDescription(param0: co.fitcom.fancywebrtc.FancyRTCSessionDescription, param1: co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener): void;

                public getDefaultIceServers(): java.util.List<co.fitcom.fancywebrtc.FancyRTCIceServer>;

                public constructor(param0: globalAndroid.content.Context, param1: co.fitcom.fancywebrtc.FancyRTCConfiguration);

                public createDataChannel(param0: string, param1: co.fitcom.fancywebrtc.FancyRTCDataChannelInit): co.fitcom.fancywebrtc.FancyRTCDataChannel;

                public dispose(): void;

                public getRemoteDescription(): co.fitcom.fancywebrtc.FancyRTCSessionDescription;

                public addTrack(param0: co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack, param1: java.util.List<string>): void;

                public setOnIceGatheringStateChangeListener(param0: co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceGatheringStateChangeListener): void;
            }

            export namespace FancyRTCPeerConnection {
                export class FancyOnAddStreamListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnAddStreamListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnAddStreamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onAddStream(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;
                    });
                    public constructor();

                    public onAddStream(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;
                }

                export class FancyOnConnectionStateChangeListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnConnectionStateChangeListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnConnectionStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onChange(): void;
                    });
                    public constructor();

                    public onChange(): void;
                }

                export class FancyOnDataChannelListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnDataChannelListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnDataChannelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onDataChannel(param0: co.fitcom.fancywebrtc.FancyRTCDataChannelEvent): void;
                    });
                    public constructor();

                    public onDataChannel(param0: co.fitcom.fancywebrtc.FancyRTCDataChannelEvent): void;
                }

                export class FancyOnIceCandidateListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceCandidateListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnIceCandidateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onIceCandidate(param0: co.fitcom.fancywebrtc.FancyRTCIceCandidate): void;
                    });
                    public constructor();

                    public onIceCandidate(param0: co.fitcom.fancywebrtc.FancyRTCIceCandidate): void;
                }

                export class FancyOnIceConnectionChangeListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceConnectionChangeListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnIceConnectionChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onChange(): void;
                    });
                    public constructor();

                    public onChange(): void;
                }

                export class FancyOnIceGatheringStateChangeListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceGatheringStateChangeListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnIceGatheringStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onIceGatheringStateChange(): void;
                    });
                    public constructor();

                    public onIceGatheringStateChange(): void;
                }

                export class FancyOnNegotiationNeededListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnNegotiationNeededListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnNegotiationNeededListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onNegotiationNeeded(): void;
                    });
                    public constructor();

                    public onNegotiationNeeded(): void;
                }

                export class FancyOnRemoveStreamListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveStreamListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnRemoveStreamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onRemoveStream(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;
                    });
                    public constructor();

                    public onRemoveStream(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;
                }

                export class FancyOnRemoveTrackListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveTrackListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnRemoveTrackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onRemoveTrack(): void;
                    });
                    public constructor();

                    public onRemoveTrack(): void;
                }

                export class FancyOnSignalingStateChangeListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnSignalingStateChangeListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnSignalingStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onSignalingStateChange(): void;
                    });
                    public constructor();

                    public onSignalingStateChange(): void;
                }

                export class FancyOnTrackListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnTrackListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$FancyOnTrackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onTrack(param0: co.fitcom.fancywebrtc.FancyRTCTrackEvent): void;
                    });
                    public constructor();

                    public onTrack(param0: co.fitcom.fancywebrtc.FancyRTCTrackEvent): void;
                }

                export class SdpCreateListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpCreateListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$SdpCreateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onSuccess(param0: co.fitcom.fancywebrtc.FancyRTCSessionDescription): void;
                        onError(param0: string): void;
                    });
                    public constructor();

                    public onError(param0: string): void;

                    public onSuccess(param0: co.fitcom.fancywebrtc.FancyRTCSessionDescription): void;
                }

                export class SdpSetListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyRTCPeerConnection$SdpSetListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onSuccess(): void;
                        onError(param0: string): void;
                    });
                    public constructor();

                    public onError(param0: string): void;

                    public onSuccess(): void;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCPeerConnectionState {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCPeerConnectionState>;
                public static NEW: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;
                public static CONNECTING: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;
                public static CONNECTED: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;
                public static DISCONNECTED: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;
                public static FAILED: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;
                public static CLOSED: co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;

                public toString(): string;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCPeerConnectionState;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCPeerConnectionState>;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtcpMuxPolicy {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy>;
                public static NEGOTIATE: co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy;
                public static REQUIRE: co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy>;

                public toString(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtpParameters {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtpParameters>;

                public constructor(param0: org.webrtc.RtpParameters);

                public getParameters(): org.webrtc.RtpParameters;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtpReceiver {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtpReceiver>;

                public constructor(param0: org.webrtc.RtpReceiver);

                public getRtpReceiver(): org.webrtc.RtpReceiver;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtpSender {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtpSender>;

                public getSender(): org.webrtc.RtpSender;

                public getParameters(): co.fitcom.fancywebrtc.FancyRTCRtpParameters;

                public getId(): string;

                public getDtmf(): co.fitcom.fancywebrtc.FancyRTCDTMFSender;

                public dispose(): void;

                public getTrack(): co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack;

                public constructor(param0: org.webrtc.RtpSender);

                public replaceTrack(param0: co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtpTransceiver {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtpTransceiver>;

                public constructor(param0: org.webrtc.RtpTransceiver);

                public getStopped(): boolean;

                public stop(): void;

                public getCurrentDirection(): co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;

                public getDirection(): co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;

                public getReceiver(): co.fitcom.fancywebrtc.FancyRTCRtpReceiver;

                public getMid(): string;

                public getSender(): co.fitcom.fancywebrtc.FancyRTCRtpSender;

                public getRtpTransceiver(): org.webrtc.RtpTransceiver;

                public setDirection(param0: co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCRtpTransceiverDirection {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection>;
                public static INACTIVE: co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;
                public static RECV_ONLY: co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;
                public static SEND_ONLY: co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;
                public static SEND_RECV: co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection>;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCSdpSemantics {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCSdpSemantics>;
                public static PLAN_B: co.fitcom.fancywebrtc.FancyRTCSdpSemantics;
                public static UNIFIED_PLAN: co.fitcom.fancywebrtc.FancyRTCSdpSemantics;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCSdpSemantics>;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCSdpSemantics;

                public toString(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCSdpType {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCSdpType>;
                public static ANSWER: co.fitcom.fancywebrtc.FancyRTCSdpType;
                public static OFFER: co.fitcom.fancywebrtc.FancyRTCSdpType;
                public static PRANSWER: co.fitcom.fancywebrtc.FancyRTCSdpType;
                public static ROLLBACK: co.fitcom.fancywebrtc.FancyRTCSdpType;

                public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyRTCSdpType;

                public static values(): native.Array<co.fitcom.fancywebrtc.FancyRTCSdpType>;

                public toString(): string;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCSessionDescription {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCSessionDescription>;

                public getType(): co.fitcom.fancywebrtc.FancyRTCSdpType;

                public getSDP(): string;

                public getDescription(): string;

                public toJSON(): string;

                public getSessionDescription(): org.webrtc.SessionDescription;

                public constructor(param0: co.fitcom.fancywebrtc.FancyRTCSdpType, param1: string);
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCTrackEvent {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCTrackEvent>;

                public getMediaTrack(): co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack;

                public getTransceiver(): co.fitcom.fancywebrtc.FancyRTCRtpTransceiver;

                public getReceiver(): co.fitcom.fancywebrtc.FancyRTCRtpReceiver;

                public getStreams(): java.util.List<co.fitcom.fancywebrtc.FancyRTCMediaStream>;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyRTCVideoTrack extends co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyRTCVideoTrack>;

                public getVideoTrack(): org.webrtc.VideoTrack;

                public stop(): void;

                public applyConstraints(param0: co.fitcom.fancywebrtc.FancyRTCMediaTrackConstraints, param1: co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack.FancyRTCMediaStreamTrackListener): void;

                public constructor(param0: org.webrtc.MediaStreamTrack);
                public constructor(param0: org.webrtc.VideoTrack);

                public getSettings(): co.fitcom.fancywebrtc.FancyRTCMediaTrackSettings;

                public setEnabled(param0: boolean): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyUtils {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyUtils>;

                public static getUUID(): string;

                public static getLongUUID(): java.lang.Long;

                public constructor();
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyVideoTrack extends co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyVideoTrack>;

                public getVideoTrack(): org.webrtc.VideoTrack;

                public constructor(param0: org.webrtc.MediaStreamTrack);
                public constructor(param0: org.webrtc.VideoTrack);

                public setEnabled(param0: boolean): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyWebRTC {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC>;
                public static WEBRTC_PERMISSIONS: native.Array<string>;
                public static WEBRTC_PERMISSIONS_REQUEST_CODE: number;
                public static Tag: string;

                public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: boolean, param3: java.util.ArrayList<org.webrtc.PeerConnection.IceServer>);

                public createAnswerForOfferReceived(param0: org.webrtc.SessionDescription, param1: org.webrtc.MediaConstraints): void;

                public getRemoteMediaStream(param0: string): org.webrtc.MediaStream;

                public addLocalStream(param0: org.webrtc.MediaStream): void;

                public createCapturer(param0: co.fitcom.fancywebrtc.FancyWebRTC.Quality): co.fitcom.fancywebrtc.FancyWebRTCCapturer;

                public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: boolean);

                public connect(): void;

                public disconnect(): void;

                public dataChannelSend(param0: string, param1: string, param2: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType): void;

                public toggleMic(): void;

                public getListener(): co.fitcom.fancywebrtc.FancyWebRTCListener;

                public dataChannelCreate(param0: string): void;

                public speakerEnabled(param0: boolean): void;

                public toggleSpeaker(): void;

                public addRemoteStream(param0: org.webrtc.MediaStream): void;

                public handleAnswerReceived(param0: org.webrtc.SessionDescription): void;

                public getLocalMediaStream(param0: string): org.webrtc.MediaStream;

                public static init(param0: globalAndroid.content.Context): void;

                public addIceCandidate(param0: org.webrtc.IceCandidate): void;

                public makeOffer(param0: org.webrtc.MediaConstraints): void;

                public switchCamera(param0: string): void;

                public static hasPermissions(param0: globalAndroid.content.Context): boolean;

                public getUserMedia(param0: co.fitcom.fancywebrtc.FancyWebRTC.Quality, param1: co.fitcom.fancywebrtc.FancyWebRTCListener.GetUserMediaListener): void;

                public micEnabled(param0: boolean): void;

                public setListener(param0: co.fitcom.fancywebrtc.FancyWebRTCListener): void;

                public dataChannelClose(param0: string): void;

                public enableTrack(param0: string, param1: boolean): void;

                public static requestPermissions(param0: globalAndroid.content.Context): void;
            }

            export namespace FancyWebRTC {
                export class DataChannelMessageType {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType>;
                    public static TEXT: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType;
                    public static BINARY: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType;

                    public static values(): native.Array<co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType>;

                    public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType;
                }

                export class DataChannelState {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState>;
                    public static CONNECTING: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState;
                    public static OPEN: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState;
                    public static CLOSING: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState;
                    public static CLOSED: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState;

                    public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState;

                    public static values(): native.Array<co.fitcom.fancywebrtc.FancyWebRTC.DataChannelState>;
                }

                export class MediaData {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC.MediaData>;
                    public mediaSource: org.webrtc.MediaSource;
                    public track: org.webrtc.MediaStreamTrack;
                    public capturer: co.fitcom.fancywebrtc.FancyWebRTCCapturer;

                    public constructor(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaSource, param2: org.webrtc.MediaStreamTrack, param3: co.fitcom.fancywebrtc.FancyWebRTCCapturer);
                }

                export class Quality {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC.Quality>;
                    public static MAX_480P: co.fitcom.fancywebrtc.FancyWebRTC.Quality;
                    public static MAX_720P: co.fitcom.fancywebrtc.FancyWebRTC.Quality;
                    public static MAX_1080P: co.fitcom.fancywebrtc.FancyWebRTC.Quality;
                    public static MAX_2160P: co.fitcom.fancywebrtc.FancyWebRTC.Quality;
                    public static HIGHEST: co.fitcom.fancywebrtc.FancyWebRTC.Quality;
                    public static LOWEST: co.fitcom.fancywebrtc.FancyWebRTC.Quality;

                    public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyWebRTC.Quality;

                    public static values(): native.Array<co.fitcom.fancywebrtc.FancyWebRTC.Quality>;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyWebRTCCapturer {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCCapturer>;

                public hasPermission(param0: globalAndroid.content.Context): boolean;

                public constructor(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.CameraVideoCapturer);

                public startVideo(param0: globalAndroid.content.Context): void;

                public toggleCamera(): void;

                public stopVideo(): void;

                public setFormat(param0: org.webrtc.CameraEnumerationAndroid.CaptureFormat): void;

                public setVideoSource(param0: org.webrtc.VideoSource): void;
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyWebRTCEglUtils {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCEglUtils>;

                public static getRootEglBaseContext(): org.webrtc.EglBase.Context;

                public static getRootEglBase(): org.webrtc.EglBase;

                public constructor();
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyWebRTCListener {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCListener>;

                /**
                 * Constructs a new instance of the co.fitcom.fancywebrtc.FancyWebRTCListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    webRTCClientDidReceiveError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;
                    webRTCClientStartCallWithSdp(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.SessionDescription): void;
                    webRTCClientDataChannelStateChanged(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string, param2: org.webrtc.DataChannel.State): void;
                    webRTCClientDataChannelMessageType(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string, param2: string, param3: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType): void;
                    webRTCClientOnRemoveStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;
                    webRTCClientDidReceiveStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;
                    webRTCClientDidGenerateIceCandidate(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.IceCandidate): void;
                    webRTCClientOnRenegotiationNeeded(param0: co.fitcom.fancywebrtc.FancyWebRTC): void;
                    webRTCClientOnIceCandidatesRemoved(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: native.Array<org.webrtc.IceCandidate>): void;
                    webRTCClientOnIceConnectionChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.IceConnectionState): void;
                    webRTCClientOnIceConnectionReceivingChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: boolean): void;
                    webRTCClientOnIceGatheringChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.IceGatheringState): void;
                    webRTCClientOnSignalingChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.SignalingState): void;
                    webRTCClientOnCameraSwitchDone(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: boolean): void;
                    webRTCClientOnCameraSwitchError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;
                });
                public constructor();

                public webRTCClientDidGenerateIceCandidate(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.IceCandidate): void;

                public webRTCClientDidReceiveStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;

                public webRTCClientOnIceConnectionReceivingChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: boolean): void;

                public webRTCClientDataChannelMessageType(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string, param2: string, param3: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType): void;

                public webRTCClientOnRemoveStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;

                public webRTCClientOnIceConnectionChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.IceConnectionState): void;

                public webRTCClientOnSignalingChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.SignalingState): void;

                public webRTCClientDidReceiveError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;

                public webRTCClientDataChannelStateChanged(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string, param2: org.webrtc.DataChannel.State): void;

                public webRTCClientOnCameraSwitchDone(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: boolean): void;

                public webRTCClientOnIceCandidatesRemoved(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: native.Array<org.webrtc.IceCandidate>): void;

                public webRTCClientOnRenegotiationNeeded(param0: co.fitcom.fancywebrtc.FancyWebRTC): void;

                public webRTCClientStartCallWithSdp(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.SessionDescription): void;

                public webRTCClientOnIceGatheringChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.PeerConnection.IceGatheringState): void;

                public webRTCClientOnCameraSwitchError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;
            }

            export namespace FancyWebRTCListener {
                export class GetUserMediaListener {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCListener.GetUserMediaListener>;

                    /**
                     * Constructs a new instance of the co.fitcom.fancywebrtc.FancyWebRTCListener$GetUserMediaListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        webRTCClientOnGetUserMedia(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;
                        webRTCClientOnGetUserMediaDidReceiveError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;
                    });
                    public constructor();

                    public webRTCClientOnGetUserMediaDidReceiveError(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string): void;

                    public webRTCClientOnGetUserMedia(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;
                }
            }
        }
    }
}

declare namespace co {
    export namespace fitcom {
        export namespace fancywebrtc {
            export class FancyWebRTCView {
                public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCView>;

                public setSrcObject(param0: co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack): void;

                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);

                public setMirror(param0: boolean): void;

                public setScaling(param0: co.fitcom.fancywebrtc.FancyWebRTCView.Scaling): void;

                public setSrcObject(param0: co.fitcom.fancywebrtc.FancyRTCMediaStream): void;

                public setVideoTrack(param0: org.webrtc.VideoTrack): void;

                public setSrcObject(param0: org.webrtc.MediaStream): void;
                public setSrcObject(param0: org.webrtc.MediaStreamTrack): void;
            }

            export namespace FancyWebRTCView {
                export class Scaling {
                    public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCView.Scaling>;
                    public static FIT: co.fitcom.fancywebrtc.FancyWebRTCView.Scaling;
                    public static FILL: co.fitcom.fancywebrtc.FancyWebRTCView.Scaling;
                    public static NONE: co.fitcom.fancywebrtc.FancyWebRTCView.Scaling;

                    public static values(): native.Array<co.fitcom.fancywebrtc.FancyWebRTCView.Scaling>;

                    public static valueOf(param0: string): co.fitcom.fancywebrtc.FancyWebRTCView.Scaling;
                }
            }
        }
    }
}

