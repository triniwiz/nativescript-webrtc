
declare class AVCaptureState extends NSObject {

	static alloc(): AVCaptureState; // inherited from NSObject

	static isAudioDisabled(): boolean;

	static isVideoDisabled(): boolean;

	static new(): AVCaptureState; // inherited from NSObject
}

declare class FancyRTCAudioTrack extends FancyRTCMediaStreamTrack {

	static alloc(): FancyRTCAudioTrack; // inherited from NSObject

	static new(): FancyRTCAudioTrack; // inherited from NSObject

	readonly audioTrack: RTCAudioTrack;

	volume: number;

	constructor();

	init(track: RTCAudioTrack): this;
}

declare const enum FancyRTCBundlePolicy {

	BALANCED = 0,

	MAX_COMPAT = 1,

	MAX_BUNDLE = 2
}

declare class FancyRTCConfiguration extends NSObject {

	static alloc(): FancyRTCConfiguration; // inherited from NSObject

	static new(): FancyRTCConfiguration; // inherited from NSObject

	bundlePolicy: FancyRTCBundlePolicy;

	readonly configuration: RTCConfiguration;

	iceCandidatePoolSize: number;

	iceServers: NSArray<FancyRTCIceServer>;

	iceTransportPolicy: FancyRTCIceTransportPolicy;

	peerIdentity: string;

	rtcpMuxPolicy: FancyRTCRtcpMuxPolicy;

	sdpSemantics: FancyRTCSdpSemantics;

	constructor(o: { iceServers: NSArray<FancyRTCIceServer> | FancyRTCIceServer[]; });

	constructor(o: { options: NSDictionary<any, any>; });

	initWithIceServers(iceServers: NSArray<FancyRTCIceServer> | FancyRTCIceServer[]): this;

	initWithOptions(options: NSDictionary<any, any>): this;
}

declare class FancyRTCDTMFSender extends NSObject {

	static alloc(): FancyRTCDTMFSender; // inherited from NSObject

	static new(): FancyRTCDTMFSender; // inherited from NSObject

	readonly sender: RTCDtmfSender;

	readonly toneBuffer: string;

	constructor(o: { sender: RTCDtmfSender; });

	dispose(): void;

	initWithSender(sender: RTCDtmfSender): this;

	insertDTMFWithTonesDurationInterToneGap(tones: string, duration: number, interToneGap: number): void;
}

declare class FancyRTCDataChannel extends NSObject {

	static alloc(): FancyRTCDataChannel; // inherited from NSObject

	static new(): FancyRTCDataChannel; // inherited from NSObject

	constructor(o: { channel: RTCDataChannel; });

	initWithChannel(channel: RTCDataChannel): this;
}

declare class FancyRTCDataChannelEvent extends NSObject {

	static alloc(): FancyRTCDataChannelEvent; // inherited from NSObject

	static new(): FancyRTCDataChannelEvent; // inherited from NSObject

	_channel: FancyRTCDataChannel;

	readonly channel: FancyRTCDataChannel;

	constructor(o: { channel: FancyRTCDataChannel; });

	initWithChannel(channel: FancyRTCDataChannel): this;
}

declare class FancyRTCDataChannelInit extends NSObject {

	static alloc(): FancyRTCDataChannelInit; // inherited from NSObject

	static new(): FancyRTCDataChannelInit; // inherited from NSObject

	readonly channelInit: RTCDataChannelConfiguration;

	readonly id: number;

	readonly maxPacketLifeTime: number;

	readonly maxRetransmits: number;

	readonly protocol: string;

	toJSON(): string;
}

declare class FancyRTCIceCandidate extends NSObject {

	static alloc(): FancyRTCIceCandidate; // inherited from NSObject

	static new(): FancyRTCIceCandidate; // inherited from NSObject

	candidate: string;

	readonly iceCandidate: RTCIceCandidate;

	sdp: string;

	sdpMLineIndex: number;

	sdpMid: string;

	serverUrl: string;

	usernameFragment: string;

	constructor(o: { candidate: RTCIceCandidate; });

	constructor(o: { sdp: string; sdpMid: string; sdpMLineIndex: number; });

	initWithCandidate(candidate: RTCIceCandidate): this;

	initWithSdpSdpMidSdpMLineIndex(sdp: string, sdpMid: string, sdpMLineIndex: number): this;

	toJSON(): string;
}

declare const enum FancyRTCIceCredentialType {

	PASSWORD = 0,

	TOKEN = 1
}

