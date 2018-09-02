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
import { View } from 'tns-core-modules/ui/core/view';
import { fromObject } from 'tns-core-modules/data/observable';
import './async-await';

import { ios } from 'tns-core-modules/utils/utils';

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

interface RTCDataChannelDelegate {
}

interface RTCPeerConnectionDelegate {
}

declare var RTCSdpType, RTCSessionDescription, RTCIceCandidate, RTCIceConnectionState, RTCMediaConstraints,
    RTCConfiguration, RTCContinualGatheringPolicy, RTCTcpCandidatePolicy, RTCRtcpMuxPolicy, RTCEncryptionKeyType,
    RTCDefaultVideoDecoderFactory, RTCDefaultVideoEncoderFactory, RTCPeerConnectionFactory, RTCIceServer, RTCDataBuffer,
    RTCDataChannelConfiguration, RTCCameraVideoCapturer, RTCAudioSession, RTCDataChannelDelegate,
    RTCPeerConnectionDelegate, RTCDataChannelState, RTCIceGatheringState, RTCSignalingState, RTCEAGLVideoView;

enum ErrorDomain {
    videoPermissionDenied = 'Video permission denied',
    audioPermissionDenied = 'Audio permission denied'
}

export class WebRTC extends Common {
    private connection: any;
    private connectionFactory: any;
    private configuration: any;
    private constraints: any;
    private _delegate: WebRTCClientDelegate;
    private defaultConnectionConstraints: any;
    private remoteIceCandidates: any;
    remoteStream;
    remoteTracks: Array<any>;
    private tracks: Map<string, MediaData> = new Map();
    private localStreams: Map<string, any> = new Map();
    private remoteStreams: Map<string, any> = new Map();
    private _dataChannels: Map<string, any> = new Map();

    constructor(
        options: WebRTCOptions = {enableAudio: true, enableVideo: true}
    ) {
        super();
        this.remoteTracks = [];
        this.remoteIceCandidates = [];
        this.defaultConnectionConstraints = RTCMediaConstraints.alloc().initWithMandatoryConstraintsOptionalConstraints(
            null,
            <any>{
                DtlsSrtpKeyAgreement: 'true',
                internalSctpDataChannels: 'true'
            }
        );

        this._delegate = WebRTCClientDelegate.initWithOwner(new WeakRef(this));
        this.configuration = RTCConfiguration.alloc().init();
        (this.configuration as any).bundlePolicy = 1; // RTCBundlePolicy.MaxCompat;
        this.configuration.continualGatheringPolicy =
            RTCContinualGatheringPolicy.GatherContinually;
        this.configuration.tcpCandidatePolicy = RTCTcpCandidatePolicy.Disabled;
        this.configuration.rtcpMuxPolicy = RTCRtcpMuxPolicy.Require;
        this.configuration.keyType = RTCEncryptionKeyType.ECDSA;
        const decoder = RTCDefaultVideoDecoderFactory.alloc().init();
        const encoder = RTCDefaultVideoEncoderFactory.alloc().init();
        this.connectionFactory = RTCPeerConnectionFactory.alloc().initWithEncoderFactoryDecoderFactory(
            encoder,
            decoder
        );

        const nativeIceServers = NSArray.alloc().initWithArray(<any>[]) as any;
        if (!options.iceServers) {
            this.defaultServers.forEach((server, index) => {
                nativeIceServers[index] = RTCIceServer.alloc().initWithURLStrings(<any>[server]);
            });

        } else {
            options.iceServers.forEach((config, index) => {
                nativeIceServers[index] = RTCIceServer.alloc().initWithURLStringsUsernameCredential(
                    <any>[config.url],
                    config.username,
                    config.password
                );
            });
        }

        this.configuration.iceServers = nativeIceServers;

        this.constraints = RTCMediaConstraints.alloc().initWithMandatoryConstraintsOptionalConstraints(
            <any>{
                OfferToReceiveAudio: String(!!options.enableAudio),
                OfferToReceiveVideo: String(!!options.enableVideo)
            },
            null
        );
    }

