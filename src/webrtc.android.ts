import {
    Common,
    IceConnectionState,
    IceGatheringState,
    Quality,
    SignalingState,
    WebRTCDataChannelMessageType,
    WebRTCDataChannelState,
    WebRTCIceCandidate,
    WebRTCOptions,
    WebRTCSdp,
    WebRTCSdpType
} from './webrtc.common';

import { fromObject } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view';
import { ad } from 'tns-core-modules/utils/utils';
import * as permissions from 'nativescript-permissions';
import { TNSRTCMediaStream, TNSRTCMediaStreamTrack } from './src/android';

export * from './src/android';
export {
    IceConnectionState,
    IceServer,
    IceGatheringState,
    Quality,
    SignalingState,
    WebRTCDataChannelMessageType,
    WebRTCDataChannelState,
    WebRTCIceCandidate,
    WebRTCOptions,
    WebRTCSdp,
    WebRTCSdpType,
    WebRTCState
} from './webrtc.common';

declare var co, org;

export class WebRTC extends Common {
    private webrtc: any /* co.fitcom.fancywebrtc.FancyWebRTC */;

    constructor(
        options: WebRTCOptions = {enableAudio: true, enableVideo: true}
    ) {
        super();
        let nativeIceServers: java.util.ArrayList<any>;
        if (options.iceServers) {
            nativeIceServers = new java.util.ArrayList();
            options.iceServers.forEach(iceServer => {
                const server = org.webrtc.PeerConnection.IceServer.builder(
                    iceServer.url
                );
                if (iceServer.username) {
                    server.setUsername(iceServer.username);
                }

                if (iceServer.password) {
                    server.setPassword(iceServer.password);
                }
                nativeIceServers.add(server.createIceServer());
            });
        }

        if (nativeIceServers) {
            this.webrtc = new co.fitcom.fancywebrtc.FancyWebRTC(
                ad.getApplicationContext(),
                new java.lang.Boolean(!!options.enableVideo).booleanValue(),
                new java.lang.Boolean(!!options.enableAudio).booleanValue(),
                nativeIceServers
            );
        } else {
            this.webrtc = new co.fitcom.fancywebrtc.FancyWebRTC(
                ad.getApplicationContext(),
                new java.lang.Boolean(!!options.enableVideo).booleanValue(),
                new java.lang.Boolean(!!options.enableAudio).booleanValue()
            );
        }

        const ref = new WeakRef(this);
        this.webrtc.setListener(
            new co.fitcom.fancywebrtc.FancyWebRTCListener({
                webRTCClientDidReceiveError(param0: any, param1: string): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientDidReceiveError',
                        object: fromObject({
                            client: owner,
                            error: param1
                        })
                    });
                },
                webRTCClientStartCallWithSdp(param0: any, param1: any): void {
                    const owner = ref.get();
                    let type;
                    switch (param1.type) {
                        case org.webrtc.SessionDescription.Type.OFFER:
                            type = WebRTCSdpType.OFFER;
                            break;
                        case org.webrtc.SessionDescription.Type.PRANSWER:
                            type = WebRTCSdpType.PRANSWER;
                            break;
                        case org.webrtc.SessionDescription.Type.ANSWER:
                            type = WebRTCSdpType.ANSWER;
                            break;
                    }
                    owner.notify({
                        eventName: 'webRTCClientStartCallWithSdp',
                        object: fromObject({
                            client: owner,
                            sdp: param1.description,
                            type: type
                        })
                    });
                },
                webRTCClientDataChannelStateChanged(
                    param0: any,
                    param1: string,
                    param2: any
                ): void {
                    const owner = ref.get();
                    let state;
                    switch (param2) {
                        case org.webrtc.DataChannel.State.CONNECTING:
                            state = WebRTCDataChannelState.CONNECTING;
                            break;
                        case org.webrtc.DataChannel.State.CLOSED:
                            state = WebRTCDataChannelState.CLOSED;
                            break;
                        case org.webrtc.DataChannel.State.CLOSING:
                            state = WebRTCDataChannelState.CLOSING;
                            break;
                        case org.webrtc.DataChannel.State.OPEN:
                            state = WebRTCDataChannelState.OPEN;
                            break;
                    }
                    owner.notify({
                        eventName: 'webRTCClientDataChannelStateChanged',
                        object: fromObject({
                            client: owner,
                            name: param1,
                            state: state
                        })
                    });
                },
                webRTCClientDataChannelMessageType(
                    param0: any,
                    param1: string,
                    param2: string,
                    param3: any
                ): void {
                    const owner = ref.get();
                    let type;
                    switch (param3) {
                        case co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType.TEXT:
                            type = WebRTCDataChannelMessageType.TEXT;
                            break;
                        case co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType
                            .BINARY:
                            type = WebRTCDataChannelMessageType.BINARY;
                            break;
                    }
                    owner.notify({
                        eventName: 'webRTCClientDataChannelMessageType',
                        object: fromObject({
                            client: owner,
                            name: param1,
                            message: param2,
                            type: type
                        })
                    });
                },
                webRTCClientOnRemoveStream(param0: any, param1: any): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnRemoveStream',
                        object: fromObject({
                            client: owner,
                            stream: param1
                        })
                    });
                },
                webRTCClientDidReceiveRemoteVideoTrackStream(
                    param0: any,
                    param1: any,
                    param2: any
                ): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientDidReceiveRemoteVideoTrackStream',
                        object: fromObject({
                            client: owner,
                            remoteVideoTrack: param1,
                            stream: param2
                        })
                    });
                },
                webRTCClientDidGenerateIceCandidate(param0: any, param1: any): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientDidGenerateIceCandidate',
                        object: fromObject({
                            client: owner,
                            iceCandidate: <WebRTCIceCandidate>{
                                sdp: param1.sdp,
                                sdpMid: param1.sdpMid,
                                sdpMLineIndex: param1.sdpMLineIndex,
                                serverUrl: param1.serverUrl
                            }
                        })
                    });
                },
                webRTCClientOnRenegotiationNeeded(param0: any): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnRenegotiationNeeded',
                        object: fromObject({
                            client: owner
                        })
                    });
                },
                webRTCClientOnIceCandidatesRemoved(
                    param0: any,
                    param1: native.Array<any>
                ): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnRenegotiationNeeded',
                        object: fromObject({
                            client: owner,
                            candidates: param1
                        })
                    });
                },
                webRTCClientOnIceConnectionChange(param0: any, param1: any): void {
                    const owner = ref.get();
                    let state;
                    switch (param1) {
                        case org.webrtc.PeerConnection.IceConnectionState.NEW:
                            state = IceConnectionState.NEW;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.CHECKING:
                            state = IceConnectionState.CHECKING;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.CONNECTED:
                            state = IceConnectionState.CONNECTED;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.COMPLETED:
                            state = IceConnectionState.COMPLETED;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.FAILED:
                            state = IceConnectionState.FAILED;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.DISCONNECTED:
                            state = IceConnectionState.DISCONNECTED;
                            break;
                        case org.webrtc.PeerConnection.IceConnectionState.CLOSED:
                            state = IceConnectionState.CLOSED;
                            break;
                    }
                    owner.notify({
                        eventName: 'webRTCClientOnIceConnectionChange',
                        object: fromObject({
                            client: owner,
                            state: state
                        })
                    });
                },
                webRTCClientOnIceConnectionReceivingChange(
                    param0: any,
                    param1: boolean
                ): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnIceConnectionReceivingChange',
                        object: fromObject({
                            client: owner,
                            change: param1
                        })
                    });
                },
                webRTCClientOnIceGatheringChange(param0: any, param1: any): void {
                    const owner = ref.get();
                    let state;
                    switch (param1) {
                        case org.webrtc.PeerConnection.IceGatheringState.NEW:
                            state = IceGatheringState.NEW;
                            break;
                        case org.webrtc.PeerConnection.IceGatheringState.GATHERING:
                            state = IceGatheringState.GATHERING;
                            break;
                        case org.webrtc.PeerConnection.IceGatheringState.COMPLETE:
                            state = IceGatheringState.COMPLETE;
                            break;
                    }
                    owner.notify({
                        eventName: 'webRTCClientOnIceGatheringChange',
                        object: fromObject({
                            client: owner,
                            state: state
                        })
                    });
                },
                webRTCClientOnSignalingChange(param0: any, param1: any): void {
                    const owner = ref.get();
                    let state;
                    switch (param0) {
                        case org.webrtc.PeerConnection.SignalingState.CLOSED:
                            state = SignalingState.CLOSED;
                            break;
                        case org.webrtc.PeerConnection.SignalingState.HAVE_LOCAL_OFFER:
                            state = SignalingState.HAVE_LOCAL_OFFER;
                            break;
                        case org.webrtc.PeerConnection.SignalingState.HAVE_LOCAL_PRANSWER:
                            state = SignalingState.HAVE_LOCAL_PRANSWER;
                            break;
                        case org.webrtc.PeerConnection.SignalingState.HAVE_REMOTE_OFFER:
                            state = SignalingState.HAVE_REMOTE_OFFER;
                            break;
                        case org.webrtc.PeerConnection.SignalingState.HAVE_REMOTE_PRANSWER:
                            state = SignalingState.HAVE_REMOTE_PRANSWER;
                            break;
                        case org.webrtc.PeerConnection.SignalingState.STABLE:
                            state = SignalingState.STABLE;
                            break;
                    }

                    owner.notify({
                        eventName: 'webRTCClientOnIceGatheringChange',
                        object: fromObject({
                            client: owner,
                            state: state
                        })
                    });
                },
                webRTCClientOnCameraSwitchDone(param0: any, param1: boolean): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnCameraSwitchDone',
                        object: fromObject({
                            client: owner,
                            done: param1
                        })
                    });
                },
                webRTCClientOnCameraSwitchError(param0: any, param1: string): void {
                    const owner = ref.get();
                    owner.notify({
                        eventName: 'webRTCClientOnCameraSwitchError',
                        object: fromObject({
                            client: owner,
                            message: param1
                        })
                    });
                }
            })
        );
    }

    public static requestPermissions(explanation?: string): Promise<any> {
        return permissions.requestPermission(
            [
                android.Manifest.permission.CAMERA,
                android.Manifest.permission.RECORD_AUDIO
            ],
            explanation
        );
    }

    public static hasPermissions(): boolean {
        return (
            permissions.hasPermission(android.Manifest.permission.CAMERA) &&
            permissions.hasPermission(android.Manifest.permission.RECORD_AUDIO)
        );
    }

    public static init(): void {
        co.fitcom.fancywebrtc.FancyWebRTC.init(ad.getApplicationContext());
    }

    public dataChannelSend(
        name: string,
        data: string,
        type: WebRTCDataChannelMessageType
    ) {
        let nativeType;
        switch (type) {
            case WebRTCDataChannelMessageType.BINARY:
                nativeType =
                    co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType.BINARY;
                break;
            case WebRTCDataChannelMessageType.TEXT:
                nativeType =
                    co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType.TEXT;
                break;
        }
        this.webrtc.dataChannelSend(name, data, nativeType);
    }

    public dataChannelClose(name: string) {
        this.webrtc.dataChannelClose(name);
    }

    public dataChannelCreate(name: string) {
        this.webrtc.dataChannelCreate(name);
    }

    public switchCamera(trackId: string) {
        this.webrtc.switchCamera(trackId);
    }

    public handleAnswerReceived(answer: WebRTCSdp) {
        let nativeType;
        switch (answer.type) {
            case WebRTCSdpType.ANSWER:
                nativeType = org.webrtc.SessionDescription.Type.ANSWER;
                break;
            case WebRTCSdpType.OFFER:
                nativeType = org.webrtc.SessionDescription.Type.OFFER;
                break;
            case WebRTCSdpType.PRANSWER:
                nativeType = org.webrtc.SessionDescription.Type.PRANSWER;
                break;
        }
        const sdp = new org.webrtc.SessionDescription(nativeType, answer.sdp);
        this.webrtc.handleAnswerReceived(sdp);
    }

    public connect(): void {
        if (!this.webrtc) return;
        this.webrtc.connect();
    }

    public disconnect(): void {
        if (this.webrtc) {
            this.webrtc.disconnect();
        }
    }

    public micEnabled(enabled: boolean) {
        this.webrtc.micEnabled(enabled);
    }

    public toggleMic(): void {
        this.webrtc.toggleMic();
    }

    public speakerEnabled(enabled: boolean) {
        this.webrtc.speakerEnabled(enabled);
    }

    public createAnswerForOfferReceived(sdp: WebRTCSdp) {
        const nativeSdp = new org.webrtc.SessionDescription(
            org.webrtc.SessionDescription.Type.OFFER,
            sdp.sdp
        );
        this.webrtc.createAnswerForOfferReceived(
            nativeSdp,
            new org.webrtc.MediaConstraints()
        );
    }

    public makeOffer() {
        if (this.webrtc != null) {
            this.webrtc.makeOffer(new org.webrtc.MediaConstraints());
        }
    }

    public addLocalStream(stream: any) {
        this.webrtc.addLocalStream(stream);
    }

    public addIceCandidate(iceCandidate: WebRTCIceCandidate) {
        const candidate = new org.webrtc.IceCandidate(
            iceCandidate.sdpMid,
            iceCandidate.sdpMLineIndex,
            iceCandidate.sdp
        );
        this.webrtc.addIceCandidate(candidate);
    }

    public enableTrack(trackId: string, enable: boolean) {
        this.webrtc.enableTrack(trackId, enable);
    }

    public getUserMedia(quality?: Quality): Promise<any> {
        return new Promise((resolve, reject) => {
            let nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.LOWEST;
            switch (quality) {
                case Quality.HIGHEST:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.HIGHEST;
                    break;
                case Quality.MAX_480P:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.MAX_480P;
                    break;
                case Quality.MAX_720P:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.MAX_720P;
                    break;
                case Quality.MAX_1080P:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.MAX_1080P;
                    break;
                case Quality.MAX_2160P:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.MAX_2160P;
                    break;
                default:
                    nativeQuality = co.fitcom.fancywebrtc.FancyWebRTC.Quality.LOWEST;
                    break;
            }

            this.webrtc.getUserMedia(
                nativeQuality,
                new co.fitcom.fancywebrtc.FancyWebRTCListener.GetUserMediaListener({
                    webRTCClientOnGetUserMedia(param0: any, param1: any): void {
                        resolve(param1);
                    },
                    webRTCClientOnGetUserMediaDidReceiveError(
                        param0: any,
                        param1: string
                    ): void {
                        reject(param1);
                    }
                })
            );
        });
    }
}

export class WebRTCView extends View {
    private _stream: any;

    createNativeView(): any {
        return new co.fitcom.fancywebrtc.FancyWebRTCView(this._context, null);
    }

    set mirror(mirror: boolean) {
        if (this.nativeView) {
            this.nativeView.setMirror(mirror);
        }
    }

    set videoTrack(track: any) {
        if (this.nativeView) {
            this.nativeView.setVideoTrack(track);
        }
    }

    set stream(stream: any) {
        this._stream = stream;
        if (stream.videoTracks && stream.videoTracks.size() > 0) {
            this.videoTrack = stream.videoTracks.get(0);
        }
    }

    set srcObject(value: any) {
        if (value instanceof TNSRTCMediaStream || value instanceof TNSRTCMediaStreamTrack) {
            this.nativeView.setSrcObject(value.instance);
        } else if (value instanceof org.webrtc.MediaStream) {
            this.nativeView.setSrcObject(value);
        } else if (value instanceof co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack) {
            this.nativeView.setSrcObject(value);
        } else if (value instanceof org.webrtc.MediaStreamTrack) {
            this.nativeView.setSrcObject(value);
        }
    }
}