declare class FancyRTCIceServer extends NSObject {

	static alloc(): FancyRTCIceServer; // inherited from NSObject

	static new(): FancyRTCIceServer; // inherited from NSObject

	credential: string;

	urls: NSArray<string>;

	username: string;

	constructor(o: { iceServer: RTCIceServer; });

	constructor(o: { url: string; });

	constructor(o: { url: string; username: string; credential: string; });

	constructor(o: { urls: NSArray<string> | string[]; });

	constructor(o: { urls: NSArray<string> | string[]; username: string; credential: string; });

	iceServer(): RTCIceServer;

	initWithIceServer(iceServer: RTCIceServer): this;

	initWithUrl(url: string): this;

	initWithUrlUsernameCredential(url: string, username: string, credential: string): this;

	initWithUrls(urls: NSArray<string> | string[]): this;

	initWithUrlsUsernameCredential(urls: NSArray<string> | string[], username: string, credential: string): this;

	toWebRtc(): RTCIceServer;
}

declare const enum FancyRTCIceTransportPolicy {

	ALL = 0,

	PUBLIC = 1,

	RELAY = 2
}

declare class FancyRTCKeyValue extends NSObject {

	static alloc(): FancyRTCKeyValue; // inherited from NSObject

	static new(): FancyRTCKeyValue; // inherited from NSObject

	constructor(o: { key: string; value: string; });

	initWithKeyValue(key: string, value: string): this;
}

declare class FancyRTCMediaConstraints extends NSObject {

	static alloc(): FancyRTCMediaConstraints; // inherited from NSObject

	static new(): FancyRTCMediaConstraints; // inherited from NSObject

	mandatory: NSArray<FancyRTCKeyValue>;

	readonly mediaConstraints: RTCMediaConstraints;

	optional: NSArray<FancyRTCKeyValue>;

	toJSON(): string;
}

declare class FancyRTCMediaDevices extends NSObject {

	static alloc(): FancyRTCMediaDevices; // inherited from NSObject

	static getUserMediaWithConstraintsListener(constraints: FancyRTCMediaStreamConstraints, listener: (p1: FancyRTCMediaStream, p2: string) => void): void;

	static new(): FancyRTCMediaDevices; // inherited from NSObject

	static selectFormatForDeviceWithDeviceWidthHeightCapturer(device: AVCaptureDevice, width: number, height: number, capturer: RTCCameraVideoCapturer): AVCaptureDeviceFormat;

	static selectFpsForFormatWithFormat(format: AVCaptureDeviceFormat): number;
}

declare class FancyRTCMediaStream extends NSObject {

	static alloc(): FancyRTCMediaStream; // inherited from NSObject

	static new(): FancyRTCMediaStream; // inherited from NSObject

	readonly audioTracks: NSArray<FancyRTCAudioTrack>;

	readonly getId: string;

	readonly id: string;

	readonly stream: RTCMediaStream;

	readonly videoTracks: NSArray<FancyRTCVideoTrack>;

	constructor(o: { mediaStream: RTCMediaStream; });

	addTrackWithAudio(track: FancyRTCAudioTrack): void;

	addTrackWithVideo(track: FancyRTCVideoTrack): void;

	initWithMediaStream(mediaStream: RTCMediaStream): this;

	removeTrackWithAudio(track: FancyRTCAudioTrack): void;

	removeTrackWithVideo(track: FancyRTCVideoTrack): void;
}

declare class FancyRTCMediaStreamConstraints extends NSObject {

	static alloc(): FancyRTCMediaStreamConstraints; // inherited from NSObject

	static new(): FancyRTCMediaStreamConstraints; // inherited from NSObject

	constructor(o: { audioDict: NSDictionary<string, any>; video: boolean; });

	constructor(o: { audioDict: NSDictionary<string, any>; videoDict: NSDictionary<string, any>; });

	constructor(o: { audio: boolean; video: boolean; });

	constructor(o: { videoDict: boolean; video: NSDictionary<string, any>; });

	initWithAudioDictVideo(audio: NSDictionary<string, any>, video: boolean): this;

	initWithAudioDictVideoDict(audio: NSDictionary<string, any>, video: NSDictionary<string, any>): this;

	initWithAudioVideo(audio: boolean, video: boolean): this;

	initWithVideoDictVideo(audio: boolean, video: NSDictionary<string, any>): this;
}