    get delegate(): any {
        return this._delegate;
    }

    get dataChannels() {
        return this._dataChannels;
    }

    private static requestCameraPermission() {
        return new Promise((resolve, reject) => {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(
                AVMediaTypeVideo,
                granted => {
                    if (granted) {
                        resolve();
                    } else {
                        reject(ErrorDomain.videoPermissionDenied);
                    }
                }
            );
        });
    }

    private static requestAudioPermission() {
        return new Promise((resolve, reject) => {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(
                AVMediaTypeAudio,
                granted => {
                    if (granted) {
                        resolve();
                    } else {
                        reject(ErrorDomain.audioPermissionDenied);
                    }
                }
            );
        });
    }

    public static requestPermissions(explanation?: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                await WebRTC.requestCameraPermission();
                await WebRTC.requestAudioPermission();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    private static hasCameraPermission(): boolean {
        const status = AVCaptureDevice.authorizationStatusForMediaType(
            AVMediaTypeVideo
        );
        switch (status) {
            case AVAuthorizationStatus.Authorized:
                return true;
            default:
                return false;
        }
    }

    private static hasAudioPermission(): boolean {
        const status = AVCaptureDevice.authorizationStatusForMediaType(
            AVMediaTypeAudio
        );
        switch (status) {
            case AVAuthorizationStatus.Authorized:
                return true;
            default:
                return false;
        }
    }

    public static hasPermissions(): boolean {
        return this.hasCameraPermission() && this.hasAudioPermission();
    }

    public makeOffer() {
        if (!this.connection) return;
        this.connection.offerForConstraintsCompletionHandler(
            this.constraints,
            (sdp: any /*RTCSessionDescription */, error: NSError) => {
                if (error) {
                    this._delegate.webRTCClientDidReceiveError(this, error);
                } else {
                    this.handleSdpGenerated(sdp);
                }
            }
        );
    }

    public handleAnswerReceived(answer: WebRTCSdp) {
        if (!this.connection || !answer) return;
        const sessionDescription = RTCSessionDescription.alloc().initWithTypeSdp(
            RTCSdpType.Answer,
            answer.sdp
        );
        this.connection.setRemoteDescriptionCompletionHandler(
            sessionDescription,
            (error: NSError) => {
                if (error) {
                    this._delegate.webRTCClientDidReceiveError(this, error);
                } else {
                    this.handleRemoteDescriptionSet();
                }
            }
        );
    }

    public addIceCandidate(iceCandidate: WebRTCIceCandidate) {
        const nativeIceCandidate = RTCIceCandidate.alloc().initWithSdpSdpMLineIndexSdpMid(
            iceCandidate.sdp,
            iceCandidate.sdpMLineIndex,
            iceCandidate.sdpMid
        );

        if (this.connection && this.connection.remoteDescription) {
            this.connection.addIceCandidate(nativeIceCandidate);
        } else {
            this.remoteIceCandidates.push(nativeIceCandidate);
        }
    }

    public createAnswerForOfferReceived(sdp: WebRTCSdp) {
        if (!this.connection || !sdp) return;
        const sessionDescription = RTCSessionDescription.alloc().initWithTypeSdp(
            RTCSdpType.Offer,
            sdp.sdp
        );
        this.connection.setRemoteDescriptionCompletionHandler(
            sessionDescription,
            (error: NSError) => {
                if (error) {
                    this._delegate.webRTCClientDidReceiveError(this, error);
                } else {
                    this.handleRemoteDescriptionSet();
                    this.connection.answerForConstraintsCompletionHandler(
                        this.constraints,
                        (generatedSdp: any, error: NSError) => {
                            if (error) {
                                this._delegate.webRTCClientDidReceiveError(this, error);
                            } else {
                                this.handleSdpGenerated(generatedSdp);
                                this._delegate.webRTCClientStartCallWithSdp(this, generatedSdp);
                            }
                        }
                    );
                }
            }
        );
    }

    private handleRemoteDescriptionSet() {
        this.remoteIceCandidates.forEach(iceCandidate => {
            this.connection.addIceCandidate(iceCandidate);
        });
        this.remoteIceCandidates = [];
    }

    private handleSdpGenerated(sdp: any) {
        if (!sdp) return;
        this.connection.setLocalDescriptionCompletionHandler(
            sdp,
            (error: NSError) => {
                if (error) {
                    this._delegate.webRTCClientDidReceiveError(this, error);
                } else {
                    this._delegate.webRTCClientStartCallWithSdp(this, sdp);
                }
            }
        );
    }

    public static init(): void {
    }

    public connect(): void {
        if (this.connection) return;
        this.connection = this.connectionFactory.peerConnectionWithConfigurationConstraintsDelegate(
            this.configuration,
            this.defaultConnectionConstraints,
            RTCPeerConnectionDelegateImpl.initWithOwner(new WeakRef(this))
        );
    }

    public disconnect(): void {
        if (!this.connection) return;
        this.connection.close();
    }

    public addLocalStream(stream: any) {
        if (!this.connection) return;
        this.connection.addStream(stream);
        this.localStreams.set(stream.streamId, stream);
    }

    public addRemoteStream(stream: any) {
        this.remoteStreams.set(stream.streamId, stream);
    }


    public dataChannelSend(name: string, data: string, type: WebRTCDataChannelMessageType) {
        const channel = this.dataChannels.get(name);
        if (channel) {
            let isBinary;
            let nativeData;
            switch (type) {
                case WebRTCDataChannelMessageType.TEXT:
                    isBinary = false;
                    nativeData = NSString.stringWithString(data).dataUsingEncoding(NSUTF8StringEncoding);
                    break;
                case WebRTCDataChannelMessageType.BINARY:
                    isBinary = true;
                    nativeData = NSData.alloc().initWithBase64EncodedStringOptions(data, 0);
                    break;
            }
            const buffer = RTCDataBuffer.alloc().initWithDataIsBinary(nativeData, isBinary);
            channel.sendData(buffer);
        }
    }

    public dataChannelClose(name: string) {
        const channel = this.dataChannels.get(name);
        if (channel) {
            channel.close();
        }
    }

    public dataChannelCreate(name: string) {
        const config = RTCDataChannelConfiguration.alloc();
        const channel = this.connection.dataChannelForLabelConfiguration(name, config);
        this.dataChannels.set(name, channel);
        this.registerDataChannelDelegate(name);
    }


    public switchCamera(trackId: string) {
        const mediaData = this.tracks.get(trackId);
        if (mediaData != null) {
            if (mediaData.capturer != null) {
                mediaData.capturer.toggleCamera();
            }
        }
    }

    private registerDataChannelDelegate(name: string) {
        const channel = this.dataChannels.get(name);
        if (channel) {
            channel.delegate = RTCDataChannelDelegateImpl.initWithOwner(new WeakRef<WebRTC>(this));
        }
    }

    private getRandomId(): string {
        return NSUUID.UUID().UUIDString;
    }

    public getUserMedia(quality?: Quality): Promise<any> {
        return new Promise((resolve, reject) => {
            const factory = this.connectionFactory;
            const streamId = this.getRandomId();
            const localStream = factory.mediaStreamWithStreamId(streamId);
            if (!AVCaptureState.isVideoDisabled) {
                const videoSource = factory.videoSource();
                let capturer = RTCCameraVideoCapturer.alloc().initWithDelegate(
                    videoSource
                );
                const customCapturer = new WebRTCCapturer(new WeakRef<WebRTC>(this), capturer, quality ? quality : Quality.LOWEST);
                const videoTrackId = this.getRandomId();
                const videoTrack = factory.videoTrackWithSourceTrackId(
                    videoSource,
                    videoTrackId
                );
                videoTrack.isEnabled = true;
                customCapturer.start();
                this.tracks.set(
                    videoTrackId,
                    new MediaData(videoSource, videoTrack, customCapturer)
                );
                localStream.addVideoTrack(videoTrack);
            } else {
                reject(ErrorDomain.videoPermissionDenied);
            }

            if (!AVCaptureState.isAudioDisabled) {
                const audioTrackId = this.getRandomId();
                const audioSource = factory.audioSourceWithConstraints(
                    RTCMediaConstraints.alloc().init()
                );
                const audioTrack = factory.audioTrackWithSourceTrackId(
                    audioSource,
                    audioTrackId
                );
                audioTrack.isEnabled = true;
                localStream.addAudioTrack(audioTrack);
                this.tracks.set(
                    audioTrackId,
                    new MediaData(audioSource, audioTrack, null)
                );
            } else {
                reject(ErrorDomain.audioPermissionDenied);
            }
            resolve(localStream);
        });
    }

    public micEnabled(enabled: boolean) {
    }

    public toggleMic(): void {
    }

    public speakerEnabled(enabled: boolean) {
        const audioSession = ios.getter(
            RTCAudioSession,
            RTCAudioSession.sharedInstance
        );
        try {
            if (enabled) {
                audioSession.overrideOutputAudioPortError(
                    AVAudioSessionPortOverride.Speaker
                );
                audioSession.setActiveError(true);
            } else {
                audioSession.overrideOutputAudioPortError(
                    AVAudioSessionPortOverride.None
                );
                audioSession.setActiveError(true);
            }
        } catch (e) {
        }
    }


    public enableTrack(trackId: string, enabled: boolean) {
        const mediaData = this.tracks.get(trackId);
        if (mediaData != null) {
            if (mediaData.capturer != null) {
                if (enabled) {
                    mediaData.track.isEnabled = true;
                    mediaData.capturer.start();
                } else {
                    mediaData.track.isEnabled = false;
                    mediaData.capturer.stop();
                }
            } else {
                mediaData.track.isEnabled = enabled;
            }
        }
    }
}

class MediaData {
    public mediaSource;
    public track;
    public capturer;

    constructor(mediaSource, track, capturer) {
        this.mediaSource = mediaSource;
        this.track = track;
        this.capturer = capturer;
    }
}

class AVCaptureState {
    public static get isVideoDisabled(): boolean {
        const status = AVCaptureDevice.authorizationStatusForMediaType(
            AVMediaTypeVideo
        );
        return (
            status === AVAuthorizationStatus.Denied ||
            status === AVAuthorizationStatus.Restricted
        );
    }

    public static get isAudioDisabled(): boolean {
        const status = AVCaptureDevice.authorizationStatusForMediaType(
            AVMediaTypeVideo
        );
        return (
            status === AVAuthorizationStatus.Denied ||
            status === AVAuthorizationStatus.Restricted
        );
    }
}

class RTCDataChannelDelegateImpl extends NSObject implements RTCDataChannelDelegate {
    public static ObjCProtocols = [RTCDataChannelDelegate];
    private _owner: WeakRef<WebRTC>;

    public static initWithOwner(
        owner: WeakRef<WebRTC>
    ): RTCDataChannelDelegateImpl {
        const delegate = new RTCDataChannelDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }

    dataChannelDidChangeBufferedAmount(dataChannel: any, amount: number): void {
    }

    dataChannelDidChangeState(dataChannel: any): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientDataChannelStateChanged(owner, dataChannel.label, dataChannel.readyState);
        }
    }

    dataChannelDidReceiveMessageWithBuffer(dataChannel: any, buffer: any): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            let type;
            let data;
            if (buffer.isBinary) {
                type = WebRTCDataChannelMessageType.BINARY;
                data = buffer.data.base64EncodedStringWithOptions(0);
            } else {
                type = WebRTCDataChannelMessageType.TEXT;
                data = NSString.alloc().initWithDataEncoding(buffer.data, NSUTF8StringEncoding);
            }
            owner.delegate.webRTCClientDataChannelMessageType(owner, dataChannel.label, data, type);
        }
    }
}