declare class FancyRTCMediaStreamTrack extends NSObject {

	static alloc(): FancyRTCMediaStreamTrack; // inherited from NSObject

	static new(): FancyRTCMediaStreamTrack; // inherited from NSObject

	enabled: boolean;

	readonly id: string;

	readonly kind: string;

	readonly mediaStreamTrack: RTCMediaStreamTrack;

	readonly mute: boolean;

	readonly readyState: string;

	dispose(): void;
}

declare class FancyRTCPeerConnection extends NSObject {

	static alloc(): FancyRTCPeerConnection; // inherited from NSObject

	static new(): FancyRTCPeerConnection; // inherited from NSObject

	readonly connection: RTCPeerConnection;

	readonly connectionState: FancyRTCPeerConnectionState;

	readonly defaultIceServers: NSArray<FancyRTCIceServer>;

	readonly localDescription: FancyRTCSessionDescription;

	onAddStream: (p1: FancyRTCMediaStream) => void;

	onConnectionStateChange: () => void;

	onDataChannel: (p1: FancyRTCDataChannelEvent) => void;

	onIceCandidate: (p1: FancyRTCIceCandidate) => void;

	onIceGatheringStateChange: () => void;

	onNegotiationNeeded: () => void;

	onRemoveStream: (p1: FancyRTCMediaStream) => void;

	onRemoveTrack: () => void;

	onSignalingStateChange: () => void;

	onTrack: (p1: FancyRTCTrackEvent) => void;

	readonly remoteDescription: FancyRTCSessionDescription;

	constructor(o: { config: FancyRTCConfiguration; });

	addIceCandidateWithCandidate(candidate: FancyRTCIceCandidate): void;

	addTrackWithTrackStreamIds(track: FancyRTCMediaStreamTrack, streamIds: NSArray<string> | string[]): void;

	close(): void;

	createAnswerWithMediaConstraintsListener(mediaConstraints: FancyRTCMediaConstraints, listener: (p1: FancyRTCSessionDescription, p2: string) => void): void;

	createDataChannelWithLabelChannelInit(label: string, channelInit: FancyRTCDataChannelInit): FancyRTCDataChannel;

	createOfferWithMediaConstraintsListener(mediaConstraints: FancyRTCMediaConstraints, listener: (p1: FancyRTCSessionDescription, p2: string) => void): void;

	dispose(): void;

	initWithConfig(config: FancyRTCConfiguration): this;

	localDescriptionWithSdpListener(sdp: FancyRTCSessionDescription, listener: (p1: string) => void): void;

	peerConnectionDidAddReceiverStreams(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver, mediaStreams: NSArray<RTCMediaStream> | RTCMediaStream[]): void;

	peerConnectionDidAddStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionDidChangeIceConnectionState(peerConnection: RTCPeerConnection, newState: any): void;

	peerConnectionDidChangeIceGatheringState(peerConnection: RTCPeerConnection, newState: any): void;

	peerConnectionDidChangeSignalingState(peerConnection: RTCPeerConnection, stateChanged: any): void;

	peerConnectionDidGenerateIceCandidate(peerConnection: RTCPeerConnection, candidate: RTCIceCandidate): void;

	peerConnectionDidOpenDataChannel(peerConnection: RTCPeerConnection, dataChannel: RTCDataChannel): void;

	peerConnectionDidRemoveIceCandidates(peerConnection: RTCPeerConnection, candidates: NSArray<RTCIceCandidate> | RTCIceCandidate[]): void;

	peerConnectionDidRemoveReceiver(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver): void;

	peerConnectionDidRemoveStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionShouldNegotiate(peerConnection: RTCPeerConnection): void;

	remoteDescriptionWithSdpListener(sdp: FancyRTCSessionDescription, listener: (p1: string) => void): void;
}

declare const enum FancyRTCPeerConnectionState {

	NEW = 0,

	CONNECTING = 1,

	CONNECTED = 2,

	DISCONNECTED = 3,

	FAILED = 4,

	CLOSED = 5
}

declare const enum FancyRTCRtcpMuxPolicy {

	NEGOTIATE = 0,

	REQUIRE = 1
}

declare class FancyRTCRtpParameters extends NSObject {

	static alloc(): FancyRTCRtpParameters; // inherited from NSObject

	static new(): FancyRTCRtpParameters; // inherited from NSObject

	readonly parameters: RTCRtpParameters;

	constructor(o: { parameters: RTCRtpParameters; });