class RTCPeerConnectionDelegateImpl extends NSObject
    implements RTCPeerConnectionDelegate {
    peerConnectionDidAddReceiverStreams?(
        peerConnection: any,
        rtpReceiver: any,
        mediaStreams: NSArray<any>
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
        }
    }

    peerConnectionDidAddStream(
        peerConnection: any,
        stream: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.remoteStream = stream;
            dispatch_async(dispatch_get_current_queue(), () => {
                if (stream.videoTracks.count > 0) {
                    owner.remoteTracks.push(stream.videoTracks.firstObject);
                    owner.delegate.webRTCClientDidReceiveRemoteVideoTrackStream(
                        owner,
                        stream.videoTracks.firstObject,
                        stream
                    );
                }
            });
        }
    }

    peerConnectionDidChangeIceConnectionState(
        peerConnection: any,
        newState: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnIceConnectionChange(owner, newState);
        }
    }

    peerConnectionDidChangeIceGatheringState(
        peerConnection: any,
        newState: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnIceGatheringChange(owner, newState);
        }
    }

    peerConnectionDidChangeSignalingState(
        peerConnection: any,
        stateChanged: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnSignalingChange(owner, stateChanged);
        }
    }

    peerConnectionDidGenerateIceCandidate(
        peerConnection: any,
        candidate: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientDidGenerateIceCandidate(owner, candidate);
        }
    }

    peerConnectionDidOpenDataChannel(
        peerConnection: any,
        dataChannel: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.dataChannels.set(dataChannel.label, dataChannel);
            dataChannel.delegate = RTCDataChannelDelegateImpl.initWithOwner(this._owner);
        }
    }

    peerConnectionDidRemoveIceCandidates(
        peerConnection: any,
        candidates: NSArray<any>
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnIceCandidatesRemoved(owner, candidates);
        }
    }

    peerConnectionDidRemoveStream(
        peerConnection: any,
        stream: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnRemoveStream(owner, stream);
        }
    }

    peerConnectionDidStartReceivingOnTransceiver?(
        peerConnection: any,
        transceiver: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
        }
    }

    peerConnectionShouldNegotiate(peerConnection: any /* RTCPeerConnection */): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.delegate.webRTCClientOnRenegotiationNeeded(owner);
        }
    }

    public static ObjCProtocols = [RTCPeerConnectionDelegate];
    private _owner: WeakRef<WebRTC>;

    public static initWithOwner(
        owner: WeakRef<WebRTC>
    ): RTCPeerConnectionDelegateImpl {
        const delegate = new RTCPeerConnectionDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }
}