	initWithParameters(parameters: RTCRtpParameters): this;
}

declare class FancyRTCRtpReceiver extends NSObject {

	static alloc(): FancyRTCRtpReceiver; // inherited from NSObject

	static new(): FancyRTCRtpReceiver; // inherited from NSObject

	readonly rtpReceiver: RTCRtpReceiver;

	constructor(o: { rtpReceiver: RTCRtpReceiver; });

	initWithRtpReceiver(rtpReceiver: RTCRtpReceiver): this;
}

declare class FancyRTCRtpSender extends NSObject {

	static alloc(): FancyRTCRtpSender; // inherited from NSObject

	static new(): FancyRTCRtpSender; // inherited from NSObject

	readonly dtmf: FancyRTCDTMFSender;

	readonly id: string;

	readonly parameters: FancyRTCRtpParameters;

	readonly sender: RTCRtpSender;

	readonly track: FancyRTCMediaStreamTrack;

	constructor(o: { sender: RTCRtpSender; });

	dispose(): void;

	initWithSender(sender: RTCRtpSender): this;

	replaceTrackWithTrack(track: FancyRTCMediaStreamTrack): void;
}

declare class FancyRTCRtpTransceiver extends NSObject {

	static alloc(): FancyRTCRtpTransceiver; // inherited from NSObject

	static new(): FancyRTCRtpTransceiver; // inherited from NSObject

	readonly currentDirection: FancyRTCRtpTransceiverDirection;

	direction: FancyRTCRtpTransceiverDirection;

	readonly mid: string;

	readonly receiver: FancyRTCRtpReceiver;

	readonly rtpTransceiver: RTCRtpTransceiver;

	readonly sender: FancyRTCRtpSender;

	readonly stopped: boolean;

	constructor(o: { rtpTransceiver: RTCRtpTransceiver; });

	initWithRtpTransceiver(rtpTransceiver: RTCRtpTransceiver): this;

	stop(): void;
}

declare const enum FancyRTCRtpTransceiverDirection {

	INACTIVE = 0,

	RECV_ONLY = 1,

	SEND_ONLY = 2,

	SEND_RECV = 3,

	NONE = 4
}

declare const enum FancyRTCSdpSemantics {

	PLAN_B = 0,

	UNIFIED_PLAN = 1
}

declare const enum FancyRTCSdpType {

	ANSWER = 0,

	OFFER = 1,

	PRANSWER = 2,

	ROLLBACK = 3
}

declare class FancyRTCSessionDescription extends NSObject {

	static alloc(): FancyRTCSessionDescription; // inherited from NSObject

	static new(): FancyRTCSessionDescription; // inherited from NSObject

	readonly sdp: string;

	readonly sessionDescription: RTCSessionDescription;

	readonly type: FancyRTCSdpType;

	constructor(o: { sdp: RTCSessionDescription; });

	constructor(o: { type: FancyRTCSdpType; description: string; });

	initWithSdp(sdp: RTCSessionDescription): this;

	initWithTypeDescription(type: FancyRTCSdpType, description: string): this;

	toJSON(): string;
}

declare class FancyRTCTrackEvent extends NSObject {

	static alloc(): FancyRTCTrackEvent; // inherited from NSObject

	static new(): FancyRTCTrackEvent; // inherited from NSObject

	readonly mediaTrack: FancyRTCMediaStreamTrack;

	readonly receiver: FancyRTCRtpReceiver;

	readonly streams: NSArray<FancyRTCMediaStream>;

	readonly transceiver: FancyRTCRtpTransceiver;

	constructor(o: { receiver: FancyRTCRtpReceiver; streams: NSArray<FancyRTCMediaStream> | FancyRTCMediaStream[]; mediaTrack: FancyRTCMediaStreamTrack; transceiver: FancyRTCRtpTransceiver; });

	initWithReceiverStreamsMediaTrackTransceiver(receiver: FancyRTCRtpReceiver, streams: NSArray<FancyRTCMediaStream> | FancyRTCMediaStream[], mediaTrack: FancyRTCMediaStreamTrack, transceiver: FancyRTCRtpTransceiver): this;
}

declare class FancyRTCVideoTrack extends FancyRTCMediaStreamTrack {

	static alloc(): FancyRTCVideoTrack; // inherited from NSObject

	static new(): FancyRTCVideoTrack; // inherited from NSObject

	readonly videoTrack: RTCVideoTrack;

	constructor();

	init(track: RTCVideoTrack): this;
}

declare class FancyUtils extends NSObject {

	static alloc(): FancyUtils; // inherited from NSObject

	static getLongUUID(): number;

	static getUUID(): string;

	static new(): FancyUtils; // inherited from NSObject
}

declare class FancyWebRTC extends NSObject {

	static alloc(): FancyWebRTC; // inherited from NSObject

	static hasPermissions(): boolean;

	static initWithOptions(options: NSDictionary<string, any>): FancyWebRTC;

	static new(): FancyWebRTC; // inherited from NSObject

	static requestPermissionsWithCallback(callback: (p1: string) => void): void;

	addIceCandidateWithIceCandidate(iceCandidate: WebRTCIceCandidate): void;

	addLocalStreamWithStream(stream: RTCMediaStream): void;

	addRemoteStreamWithStream(stream: RTCMediaStream): void;

	connect(): void;

	createAnswerForOfferReceivedWithSdp(sdp: WebRTCSdp): void;

	dataChannelCloseWithName(name: string): void;

	dataChannelCreateWithName(name: string): void;

	dataChannelDidChangeState(dataChannel: RTCDataChannel): void;

	dataChannelDidReceiveMessageWithBuffer(dataChannel: RTCDataChannel, buffer: RTCDataBuffer): void;

	dataChannelSendWithNameDataType(name: string, data: string, type: WebRTCDataChannelMessageType): void;

	disconnect(): void;

	handleAnswerReceivedWithAnswer(answer: WebRTCSdp): void;

	makeOffer(): void;

	peerConnectionDidAddReceiverStreams(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver, mediaStreams: NSArray<RTCMediaStream> | RTCMediaStream[]): void;

	peerConnectionDidAddStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionDidChangeIceConnectionState(peerConnection: RTCPeerConnection, newState: any): void;

	peerConnectionDidChangeIceGatheringState(peerConnection: RTCPeerConnection, newState: any): void;

	peerConnectionDidChangeSignalingState(peerConnection: RTCPeerConnection, stateChanged: any): void;

	peerConnectionDidGenerateIceCandidate(peerConnection: RTCPeerConnection, candidate: RTCIceCandidate): void;

	peerConnectionDidOpenDataChannel(peerConnection: RTCPeerConnection, dataChannel: RTCDataChannel): void;

	peerConnectionDidRemoveIceCandidates(peerConnection: RTCPeerConnection, candidates: NSArray<RTCIceCandidate> | RTCIceCandidate[]): void;

	peerConnectionDidRemoveReceiver(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver): void;

	peerConnectionDidRemoveStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionDidStartReceivingOnTransceiver(peerConnection: RTCPeerConnection, transceiver: RTCRtpTransceiver): void;

	peerConnectionShouldNegotiate(peerConnection: RTCPeerConnection): void;

	setListenerWithListener(listener: FancyWebRTCClientDelegate): void;

	switchCameraWithTrackId(trackId: string): void;
}

interface FancyWebRTCClientDelegate {

	webRTCClientDataChannelMessageTypeWithClientNameDataType(client: FancyWebRTC, name: string, data: string, type: WebRTCDataChannelMessageType): void;

	webRTCClientDataChannelStateChangedWithClientNameType(client: FancyWebRTC, name: string, type: any): void;

	webRTCClientDidGenerateIceCandidateWithClientIceCandidate(client: FancyWebRTC, iceCandidate: RTCIceCandidate): void;

	webRTCClientDidReceiveErrorWithClientError(client: FancyWebRTC, error: NSError): void;

	webRTCClientDidReceiveStreamWithClientStream(client: FancyWebRTC, stream: RTCMediaStream): void;

	webRTCClientDidRemoveStreamWithClientStream(client: FancyWebRTC, stream: RTCMediaStream): void;

	webRTCClientOnCameraSwitchDoneWithClientDone(client: FancyWebRTC, done: boolean): void;

	webRTCClientOnCameraSwitchErrorWithClientError(client: FancyWebRTC, error: string): void;

	webRTCClientOnIceCandidatesRemovedWithClientCandidates(client: FancyWebRTC, candidates: NSArray<RTCIceCandidate> | RTCIceCandidate[]): void;

	webRTCClientOnIceConnectionChangeWithClientConnectionState(client: FancyWebRTC, connectionState: any): void;

	webRTCClientOnIceConnectionReceivingChangeWithClientChange(client: FancyWebRTC, change: boolean): void;