class WebRTCClientDelegate extends NSObject {
    private _owner: WeakRef<WebRTC>;

    public static initWithOwner(owner: WeakRef<WebRTC>) {
        const delegate = new WebRTCClientDelegate();
        delegate._owner = owner;
        return delegate;
    }

    webRTCClientOnRemoveStream(
        client: WebRTC, stream: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnRemoveStream',
                object: fromObject({
                    client: owner,
                    stream: stream
                })
            });
        }
    }

    webRTCClientDataChannelStateChanged(
        client,
        name: string,
        type: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        let state;
        switch (type) {
            case RTCDataChannelState.Connecting:
                state = WebRTCDataChannelState.CONNECTING;
                break;
            case RTCDataChannelState.Closed:
                state = WebRTCDataChannelState.CLOSED;
                break;
            case RTCDataChannelState.Closing:
                state = WebRTCDataChannelState.CLOSING;
                break;
            case RTCDataChannelState.Open:
                state = WebRTCDataChannelState.OPEN;
                break;
        }

        if (owner) {
            owner.notify({
                eventName: 'webRTCClientDataChannelStateChanged',
                object: fromObject({
                    client: owner,
                    name: name,
                    state: state
                })
            });
        }
    }

    webRTCClientDataChannelMessageType(
        client,
        name: string,
        data: string,
        type: WebRTCDataChannelMessageType
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientDataChannelMessageType',
                object: fromObject({
                    client: owner,
                    name: name,
                    message: data,
                    type: type
                })
            });
        }
    }

    webRTCClientStartCallWithSdp(client: WebRTC, sdp: any) {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            let type;
            switch (sdp.type) {
                case RTCSdpType.Offer:
                    type = WebRTCSdpType.OFFER;
                    break;
                case RTCSdpType.PrAnswer:
                    type = WebRTCSdpType.PRANSWER;
                    break;
                case RTCSdpType.Answer:
                    type = WebRTCSdpType.ANSWER;
                    break;
            }
            owner.notify({
                eventName: 'webRTCClientStartCallWithSdp',
                object: fromObject({
                    client: client,
                    sdp: sdp.sdp,
                    type: type
                })
            });
        }
    }

    webRTCClientDidReceiveRemoteVideoTrackStream(
        client: WebRTC,
        remoteVideoTrack: any,
        stream: any
    ) {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientDidReceiveRemoteVideoTrackStream',
                object: fromObject({
                    client: client,
                    remoteVideoTrack: remoteVideoTrack,
                    stream: stream
                })
            });
        }
    }

    webRTCClientDidReceiveError(client: WebRTC, error: NSError) {
        const owner = this._owner ? this._owner.get() : null;
        owner.notify({
            eventName: 'webRTCClientDidReceiveRemoteVideoTrackStream',
            object: fromObject({
                client: client,
                error: error.localizedDescription
            })
        });
    }


    webRTCClientOnRenegotiationNeeded(
        client
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnRenegotiationNeeded',
                object: fromObject({
                    client: owner
                })
            });
        }
    }


    webRTCClientDidGenerateIceCandidate(
        client: WebRTC,
        iceCandidate: any
    ) {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientDidGenerateIceCandidate',
                object: fromObject({
                    client: client,
                    iceCandidate: <WebRTCIceCandidate>{
                        sdp: iceCandidate.sdp,
                        sdpMid: iceCandidate.sdpMid,
                        sdpMLineIndex: iceCandidate.sdpMLineIndex,
                        serverUrl: iceCandidate.serverUrl
                    }
                })
            });
        }
    }


    webRTCClientOnIceCandidatesRemoved(
        client,
        candidates: NSArray<any>
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnRenegotiationNeeded',
                object: fromObject({
                    client: owner,
                    candidates: candidates
                })
            });
        }
    }

    webRTCClientOnIceConnectionChange(
        client,
        connectionState: any /* RTCIceConnectionState */
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        let state;
        switch (connectionState) {
            case RTCIceConnectionState.New:
                state = IceConnectionState.NEW;
                break;
            case RTCIceConnectionState.Checking:
                state = IceConnectionState.CHECKING;
                break;
            case RTCIceConnectionState.Connected:
                state = IceConnectionState.CONNECTED;
                break;
            case RTCIceConnectionState.Completed:
                state = IceConnectionState.COMPLETED;
                break;
            case RTCIceConnectionState.Failed:
                state = IceConnectionState.FAILED;
                break;
            case RTCIceConnectionState.Disconnected:
                state = IceConnectionState.DISCONNECTED;
                break;
            case RTCIceConnectionState.Closed:
                state = IceConnectionState.CLOSED;
                break;
        }
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnIceConnectionChange',
                object: fromObject({
                    client: owner,
                    state: state
                })
            });
        }
    }

    webRTCClientOnIceConnectionReceivingChange(
        client,
        change: boolean
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnIceConnectionReceivingChange',
                object: fromObject({
                    client: owner,
                    change: change
                })
            });
        }
    }

    webRTCClientOnIceGatheringChange(
        client,
        gatheringState: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        let state;
        switch (gatheringState) {
            case RTCIceGatheringState.New:
                state = IceGatheringState.NEW;
                break;
            case RTCIceGatheringState.Gathering:
                state = IceGatheringState.GATHERING;
                break;
            case RTCIceGatheringState.Complete:
                state = IceGatheringState.COMPLETE;
                break;
        }

        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnIceGatheringChange',
                object: fromObject({
                    client: owner,
                    state: state
                })
            });
        }
    }

    webRTCClientOnSignalingChange(
        client,
        signalingState: any
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        let state;
        switch (signalingState) {
            case RTCSignalingState.Closed:
                state = SignalingState.CLOSED;
                break;
            case RTCSignalingState.HaveLocalOffer:
                state = SignalingState.HAVE_LOCAL_OFFER;
                break;
            case RTCSignalingState.HaveLocalPrAnswer:
                state = SignalingState.HAVE_LOCAL_PRANSWER;
                break;
            case RTCSignalingState.HaveRemoteOffer:
                state = SignalingState.HAVE_REMOTE_OFFER;
                break;
            case RTCSignalingState.HaveRemotePrAnswer:
                state = SignalingState.HAVE_REMOTE_PRANSWER;
                break;
            case RTCSignalingState.Stable:
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
    }

    webRTCClientOnCameraSwitchDone(
        client,
        done: boolean
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnCameraSwitchDone',
                object: fromObject({
                    client: owner,
                    done: done
                })
            });
        }
    }

    webRTCClientOnCameraSwitchError(
        client,
        error: string
    ): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: 'webRTCClientOnCameraSwitchError',
                object: fromObject({
                    client: owner,
                    message: error
                })
            });
        }
    }
}

export class WebRTCView extends View {
    private _stream: any;
    private _localVideoTrack: any;
    private _mirror: boolean;

    constructor() {
        super();
        this.nativeView = RTCEAGLVideoView.alloc().init();
    }

    set mirror(mirror: boolean) {
        if (mirror) {
            this._mirror = true;
            this.nativeView.transform = CGAffineTransformMakeScale(-1.0, 1.0);
        } else {
            this.nativeView.transform = CGAffineTransformMakeScale(1.0, 1.0);
            this._mirror = false;
        }
    }

    set videoTrack(track) {
        this._localVideoTrack = track;
        if (track) {
            track.addRenderer(this.nativeView);
        }
    }

    set stream(stream: any) {
        this._stream = stream;
        if (stream.videoTracks && stream.videoTracks.firstObject) {
            this.videoTrack = stream.videoTracks.firstObject;
        }
    }
}

class WebRTCCapturer {
    private capturer: any;
    private cameraPosition = 'front';
    private quality: Quality;
    private client: WeakRef<WebRTC>;

    constructor(client: WeakRef<WebRTC>, capturer: any, quality?: Quality) {
        this.client = client;
        this.capturer = capturer;
        this.quality = quality ? quality : Quality.LOWEST;
    }

    getCapturer(): any {
        return this.capturer;
    }