	webRTCClientOnIceGatheringChangeWithClientGatheringState(client: FancyWebRTC, gatheringState: any): void;

	webRTCClientOnRemoveStreamWithClientStream(client: FancyWebRTC, stream: RTCMediaStream): void;

	webRTCClientOnRenegotiationNeededWithClient(client: FancyWebRTC): void;

	webRTCClientOnSignalingChangeWithClientSignalingState(client: FancyWebRTC, signalingState: any): void;

	webRTCClientStartCallWithSdpWithClientSdp(client: FancyWebRTC, sdp: RTCSessionDescription): void;
}
declare var FancyWebRTCClientDelegate: {

	prototype: FancyWebRTCClientDelegate;
};

declare var FancyWebRTCVersionNumber: number;

declare var FancyWebRTCVersionString: interop.Reference<number>;

declare class FancyWebRTCView extends UIView {

	static alloc(): FancyWebRTCView; // inherited from NSObject

	static appearance(): FancyWebRTCView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FancyWebRTCView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FancyWebRTCView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FancyWebRTCView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FancyWebRTCView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FancyWebRTCView; // inherited from UIAppearance

	static new(): FancyWebRTCView; // inherited from NSObject

	setMirrorWithMirror(mirror: boolean): void;

	setSrcObjectWith(rtcStream: RTCMediaStream): void;

	setSrcObjectWithStream(stream: FancyRTCMediaStream): void;

	setVideoTrackWithTrack(track: RTCVideoTrack): void;

	videoViewDidChangeVideoSize(videoView: RTCVideoRenderer, size: CGSize): void;
}

declare class Format extends NSObject {

	static alloc(): Format; // inherited from NSObject

	static new(): Format; // inherited from NSObject
}

declare const enum IceConnectionState {

	NEW = 0,

	CHECKING = 1,

	CONNECTED = 2,

	COMPLETED = 3,

	FAILED = 4,

	DISCONNECTED = 5,

	CLOSED = 6
}

declare const enum IceGatheringState {

	NEW = 0,

	GATHERING = 1,

	COMPLETE = 2
}

declare class IceServer extends NSObject {

	static alloc(): IceServer; // inherited from NSObject

	static new(): IceServer; // inherited from NSObject

	constructor(o: { urls: NSArray<any> | any[]; username: string; password: string; });

	initWithUrlsUsernamePassword(urls: NSArray<any> | any[], username: string, password: string): this;
}

declare class MediaData extends NSObject {

	static alloc(): MediaData; // inherited from NSObject

	static new(): MediaData; // inherited from NSObject
}

declare const enum Quality {

	MAX_480P = 0,

	MAX_720P = 1,

	MAX_1080P = 2,

	MAX_2160P = 3,

	HIGHEST = 4,

	LOWEST = 5
}

declare const enum SignalingState {

	STABLE = 0,

	HAVE_LOCAL_OFFER = 1,

	HAVE_LOCAL_PRANSWER = 2,

	HAVE_REMOTE_OFFER = 3,

	HAVE_REMOTE_PRANSWER = 4,

	CLOSED = 5
}

declare class WebRTCCapturer extends NSObject {

	static alloc(): WebRTCCapturer; // inherited from NSObject

	static new(): WebRTCCapturer; // inherited from NSObject
}

declare const enum WebRTCDataChannelMessageType {

	BINARY = 0,

	TEXT = 1
}

declare const enum WebRTCDataChannelState {

	CONNECTING = 0,

	CLOSED = 1,

	CLOSING = 2,

	OPEN = 3
}

interface WebRTCIceCandidate {

	sdp: string;

	sdpMLineIndex: number;

	sdpMid: string;
}
declare var WebRTCIceCandidate: {

	prototype: WebRTCIceCandidate;
};

interface WebRTCOptions {

	enableAudio: boolean;

	enableVideo: boolean;

	iceServers: NSArray<IceServer>;
}
declare var WebRTCOptions: {

	prototype: WebRTCOptions;
};

interface WebRTCSdp {

	sdp: string;

	type: WebRTCSdpType;
}
declare var WebRTCSdp: {

	prototype: WebRTCSdp;
};

declare const enum WebRTCSdpType {

	OFFER = 0,

	PRANSWER = 1,

	ANSWER = 2
}

declare const enum WebRTCState {

	CONNECTING = 0,

	DISCONNECTED = 1,

	CONNECTED = 2
}