    public start() {
        this.startWithError(false);
    }

    private startWithError(show?: boolean) {
        let devices = RTCCameraVideoCapturer.captureDevices();
        let device: AVCaptureDevice;
        let pos =
            this.cameraPosition === 'front'
                ? AVCaptureDevicePosition.Front
                : AVCaptureDevicePosition.Back;
        for (let i = 0; i < devices.count; i++) {
            if (devices[i].position === pos) {
                device = devices[i];
                break;
            }
        }
        const format = this.selectFormatForDevice(device);
        const fps = this.selectFpsForFormat(format);
        this.capturer.startCaptureWithDeviceFormatFps(device, format, fps);
        this.capturer.startCaptureWithDeviceFormatFpsCompletionHandler(device, format, fps, (error: NSError) => {
            const client = this.client ? this.client.get() : null;
            if (show && client) {
                if (error) {
                    client.delegate.webRTCClientOnCameraSwitchError(client, error.localizedDescription);
                } else {
                    client.delegate.webRTCClientOnCameraSwitchDone(client, true);
                }
            }
        });
    }

    private selectFpsForFormat(format: AVCaptureDeviceFormat): number {
        let maxFrameRate = 0;
        for (let i = 0; i < format.videoSupportedFrameRateRanges.count; i++) {
            const fpsRange = format.videoSupportedFrameRateRanges.objectAtIndex(i);
            maxFrameRate = fmax(maxFrameRate, fpsRange.maxFrameRate);
        }
        return maxFrameRate;
    }

    private getFormatOrHighestFormat(
        supportedFormats: NSArray<AVCaptureDeviceFormat>,
        device: AVCaptureDevice
    ): { width: number; height: number } {
        let targetHeight = 144;
        let targetWidth = 192;
        let highest = () => {
            const count = supportedFormats.count;
            let last: CMVideoDimensions = CMVideoFormatDescriptionGetDimensions(
                supportedFormats.firstObject
            );
            for (let i = 0; i < count; i++) {
                const format = supportedFormats.objectAtIndex(i);
                const dimensions = CMVideoFormatDescriptionGetDimensions(
                    format.description
                );
                if (last.width < dimensions.width) {
                    last = dimensions;
                }
            }
            return last;
        };

        const best = highest();

        switch (this.quality) {
            case Quality.HIGHEST:
                targetHeight = best.height;
                targetWidth = best.width;
                break;
            case Quality.MAX_480P:
                if (
                    device.supportsAVCaptureSessionPreset(AVCaptureSessionPreset640x480)
                ) {
                    targetHeight = 480;
                    targetWidth = 640;
                } else {
                    targetHeight = best.height;
                    targetWidth = best.width;
                }
                break;
            case Quality.MAX_720P:
                if (
                    device.supportsAVCaptureSessionPreset(AVCaptureSessionPreset1280x720)
                ) {
                    targetHeight = 720;
                    targetWidth = 1280;
                } else {
                    targetHeight = best.height;
                    targetWidth = best.width;
                }
                break;
            case Quality.MAX_1080P:
                if (
                    device.supportsAVCaptureSessionPreset(AVCaptureSessionPreset1920x1080)
                ) {
                    targetHeight = 1080;
                    targetWidth = 1920;
                } else {
                    targetHeight = best.height;
                    targetWidth = best.width;
                }
                break;
            case Quality.MAX_2160P:
                if (
                    device.supportsAVCaptureSessionPreset(AVCaptureSessionPreset3840x2160)
                ) {
                    targetHeight = 2160;
                    targetWidth = 3840;
                } else {
                    targetHeight = best.height;
                    targetWidth = best.width;
                }
                break;
            default:
                targetHeight = 144;
                targetWidth = 192;
                break;
        }

        return {width: targetWidth, height: targetHeight};
    }

    private selectFormatForDevice(
        device: AVCaptureDevice
    ): AVCaptureDeviceFormat {
        let supportedFormats = RTCCameraVideoCapturer.supportedFormatsForDevice(
            device
        );
        const resolution = this.getFormatOrHighestFormat(supportedFormats, device);

        let targetHeight = resolution.height;
        let targetWidth = resolution.width;

        let selectedFormat: AVCaptureDeviceFormat = null;
        let currentDiff = Number.MAX_VALUE;

        for (let i = 0; i < supportedFormats.count; i++) {
            const format = supportedFormats.objectAtIndex(i);
            let dimension: CMVideoDimensions = CMVideoFormatDescriptionGetDimensions(
                format
            );
            let diff =
                abs(targetWidth - dimension.width) +
                abs(targetHeight - dimension.height);
            if (diff < currentDiff) {
                selectedFormat = format;
                currentDiff = diff;
            }
        }
        return selectedFormat;
    }

    stop() {
        this.capturer.stopCapture();
    }

    toggleCamera() {
        if (this.cameraPosition === 'front') {
            this.cameraPosition = 'back';
        } else {
            this.cameraPosition = 'front';
        }
        this.stop();
        this.startWithError(true);
    }
}
