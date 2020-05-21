
declare class RTCAudioSession extends NSObject implements RTCAudioSessionActivationDelegate {

	static alloc(): RTCAudioSession; // inherited from NSObject

	static new(): RTCAudioSession; // inherited from NSObject

	static sharedInstance(): RTCAudioSession;

	readonly IOBufferDuration: number;

	readonly category: string;

	readonly categoryOptions: AVAudioSessionCategoryOptions;

	readonly currentRoute: AVAudioSessionRouteDescription;

	ignoresPreferredAttributeConfigurationErrors: boolean;

	readonly inputAvailable: boolean;

	readonly inputDataSource: AVAudioSessionDataSourceDescription;

	readonly inputDataSources: NSArray<AVAudioSessionDataSourceDescription>;

	readonly inputGain: number;

	readonly inputGainSettable: boolean;

	readonly inputLatency: number;

	readonly inputNumberOfChannels: number;

	readonly isActive: boolean;

	isAudioEnabled: boolean;

	readonly isLocked: boolean;

	readonly maximumInputNumberOfChannels: number;

	readonly maximumOutputNumberOfChannels: number;

	readonly mode: string;

	readonly outputDataSource: AVAudioSessionDataSourceDescription;

	readonly outputDataSources: NSArray<AVAudioSessionDataSourceDescription>;

	readonly outputLatency: number;

	readonly outputNumberOfChannels: number;

	readonly outputVolume: number;

	readonly preferredIOBufferDuration: number;

	readonly preferredSampleRate: number;

	readonly sampleRate: number;

	readonly secondaryAudioShouldBeSilencedHint: boolean;

	readonly session: AVAudioSession;

	useManualAudio: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addDelegate(delegate: RTCAudioSessionDelegate): void;

	audioSessionDidActivate(session: AVAudioSession): void;

	audioSessionDidDeactivate(session: AVAudioSession): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lockForConfiguration(): void;

	overrideOutputAudioPortError(portOverride: AVAudioSessionPortOverride): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeDelegate(delegate: RTCAudioSessionDelegate): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setActiveError(active: boolean): boolean;

	setCategoryWithOptionsError(category: string, options: AVAudioSessionCategoryOptions): boolean;

	setConfigurationActiveError(configuration: RTCAudioSessionConfiguration, active: boolean): boolean;

	setConfigurationError(configuration: RTCAudioSessionConfiguration): boolean;

	setInputDataSourceError(dataSource: AVAudioSessionDataSourceDescription): boolean;

	setInputGainError(gain: number): boolean;

	setModeError(mode: string): boolean;

	setOutputDataSourceError(dataSource: AVAudioSessionDataSourceDescription): boolean;

	setPreferredIOBufferDurationError(duration: number): boolean;

	setPreferredInputError(inPort: AVAudioSessionPortDescription): boolean;

	setPreferredInputNumberOfChannelsError(count: number): boolean;

	setPreferredOutputNumberOfChannelsError(count: number): boolean;

	setPreferredSampleRateError(sampleRate: number): boolean;

	unlockForConfiguration(): void;
}

interface RTCAudioSessionActivationDelegate extends NSObjectProtocol {

	audioSessionDidActivate(session: AVAudioSession): void;

	audioSessionDidDeactivate(session: AVAudioSession): void;
}
declare var RTCAudioSessionActivationDelegate: {

	prototype: RTCAudioSessionActivationDelegate;
};

declare class RTCAudioSessionConfiguration extends NSObject {

	static alloc(): RTCAudioSessionConfiguration; // inherited from NSObject

	static currentConfiguration(): RTCAudioSessionConfiguration;

	static new(): RTCAudioSessionConfiguration; // inherited from NSObject

	static setWebRTCConfiguration(configuration: RTCAudioSessionConfiguration): void;

	static webRTCConfiguration(): RTCAudioSessionConfiguration;

	category: string;

	categoryOptions: AVAudioSessionCategoryOptions;

	inputNumberOfChannels: number;

	ioBufferDuration: number;

	mode: string;

	outputNumberOfChannels: number;

	sampleRate: number;
}

interface RTCAudioSessionDelegate extends NSObjectProtocol {

	audioSessionDidBeginInterruption?(session: RTCAudioSession): void;

	audioSessionDidChangeCanPlayOrRecord?(session: RTCAudioSession, canPlayOrRecord: boolean): void;

	audioSessionDidChangeOutputVolume?(audioSession: RTCAudioSession, outputVolume: number): void;

	audioSessionDidChangeRouteReasonPreviousRoute?(session: RTCAudioSession, reason: AVAudioSessionRouteChangeReason, previousRoute: AVAudioSessionRouteDescription): void;

	audioSessionDidDetectPlayoutGlitch?(audioSession: RTCAudioSession, totalNumberOfGlitches: number): void;

	audioSessionDidEndInterruptionShouldResumeSession?(session: RTCAudioSession, shouldResumeSession: boolean): void;

	audioSessionDidSetActive?(audioSession: RTCAudioSession, active: boolean): void;

	audioSessionDidStartPlayOrRecord?(session: RTCAudioSession): void;

	audioSessionDidStopPlayOrRecord?(session: RTCAudioSession): void;

	audioSessionFailedToSetActiveError?(audioSession: RTCAudioSession, active: boolean, error: NSError): void;

	audioSessionMediaServerReset?(session: RTCAudioSession): void;

	audioSessionMediaServerTerminated?(session: RTCAudioSession): void;

	audioSessionWillSetActive?(audioSession: RTCAudioSession, active: boolean): void;
}
declare var RTCAudioSessionDelegate: {

	prototype: RTCAudioSessionDelegate;
};

declare class RTCAudioSource extends RTCMediaSource {

	static alloc(): RTCAudioSource; // inherited from NSObject

	static new(): RTCAudioSource; // inherited from NSObject

	volume: number;
}

declare class RTCAudioTrack extends RTCMediaStreamTrack {

	static alloc(): RTCAudioTrack; // inherited from NSObject

	static new(): RTCAudioTrack; // inherited from NSObject

	readonly source: RTCAudioSource;
}

declare const enum RTCBundlePolicy {

	Balanced = 0,

	MaxCompat = 1,

	MaxBundle = 2
}

declare class RTCCVPixelBuffer extends NSObject implements RTCVideoFrameBuffer {

	static alloc(): RTCCVPixelBuffer; // inherited from NSObject

	static new(): RTCCVPixelBuffer; // inherited from NSObject

	static supportedPixelFormats(): NSSet<number>;

	readonly cropHeight: number;

	readonly cropWidth: number;

	readonly cropX: number;

	readonly cropY: number;

	readonly pixelBuffer: any;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly height: number; // inherited from RTCVideoFrameBuffer

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly width: number; // inherited from RTCVideoFrameBuffer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { pixelBuffer: any; });

	constructor(o: { pixelBuffer: any; adaptedWidth: number; adaptedHeight: number; cropWidth: number; cropHeight: number; cropX: number; cropY: number; });

	bufferSizeForCroppingAndScalingToWidthHeight(width: number, height: number): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	cropAndScaleToWithTempBuffer(outputPixelBuffer: any, tmpBuffer: string | interop.Pointer | interop.Reference<any>): boolean;

	initWithPixelBuffer(pixelBuffer: any): this;

	initWithPixelBufferAdaptedWidthAdaptedHeightCropWidthCropHeightCropXCropY(pixelBuffer: any, adaptedWidth: number, adaptedHeight: number, cropWidth: number, cropHeight: number, cropX: number, cropY: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requiresCropping(): boolean;

	requiresScalingToWidthHeight(width: number, height: number): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toI420(): RTCI420BufferProtocol;
}

declare class RTCCallbackLogger extends NSObject {

	static alloc(): RTCCallbackLogger; // inherited from NSObject

	static new(): RTCCallbackLogger; // inherited from NSObject

	severity: RTCLoggingSeverity;

	start(handler: (p1: string) => void): void;

	startWithMessageAndSeverityHandler(handler: (p1: string, p2: RTCLoggingSeverity) => void): void;

	stop(): void;
}

declare class RTCCameraPreviewView extends UIView {

	static alloc(): RTCCameraPreviewView; // inherited from NSObject

	static appearance(): RTCCameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RTCCameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RTCCameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCCameraPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RTCCameraPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCCameraPreviewView; // inherited from UIAppearance

	static new(): RTCCameraPreviewView; // inherited from NSObject

	captureSession: AVCaptureSession;
}

declare class RTCCameraVideoCapturer extends RTCVideoCapturer {

	static alloc(): RTCCameraVideoCapturer; // inherited from NSObject

	static captureDevices(): NSArray<AVCaptureDevice>;

	static new(): RTCCameraVideoCapturer; // inherited from NSObject

	static supportedFormatsForDevice(device: AVCaptureDevice): NSArray<AVCaptureDeviceFormat>;

	readonly captureSession: AVCaptureSession;

	preferredOutputPixelFormat(): number;

	startCaptureWithDeviceFormatFps(device: AVCaptureDevice, format: AVCaptureDeviceFormat, fps: number): void;

	startCaptureWithDeviceFormatFpsCompletionHandler(device: AVCaptureDevice, format: AVCaptureDeviceFormat, fps: number, completionHandler: (p1: NSError) => void): void;

	stopCapture(): void;

	stopCaptureWithCompletionHandler(completionHandler: () => void): void;
}

declare const enum RTCCandidateNetworkPolicy {

	All = 0,

	LowCost = 1
}

declare class RTCCertificate extends NSObject implements NSCopying {

	static alloc(): RTCCertificate; // inherited from NSObject

	static generateCertificateWithParams(params: NSDictionary<any, any>): RTCCertificate;

	static new(): RTCCertificate; // inherited from NSObject

	readonly certificate: string;

	readonly private_key: string;

	constructor(o: { privateKey: string; certificate: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPrivateKeyCertificate(private_key: string, certificate: string): this;
}

declare function RTCCleanupSSL(): boolean;

interface RTCCodecSpecificInfo extends NSObjectProtocol {
}
declare var RTCCodecSpecificInfo: {

	prototype: RTCCodecSpecificInfo;
};

declare class RTCCodecSpecificInfoH264 extends NSObject implements RTCCodecSpecificInfo {

	static alloc(): RTCCodecSpecificInfoH264; // inherited from NSObject

	static new(): RTCCodecSpecificInfoH264; // inherited from NSObject

	packetizationMode: RTCH264PacketizationMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RTCConfiguration extends NSObject {

	static alloc(): RTCConfiguration; // inherited from NSObject

	static new(): RTCConfiguration; // inherited from NSObject

	activeResetSrtpParams: boolean;

	audioJitterBufferFastAccelerate: boolean;

	audioJitterBufferMaxPackets: number;

	bundlePolicy: RTCBundlePolicy;

	candidateNetworkPolicy: RTCCandidateNetworkPolicy;

	certificate: RTCCertificate;

	continualGatheringPolicy: RTCContinualGatheringPolicy;

	cryptoOptions: RTCCryptoOptions;

	disableIPV6: boolean;

	disableIPV6OnWiFi: boolean;

	disableLinkLocalNetworks: boolean;

	iceBackupCandidatePairPingInterval: number;

	iceCandidatePoolSize: number;

	iceCheckMinInterval: number;

	iceConnectionReceivingTimeout: number;

	iceRegatherIntervalRange: RTCIntervalRange;

	iceServers: NSArray<RTCIceServer>;

	iceTransportPolicy: RTCIceTransportPolicy;

	keyType: RTCEncryptionKeyType;

	maxIPv6Networks: number;

	rtcpAudioReportIntervalMs: number;

	rtcpMuxPolicy: RTCRtcpMuxPolicy;

	rtcpVideoReportIntervalMs: number;

	sdpSemantics: RTCSdpSemantics;

	shouldPresumeWritableWhenFullyRelayed: boolean;

	shouldPruneTurnPorts: boolean;

	shouldSurfaceIceCandidatesOnIceTransportTypeChanged: boolean;

	tcpCandidatePolicy: RTCTcpCandidatePolicy;

	useMediaTransport: boolean;

	useMediaTransportForDataChannels: boolean;
}

declare const enum RTCContinualGatheringPolicy {

	GatherOnce = 0,

	GatherContinually = 1
}

declare class RTCCryptoOptions extends NSObject {

	static alloc(): RTCCryptoOptions; // inherited from NSObject

	static new(): RTCCryptoOptions; // inherited from NSObject

	sframeRequireFrameEncryption: boolean;

	srtpEnableAes128Sha1_32CryptoCipher: boolean;

	srtpEnableEncryptedRtpHeaderExtensions: boolean;

	srtpEnableGcmCryptoSuites: boolean;

	constructor(o: { srtpEnableGcmCryptoSuites: boolean; srtpEnableAes128Sha1_32CryptoCipher: boolean; srtpEnableEncryptedRtpHeaderExtensions: boolean; sframeRequireFrameEncryption: boolean; });

	initWithSrtpEnableGcmCryptoSuitesSrtpEnableAes128Sha1_32CryptoCipherSrtpEnableEncryptedRtpHeaderExtensionsSframeRequireFrameEncryption(srtpEnableGcmCryptoSuites: boolean, srtpEnableAes128Sha1_32CryptoCipher: boolean, srtpEnableEncryptedRtpHeaderExtensions: boolean, sframeRequireFrameEncryption: boolean): this;
}

declare class RTCDataBuffer extends NSObject {

	static alloc(): RTCDataBuffer; // inherited from NSObject

	static new(): RTCDataBuffer; // inherited from NSObject

	readonly data: NSData;

	readonly isBinary: boolean;

	constructor(o: { data: NSData; isBinary: boolean; });

	initWithDataIsBinary(data: NSData, isBinary: boolean): this;
}

declare class RTCDataChannel extends NSObject {

	static alloc(): RTCDataChannel; // inherited from NSObject

	static new(): RTCDataChannel; // inherited from NSObject

	readonly bufferedAmount: number;

	readonly channelId: number;

	delegate: RTCDataChannelDelegate;

	readonly isNegotiated: boolean;

	readonly isOrdered: boolean;

	readonly isReliable: boolean;

	readonly label: string;

	readonly maxPacketLifeTime: number;

	readonly maxRetransmitTime: number;

	readonly maxRetransmits: number;

	readonly protocol: string;

	readonly readyState: RTCDataChannelState;

	readonly streamId: number;

	close(): void;

	sendData(data: RTCDataBuffer): boolean;
}

declare class RTCDataChannelConfiguration extends NSObject {

	static alloc(): RTCDataChannelConfiguration; // inherited from NSObject

	static new(): RTCDataChannelConfiguration; // inherited from NSObject

	channelId: number;

	isNegotiated: boolean;

	isOrdered: boolean;

	maxPacketLifeTime: number;

	maxRetransmitTimeMs: number;

	maxRetransmits: number;

	protocol: string;

	streamId: number;
}

interface RTCDataChannelDelegate extends NSObjectProtocol {

	dataChannelDidChangeBufferedAmount?(dataChannel: RTCDataChannel, amount: number): void;

	dataChannelDidChangeState(dataChannel: RTCDataChannel): void;

	dataChannelDidReceiveMessageWithBuffer(dataChannel: RTCDataChannel, buffer: RTCDataBuffer): void;
}
declare var RTCDataChannelDelegate: {

	prototype: RTCDataChannelDelegate;
};

declare const enum RTCDataChannelState {

	Connecting = 0,

	Open = 1,

	Closing = 2,

	Closed = 3
}

declare class RTCDefaultVideoDecoderFactory extends NSObject implements RTCVideoDecoderFactory {

	static alloc(): RTCDefaultVideoDecoderFactory; // inherited from NSObject

	static new(): RTCDefaultVideoDecoderFactory; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDecoder(info: RTCVideoCodecInfo): RTCVideoDecoder;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}

declare class RTCDefaultVideoEncoderFactory extends NSObject implements RTCVideoEncoderFactory {

	static alloc(): RTCDefaultVideoEncoderFactory; // inherited from NSObject

	static new(): RTCDefaultVideoEncoderFactory; // inherited from NSObject

	static supportedCodecs(): NSArray<RTCVideoCodecInfo>;

	preferredCodec: RTCVideoCodecInfo;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createEncoder(info: RTCVideoCodecInfo): RTCVideoEncoder;

	implementations(): NSArray<RTCVideoCodecInfo>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}

declare const enum RTCDeviceType {

	Unknown = 0,

	IPhone1G = 1,

	IPhone3G = 2,

	IPhone3GS = 3,

	IPhone4 = 4,

	IPhone4Verizon = 5,

	IPhone4S = 6,

	IPhone5GSM = 7,

	IPhone5GSM_CDMA = 8,

	IPhone5CGSM = 9,

	IPhone5CGSM_CDMA = 10,

	IPhone5SGSM = 11,

	IPhone5SGSM_CDMA = 12,

	IPhone6Plus = 13,

	IPhone6 = 14,

	IPhone6S = 15,

	IPhone6SPlus = 16,

	IPhone7 = 17,

	IPhone7Plus = 18,

	IPhoneSE = 19,

	IPhone8 = 20,

	IPhone8Plus = 21,

	IPhoneX = 22,

	IPhoneXS = 23,

	IPhoneXSMax = 24,

	IPhoneXR = 25,

	IPodTouch1G = 26,

	IPodTouch2G = 27,

	IPodTouch3G = 28,

	IPodTouch4G = 29,

	IPodTouch5G = 30,

	IPodTouch6G = 31,

	IPad = 32,

	IPad2Wifi = 33,

	IPad2GSM = 34,

	IPad2CDMA = 35,

	IPad2Wifi2 = 36,

	IPadMiniWifi = 37,

	IPadMiniGSM = 38,

	IPadMiniGSM_CDMA = 39,

	IPad3Wifi = 40,

	IPad3GSM_CDMA = 41,

	IPad3GSM = 42,

	IPad4Wifi = 43,

	IPad4GSM = 44,

	IPad4GSM_CDMA = 45,

	IPad5 = 46,

	IPad6 = 47,

	IPadAirWifi = 48,

	IPadAirCellular = 49,

	IPadAirWifiCellular = 50,

	IPadAir2 = 51,

	IPadMini2GWifi = 52,

	IPadMini2GCellular = 53,

	IPadMini2GWifiCellular = 54,

	IPadMini3 = 55,

	IPadMini4 = 56,

	IPadPro9Inch = 57,

	IPadPro12Inch = 58,

	IPadPro12Inch2 = 59,

	IPadPro10Inch = 60,

	Simulatori386 = 61,

	Simulatorx86_64 = 62
}

declare class RTCDispatcher extends NSObject {

	static alloc(): RTCDispatcher; // inherited from NSObject

	static dispatchAsyncOnTypeBlock(dispatchType: RTCDispatcherQueueType, block: () => void): void;

	static isOnQueueForType(dispatchType: RTCDispatcherQueueType): boolean;

	static new(): RTCDispatcher; // inherited from NSObject
}

declare const enum RTCDispatcherQueueType {

	TypeMain = 0,

	TypeCaptureSession = 1,

	TypeAudioSession = 2
}

interface RTCDtmfSender extends NSObjectProtocol {

	canInsertDtmf: boolean;

	duration(): number;

	insertDtmfDurationInterToneGap(tones: string, duration: number, interToneGap: number): boolean;

	interToneGap(): number;

	remainingTones(): string;
}
declare var RTCDtmfSender: {

	prototype: RTCDtmfSender;
};

declare class RTCEAGLVideoView extends UIView implements RTCVideoRenderer {

	static alloc(): RTCEAGLVideoView; // inherited from NSObject

	static appearance(): RTCEAGLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RTCEAGLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RTCEAGLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCEAGLVideoView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RTCEAGLVideoView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCEAGLVideoView; // inherited from UIAppearance

	static new(): RTCEAGLVideoView; // inherited from NSObject

	delegate: RTCVideoViewDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; shader: RTCVideoViewShading; });

	constructor(o: { frame: CGRect; shader: RTCVideoViewShading; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCoderShader(aDecoder: NSCoder, shader: RTCVideoViewShading): this;

	initWithFrameShader(frame: CGRect, shader: RTCVideoViewShading): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderFrame(frame: RTCVideoFrame): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setSize(size: CGSize): void;
}

declare function RTCEnableMetrics(): void;

declare class RTCEncodedImage extends NSObject {

	static alloc(): RTCEncodedImage; // inherited from NSObject

	static new(): RTCEncodedImage; // inherited from NSObject

	buffer: NSData;

	captureTimeMs: number;

	completeFrame: boolean;

	contentType: RTCVideoContentType;

	encodeFinishMs: number;

	encodeStartMs: number;

	encodedHeight: number;

	encodedWidth: number;

	flags: number;

	frameType: RTCFrameType;

	ntpTimeMs: number;

	qp: number;

	rotation: RTCVideoRotation;

	timeStamp: number;
}

declare const enum RTCEncryptionKeyType {

	RSA = 0,

	ECDSA = 1
}

declare class RTCFileLogger extends NSObject {

	static alloc(): RTCFileLogger; // inherited from NSObject

	static new(): RTCFileLogger; // inherited from NSObject

	readonly rotationType: RTCFileLoggerRotationType;

	severity: RTCFileLoggerSeverity;

	shouldDisableBuffering: boolean;

	constructor(o: { dirPath: string; maxFileSize: number; });

	constructor(o: { dirPath: string; maxFileSize: number; rotationType: RTCFileLoggerRotationType; });

	initWithDirPathMaxFileSize(dirPath: string, maxFileSize: number): this;

	initWithDirPathMaxFileSizeRotationType(dirPath: string, maxFileSize: number, rotationType: RTCFileLoggerRotationType): this;

	logData(): NSData;

	start(): void;

	stop(): void;
}

declare const enum RTCFileLoggerRotationType {

	TypeCall = 0,

	TypeApp = 1
}

declare const enum RTCFileLoggerSeverity {

	Verbose = 0,

	Info = 1,

	Warning = 2,

	Error = 3
}

declare function RTCFileName(filePath: string): string;

declare class RTCFileVideoCapturer extends RTCVideoCapturer {

	static alloc(): RTCFileVideoCapturer; // inherited from NSObject

	static new(): RTCFileVideoCapturer; // inherited from NSObject

	startCapturingFromFileNamedOnError(nameOfFile: string, errorBlock: (p1: NSError) => void): void;

	stopCapture(): void;
}

declare const enum RTCFrameType {

	EmptyFrame = 0,

	AudioFrameSpeech = 1,

	AudioFrameCN = 2,

	VideoFrameKey = 3,

	VideoFrameDelta = 4
}

declare function RTCGetAndResetMetrics(): NSArray<RTCMetricsSampleInfo>;

declare const enum RTCH264Level {

	Level1_b = 0,

	Level1 = 10,

	Level1_1 = 11,

	Level1_2 = 12,

	Level1_3 = 13,

	Level2 = 20,

	Level2_1 = 21,

	Level2_2 = 22,

	Level3 = 30,

	Level3_1 = 31,

	Level3_2 = 32,

	Level4 = 40,

	Level4_1 = 41,

	Level4_2 = 42,

	Level5 = 50,

	Level5_1 = 51,

	Level5_2 = 52
}

declare const enum RTCH264PacketizationMode {

	NonInterleaved = 0,

	SingleNalUnit = 1
}

declare const enum RTCH264Profile {

	ConstrainedBaseline = 0,

	Baseline = 1,

	Main = 2,

	ConstrainedHigh = 3,

	High = 4
}

declare class RTCH264ProfileLevelId extends NSObject {

	static alloc(): RTCH264ProfileLevelId; // inherited from NSObject

	static new(): RTCH264ProfileLevelId; // inherited from NSObject

	readonly hexString: string;

	readonly level: RTCH264Level;

	readonly profile: RTCH264Profile;

	constructor(o: { hexString: string; });

	constructor(o: { profile: RTCH264Profile; level: RTCH264Level; });

	initWithHexString(hexString: string): this;

	initWithProfileLevel(profile: RTCH264Profile, level: RTCH264Level): this;
}

declare class RTCI420Buffer extends NSObject implements RTCI420BufferProtocol {

	static alloc(): RTCI420Buffer; // inherited from NSObject

	static new(): RTCI420Buffer; // inherited from NSObject

	readonly chromaHeight: number; // inherited from RTCYUVPlanarBuffer

	readonly chromaWidth: number; // inherited from RTCYUVPlanarBuffer

	readonly dataU: string; // inherited from RTCYUVPlanarBuffer

	readonly dataV: string; // inherited from RTCYUVPlanarBuffer

	readonly dataY: string; // inherited from RTCYUVPlanarBuffer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly height: number; // inherited from RTCVideoFrameBuffer

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly strideU: number; // inherited from RTCYUVPlanarBuffer

	readonly strideV: number; // inherited from RTCYUVPlanarBuffer

	readonly strideY: number; // inherited from RTCYUVPlanarBuffer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly width: number; // inherited from RTCVideoFrameBuffer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { width: number; height: number; }); // inherited from RTCYUVPlanarBuffer

	constructor(o: { width: number; height: number; dataY: string | interop.Pointer | interop.Reference<any>; dataU: string | interop.Pointer | interop.Reference<any>; dataV: string | interop.Pointer | interop.Reference<any>; }); // inherited from RTCYUVPlanarBuffer

	constructor(o: { width: number; height: number; strideY: number; strideU: number; strideV: number; }); // inherited from RTCYUVPlanarBuffer

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithWidthHeight(width: number, height: number): this;

	initWithWidthHeightDataYDataUDataV(width: number, height: number, dataY: string | interop.Pointer | interop.Reference<any>, dataU: string | interop.Pointer | interop.Reference<any>, dataV: string | interop.Pointer | interop.Reference<any>): this;

	initWithWidthHeightStrideYStrideUStrideV(width: number, height: number, strideY: number, strideU: number, strideV: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toI420(): RTCI420BufferProtocol;
}

interface RTCI420BufferProtocol extends RTCYUVPlanarBuffer {
}
declare var RTCI420BufferProtocol: {

	prototype: RTCI420BufferProtocol;
};

declare class RTCIceCandidate extends NSObject {

	static alloc(): RTCIceCandidate; // inherited from NSObject

	static new(): RTCIceCandidate; // inherited from NSObject

	readonly sdp: string;

	readonly sdpMLineIndex: number;

	readonly sdpMid: string;

	readonly serverUrl: string;

	constructor(o: { sdp: string; sdpMLineIndex: number; sdpMid: string; });

	initWithSdpSdpMLineIndexSdpMid(sdp: string, sdpMLineIndex: number, sdpMid: string): this;
}

declare const enum RTCIceConnectionState {

	New = 0,

	Checking = 1,

	Connected = 2,

	Completed = 3,

	Failed = 4,

	Disconnected = 5,

	Closed = 6,

	Count = 7
}

declare const enum RTCIceGatheringState {

	New = 0,

	Gathering = 1,

	Complete = 2
}

declare class RTCIceServer extends NSObject {

	static alloc(): RTCIceServer; // inherited from NSObject

	static new(): RTCIceServer; // inherited from NSObject

	readonly credential: string;

	readonly hostname: string;

	readonly tlsAlpnProtocols: NSArray<string>;

	readonly tlsCertPolicy: RTCTlsCertPolicy;

	readonly tlsEllipticCurves: NSArray<string>;

	readonly urlStrings: NSArray<string>;

	readonly username: string;

	constructor(o: { URLStrings: NSArray<string> | string[]; });

	constructor(o: { URLStrings: NSArray<string> | string[]; username: string; credential: string; });

	constructor(o: { URLStrings: NSArray<string> | string[]; username: string; credential: string; tlsCertPolicy: RTCTlsCertPolicy; });

	constructor(o: { URLStrings: NSArray<string> | string[]; username: string; credential: string; tlsCertPolicy: RTCTlsCertPolicy; hostname: string; });

	constructor(o: { URLStrings: NSArray<string> | string[]; username: string; credential: string; tlsCertPolicy: RTCTlsCertPolicy; hostname: string; tlsAlpnProtocols: NSArray<string> | string[]; });

	constructor(o: { URLStrings: NSArray<string> | string[]; username: string; credential: string; tlsCertPolicy: RTCTlsCertPolicy; hostname: string; tlsAlpnProtocols: NSArray<string> | string[]; tlsEllipticCurves: NSArray<string> | string[]; });

	initWithURLStrings(urlStrings: NSArray<string> | string[]): this;

	initWithURLStringsUsernameCredential(urlStrings: NSArray<string> | string[], username: string, credential: string): this;

	initWithURLStringsUsernameCredentialTlsCertPolicy(urlStrings: NSArray<string> | string[], username: string, credential: string, tlsCertPolicy: RTCTlsCertPolicy): this;

	initWithURLStringsUsernameCredentialTlsCertPolicyHostname(urlStrings: NSArray<string> | string[], username: string, credential: string, tlsCertPolicy: RTCTlsCertPolicy, hostname: string): this;

	initWithURLStringsUsernameCredentialTlsCertPolicyHostnameTlsAlpnProtocols(urlStrings: NSArray<string> | string[], username: string, credential: string, tlsCertPolicy: RTCTlsCertPolicy, hostname: string, tlsAlpnProtocols: NSArray<string> | string[]): this;

	initWithURLStringsUsernameCredentialTlsCertPolicyHostnameTlsAlpnProtocolsTlsEllipticCurves(urlStrings: NSArray<string> | string[], username: string, credential: string, tlsCertPolicy: RTCTlsCertPolicy, hostname: string, tlsAlpnProtocols: NSArray<string> | string[], tlsEllipticCurves: NSArray<string> | string[]): this;
}

declare const enum RTCIceTransportPolicy {

	None = 0,

	Relay = 1,

	NoHost = 2,

	All = 3
}

declare function RTCInitFieldTrialDictionary(fieldTrials: NSDictionary<string, string>): void;

declare function RTCInitializeSSL(): boolean;

declare class RTCIntervalRange extends NSObject {

	static alloc(): RTCIntervalRange; // inherited from NSObject

	static new(): RTCIntervalRange; // inherited from NSObject

	readonly max: number;

	readonly min: number;

	constructor(o: { min: number; max: number; });

	initWithMinMax(min: number, max: number): this;
}

declare class RTCLegacyStatsReport extends NSObject {

	static alloc(): RTCLegacyStatsReport; // inherited from NSObject

	static new(): RTCLegacyStatsReport; // inherited from NSObject

	readonly reportId: string;

	readonly timestamp: number;

	readonly type: string;

	readonly values: NSDictionary<string, string>;
}

declare function RTCLogEx(severity: RTCLoggingSeverity, log_string: string): void;

declare const enum RTCLoggingSeverity {

	Verbose = 0,

	Info = 1,

	Warning = 2,

	Error = 3,

	None = 4
}

declare class RTCMTLVideoView extends UIView implements RTCVideoRenderer {

	static alloc(): RTCMTLVideoView; // inherited from NSObject

	static appearance(): RTCMTLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RTCMTLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RTCMTLVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCMTLVideoView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RTCMTLVideoView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RTCMTLVideoView; // inherited from UIAppearance

	static new(): RTCMTLVideoView; // inherited from NSObject

	delegate: RTCVideoViewDelegate;

	enabled: boolean;

	rotationOverride: NSValue;

	videoContentMode: UIViewContentMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderFrame(frame: RTCVideoFrame): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setSize(size: CGSize): void;
}

declare class RTCMediaConstraints extends NSObject {

	static alloc(): RTCMediaConstraints; // inherited from NSObject

	static new(): RTCMediaConstraints; // inherited from NSObject

	constructor(o: { mandatoryConstraints: NSDictionary<string, string>; optionalConstraints: NSDictionary<string, string>; });

	initWithMandatoryConstraintsOptionalConstraints(mandatory: NSDictionary<string, string>, optional: NSDictionary<string, string>): this;
}

declare class RTCMediaSource extends NSObject {

	static alloc(): RTCMediaSource; // inherited from NSObject

	static new(): RTCMediaSource; // inherited from NSObject

	readonly state: RTCSourceState;
}

declare class RTCMediaStream extends NSObject {

	static alloc(): RTCMediaStream; // inherited from NSObject

	static new(): RTCMediaStream; // inherited from NSObject

	readonly audioTracks: NSArray<RTCAudioTrack>;

	readonly streamId: string;

	readonly videoTracks: NSArray<RTCVideoTrack>;

	addAudioTrack(audioTrack: RTCAudioTrack): void;

	addVideoTrack(videoTrack: RTCVideoTrack): void;

	removeAudioTrack(audioTrack: RTCAudioTrack): void;

	removeVideoTrack(videoTrack: RTCVideoTrack): void;
}

declare class RTCMediaStreamTrack extends NSObject {

	static alloc(): RTCMediaStreamTrack; // inherited from NSObject

	static new(): RTCMediaStreamTrack; // inherited from NSObject

	isEnabled: boolean;

	readonly kind: string;

	readonly readyState: RTCMediaStreamTrackState;

	readonly trackId: string;
}

declare const enum RTCMediaStreamTrackState {

	Live = 0,

	Ended = 1
}

declare class RTCMetricsSampleInfo extends NSObject {

	static alloc(): RTCMetricsSampleInfo; // inherited from NSObject

	static new(): RTCMetricsSampleInfo; // inherited from NSObject

	readonly bucketCount: number;

	readonly max: number;

	readonly min: number;

	readonly name: string;

	readonly samples: NSDictionary<number, number>;
}

declare class RTCMutableI420Buffer extends RTCI420Buffer implements RTCMutableI420BufferProtocol {

	static alloc(): RTCMutableI420Buffer; // inherited from NSObject

	static new(): RTCMutableI420Buffer; // inherited from NSObject

	readonly chromaHeight: number; // inherited from RTCYUVPlanarBuffer

	readonly chromaWidth: number; // inherited from RTCYUVPlanarBuffer

	readonly dataU: string; // inherited from RTCYUVPlanarBuffer

	readonly dataV: string; // inherited from RTCYUVPlanarBuffer

	readonly dataY: string; // inherited from RTCYUVPlanarBuffer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly height: number; // inherited from RTCVideoFrameBuffer

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mutableDataU: string; // inherited from RTCMutableYUVPlanarBuffer

	readonly mutableDataV: string; // inherited from RTCMutableYUVPlanarBuffer

	readonly mutableDataY: string; // inherited from RTCMutableYUVPlanarBuffer

	readonly strideU: number; // inherited from RTCYUVPlanarBuffer

	readonly strideV: number; // inherited from RTCYUVPlanarBuffer

	readonly strideY: number; // inherited from RTCYUVPlanarBuffer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly width: number; // inherited from RTCVideoFrameBuffer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { width: number; height: number; }); // inherited from RTCYUVPlanarBuffer

	constructor(o: { width: number; height: number; dataY: string | interop.Pointer | interop.Reference<any>; dataU: string | interop.Pointer | interop.Reference<any>; dataV: string | interop.Pointer | interop.Reference<any>; }); // inherited from RTCYUVPlanarBuffer

	constructor(o: { width: number; height: number; strideY: number; strideU: number; strideV: number; }); // inherited from RTCYUVPlanarBuffer

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithWidthHeight(width: number, height: number): this;

	initWithWidthHeightDataYDataUDataV(width: number, height: number, dataY: string | interop.Pointer | interop.Reference<any>, dataU: string | interop.Pointer | interop.Reference<any>, dataV: string | interop.Pointer | interop.Reference<any>): this;

	initWithWidthHeightStrideYStrideUStrideV(width: number, height: number, strideY: number, strideU: number, strideV: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toI420(): RTCI420BufferProtocol;
}

interface RTCMutableI420BufferProtocol extends RTCI420BufferProtocol, RTCMutableYUVPlanarBuffer {
}
declare var RTCMutableI420BufferProtocol: {

	prototype: RTCMutableI420BufferProtocol;
};

interface RTCMutableYUVPlanarBuffer extends RTCYUVPlanarBuffer {

	mutableDataU: string;

	mutableDataV: string;

	mutableDataY: string;
}
declare var RTCMutableYUVPlanarBuffer: {

	prototype: RTCMutableYUVPlanarBuffer;
};

declare class RTCPeerConnection extends NSObject {

	static alloc(): RTCPeerConnection; // inherited from NSObject

	static new(): RTCPeerConnection; // inherited from NSObject

	readonly configuration: RTCConfiguration;

	readonly connectionState: RTCPeerConnectionState;

	delegate: RTCPeerConnectionDelegate;

	readonly iceConnectionState: RTCIceConnectionState;

	readonly iceGatheringState: RTCIceGatheringState;

	readonly localDescription: RTCSessionDescription;

	readonly localStreams: NSArray<RTCMediaStream>;

	readonly receivers: NSArray<RTCRtpReceiver>;

	readonly remoteDescription: RTCSessionDescription;

	readonly senders: NSArray<RTCRtpSender>;

	readonly signalingState: RTCSignalingState;

	readonly transceivers: NSArray<RTCRtpTransceiver>;

	addIceCandidate(candidate: RTCIceCandidate): void;

	addStream(stream: RTCMediaStream): void;

	addTrackStreamIds(track: RTCMediaStreamTrack, streamIds: NSArray<string> | string[]): RTCRtpSender;

	addTransceiverOfType(mediaType: RTCRtpMediaType): RTCRtpTransceiver;

	addTransceiverOfTypeInit(mediaType: RTCRtpMediaType, init: RTCRtpTransceiverInit): RTCRtpTransceiver;

	addTransceiverWithTrack(track: RTCMediaStreamTrack): RTCRtpTransceiver;

	addTransceiverWithTrackInit(track: RTCMediaStreamTrack, init: RTCRtpTransceiverInit): RTCRtpTransceiver;

	answerForConstraintsCompletionHandler(constraints: RTCMediaConstraints, completionHandler: (p1: RTCSessionDescription, p2: NSError) => void): void;

	close(): void;

	dataChannelForLabelConfiguration(label: string, configuration: RTCDataChannelConfiguration): RTCDataChannel;

	offerForConstraintsCompletionHandler(constraints: RTCMediaConstraints, completionHandler: (p1: RTCSessionDescription, p2: NSError) => void): void;

	removeIceCandidates(candidates: NSArray<RTCIceCandidate> | RTCIceCandidate[]): void;

	removeStream(stream: RTCMediaStream): void;

	removeTrack(sender: RTCRtpSender): boolean;

	senderWithKindStreamId(kind: string, streamId: string): RTCRtpSender;

	setBweMinBitrateBpsCurrentBitrateBpsMaxBitrateBps(minBitrateBps: number, currentBitrateBps: number, maxBitrateBps: number): boolean;

	setConfiguration(configuration: RTCConfiguration): boolean;

	setLocalDescriptionCompletionHandler(sdp: RTCSessionDescription, completionHandler: (p1: NSError) => void): void;

	setRemoteDescriptionCompletionHandler(sdp: RTCSessionDescription, completionHandler: (p1: NSError) => void): void;

	startRtcEventLogWithFilePathMaxSizeInBytes(filePath: string, maxSizeInBytes: number): boolean;

	statsForTrackStatsOutputLevelCompletionHandler(mediaStreamTrack: RTCMediaStreamTrack, statsOutputLevel: RTCStatsOutputLevel, completionHandler: (p1: NSArray<RTCLegacyStatsReport>) => void): void;

	stopRtcEventLog(): void;
}

interface RTCPeerConnectionDelegate extends NSObjectProtocol {

	peerConnectionDidAddReceiverStreams?(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver, mediaStreams: NSArray<RTCMediaStream> | RTCMediaStream[]): void;

	peerConnectionDidAddStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionDidChangeConnectionState?(peerConnection: RTCPeerConnection, newState: RTCPeerConnectionState): void;

	peerConnectionDidChangeIceConnectionState(peerConnection: RTCPeerConnection, newState: RTCIceConnectionState): void;

	peerConnectionDidChangeIceGatheringState(peerConnection: RTCPeerConnection, newState: RTCIceGatheringState): void;

	peerConnectionDidChangeLocalCandidateRemoteCandidateLastReceivedMsChangeReason?(peerConnection: RTCPeerConnection, local: RTCIceCandidate, remote: RTCIceCandidate, lastDataReceivedMs: number, reason: string): void;

	peerConnectionDidChangeSignalingState(peerConnection: RTCPeerConnection, stateChanged: RTCSignalingState): void;

	peerConnectionDidChangeStandardizedIceConnectionState?(peerConnection: RTCPeerConnection, newState: RTCIceConnectionState): void;

	peerConnectionDidGenerateIceCandidate(peerConnection: RTCPeerConnection, candidate: RTCIceCandidate): void;

	peerConnectionDidOpenDataChannel(peerConnection: RTCPeerConnection, dataChannel: RTCDataChannel): void;

	peerConnectionDidRemoveIceCandidates(peerConnection: RTCPeerConnection, candidates: NSArray<RTCIceCandidate> | RTCIceCandidate[]): void;

	peerConnectionDidRemoveReceiver?(peerConnection: RTCPeerConnection, rtpReceiver: RTCRtpReceiver): void;

	peerConnectionDidRemoveStream(peerConnection: RTCPeerConnection, stream: RTCMediaStream): void;

	peerConnectionDidStartReceivingOnTransceiver?(peerConnection: RTCPeerConnection, transceiver: RTCRtpTransceiver): void;

	peerConnectionShouldNegotiate(peerConnection: RTCPeerConnection): void;
}
declare var RTCPeerConnectionDelegate: {

	prototype: RTCPeerConnectionDelegate;
};

declare class RTCPeerConnectionFactory extends NSObject {

	static alloc(): RTCPeerConnectionFactory; // inherited from NSObject

	static new(): RTCPeerConnectionFactory; // inherited from NSObject

	constructor(o: { encoderFactory: RTCVideoEncoderFactory; decoderFactory: RTCVideoDecoderFactory; });

	audioSourceWithConstraints(constraints: RTCMediaConstraints): RTCAudioSource;

	audioTrackWithSourceTrackId(source: RTCAudioSource, trackId: string): RTCAudioTrack;

	audioTrackWithTrackId(trackId: string): RTCAudioTrack;

	initWithEncoderFactoryDecoderFactory(encoderFactory: RTCVideoEncoderFactory, decoderFactory: RTCVideoDecoderFactory): this;

	mediaStreamWithStreamId(streamId: string): RTCMediaStream;

	peerConnectionWithConfigurationConstraintsDelegate(configuration: RTCConfiguration, constraints: RTCMediaConstraints, delegate: RTCPeerConnectionDelegate): RTCPeerConnection;

	setOptions(options: RTCPeerConnectionFactoryOptions): void;

	startAecDumpWithFilePathMaxSizeInBytes(filePath: string, maxSizeInBytes: number): boolean;

	stopAecDump(): void;

	videoSource(): RTCVideoSource;

	videoTrackWithSourceTrackId(source: RTCVideoSource, trackId: string): RTCVideoTrack;
}

declare class RTCPeerConnectionFactoryOptions extends NSObject {

	static alloc(): RTCPeerConnectionFactoryOptions; // inherited from NSObject

	static new(): RTCPeerConnectionFactoryOptions; // inherited from NSObject

	disableEncryption: boolean;

	disableNetworkMonitor: boolean;

	ignoreCellularNetworkAdapter: boolean;

	ignoreEthernetNetworkAdapter: boolean;

	ignoreLoopbackNetworkAdapter: boolean;

	ignoreVPNNetworkAdapter: boolean;

	ignoreWiFiNetworkAdapter: boolean;
}

declare const enum RTCPeerConnectionState {

	New = 0,

	Connecting = 1,

	Connected = 2,

	Disconnected = 3,

	Failed = 4,

	Closed = 5
}

declare const enum RTCRtcpMuxPolicy {

	Negotiate = 0,

	Require = 1
}

declare class RTCRtcpParameters extends NSObject {

	static alloc(): RTCRtcpParameters; // inherited from NSObject

	static new(): RTCRtcpParameters; // inherited from NSObject

	readonly cname: string;

	isReducedSize: boolean;
}

declare class RTCRtpCodecParameters extends NSObject {

	static alloc(): RTCRtpCodecParameters; // inherited from NSObject

	static new(): RTCRtpCodecParameters; // inherited from NSObject

	readonly clockRate: number;

	readonly kind: string;

	readonly name: string;

	readonly numChannels: number;

	readonly parameters: NSDictionary<any, any>;

	payloadType: number;
}

declare class RTCRtpEncodingParameters extends NSObject {

	static alloc(): RTCRtpEncodingParameters; // inherited from NSObject

	static new(): RTCRtpEncodingParameters; // inherited from NSObject

	isActive: boolean;

	maxBitrateBps: number;

	maxFramerate: number;

	minBitrateBps: number;

	networkPriority: number;

	numTemporalLayers: number;

	rid: string;

	scaleResolutionDownBy: number;

	readonly ssrc: number;
}

declare class RTCRtpFragmentationHeader extends NSObject {

	static alloc(): RTCRtpFragmentationHeader; // inherited from NSObject

	static new(): RTCRtpFragmentationHeader; // inherited from NSObject

	fragmentationLength: NSArray<number>;

	fragmentationOffset: NSArray<number>;

	fragmentationPlType: NSArray<number>;

	fragmentationTimeDiff: NSArray<number>;
}

declare class RTCRtpHeaderExtension extends NSObject {

	static alloc(): RTCRtpHeaderExtension; // inherited from NSObject

	static new(): RTCRtpHeaderExtension; // inherited from NSObject

	readonly encrypted: boolean;

	readonly id: number;

	readonly uri: string;
}

declare const enum RTCRtpMediaType {

	Audio = 0,

	Video = 1,

	Data = 2
}

declare class RTCRtpParameters extends NSObject {

	static alloc(): RTCRtpParameters; // inherited from NSObject

	static new(): RTCRtpParameters; // inherited from NSObject

	codecs: NSArray<RTCRtpCodecParameters>;

	encodings: NSArray<RTCRtpEncodingParameters>;

	readonly headerExtensions: NSArray<RTCRtpHeaderExtension>;

	readonly rtcp: RTCRtcpParameters;

	transactionId: string;
}

declare class RTCRtpReceiver extends NSObject implements RTCRtpReceiverProtocol {

	static alloc(): RTCRtpReceiver; // inherited from NSObject

	static new(): RTCRtpReceiver; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: RTCRtpReceiverDelegate; // inherited from RTCRtpReceiverProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly parameters: RTCRtpParameters; // inherited from RTCRtpReceiverProtocol

	readonly receiverId: string; // inherited from RTCRtpReceiverProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly track: RTCMediaStreamTrack; // inherited from RTCRtpReceiverProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface RTCRtpReceiverDelegate extends NSObjectProtocol {

	rtpReceiverDidReceiveFirstPacketForMediaType(rtpReceiver: RTCRtpReceiver, mediaType: RTCRtpMediaType): void;
}
declare var RTCRtpReceiverDelegate: {

	prototype: RTCRtpReceiverDelegate;
};

interface RTCRtpReceiverProtocol extends NSObjectProtocol {

	delegate: RTCRtpReceiverDelegate;

	parameters: RTCRtpParameters;

	receiverId: string;

	track: RTCMediaStreamTrack;
}
declare var RTCRtpReceiverProtocol: {

	prototype: RTCRtpReceiverProtocol;
};

declare class RTCRtpSender extends NSObject implements RTCRtpSenderProtocol {

	static alloc(): RTCRtpSender; // inherited from NSObject

	static new(): RTCRtpSender; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly dtmfSender: RTCDtmfSender; // inherited from RTCRtpSenderProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	parameters: RTCRtpParameters; // inherited from RTCRtpSenderProtocol

	readonly senderId: string; // inherited from RTCRtpSenderProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	track: RTCMediaStreamTrack; // inherited from RTCRtpSenderProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface RTCRtpSenderProtocol extends NSObjectProtocol {

	dtmfSender: RTCDtmfSender;

	parameters: RTCRtpParameters;

	senderId: string;

	track: RTCMediaStreamTrack;
}
declare var RTCRtpSenderProtocol: {

	prototype: RTCRtpSenderProtocol;
};

declare class RTCRtpTransceiver extends NSObject implements RTCRtpTransceiverProtocol {

	static alloc(): RTCRtpTransceiver; // inherited from NSObject

	static new(): RTCRtpTransceiver; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	direction: RTCRtpTransceiverDirection; // inherited from RTCRtpTransceiverProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isStopped: boolean; // inherited from RTCRtpTransceiverProtocol

	readonly mediaType: RTCRtpMediaType; // inherited from RTCRtpTransceiverProtocol

	readonly mid: string; // inherited from RTCRtpTransceiverProtocol

	readonly receiver: RTCRtpReceiver; // inherited from RTCRtpTransceiverProtocol

	readonly sender: RTCRtpSender; // inherited from RTCRtpTransceiverProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentDirection(currentDirectionOut: interop.Pointer | interop.Reference<RTCRtpTransceiverDirection>): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stop(): void;
}

declare const enum RTCRtpTransceiverDirection {

	SendRecv = 0,

	SendOnly = 1,

	RecvOnly = 2,

	Inactive = 3
}

declare class RTCRtpTransceiverInit extends NSObject {

	static alloc(): RTCRtpTransceiverInit; // inherited from NSObject

	static new(): RTCRtpTransceiverInit; // inherited from NSObject

	direction: RTCRtpTransceiverDirection;

	sendEncodings: NSArray<RTCRtpEncodingParameters>;

	streamIds: NSArray<string>;
}

interface RTCRtpTransceiverProtocol extends NSObjectProtocol {

	direction: RTCRtpTransceiverDirection;

	isStopped: boolean;

	mediaType: RTCRtpMediaType;

	mid: string;

	receiver: RTCRtpReceiver;

	sender: RTCRtpSender;

	currentDirection(currentDirectionOut: interop.Pointer | interop.Reference<RTCRtpTransceiverDirection>): boolean;

	stop(): void;
}
declare var RTCRtpTransceiverProtocol: {

	prototype: RTCRtpTransceiverProtocol;
};

declare const enum RTCSdpSemantics {

	PlanB = 0,

	UnifiedPlan = 1
}

declare const enum RTCSdpType {

	Offer = 0,

	PrAnswer = 1,

	Answer = 2
}

declare class RTCSessionDescription extends NSObject {

	static alloc(): RTCSessionDescription; // inherited from NSObject

	static new(): RTCSessionDescription; // inherited from NSObject

	static stringForType(type: RTCSdpType): string;

	static typeForString(string: string): RTCSdpType;

	readonly sdp: string;

	readonly type: RTCSdpType;

	constructor(o: { type: RTCSdpType; sdp: string; });

	initWithTypeSdp(type: RTCSdpType, sdp: string): this;
}

declare function RTCSetMinDebugLogLevel(severity: RTCLoggingSeverity): void;

declare function RTCSetupInternalTracer(): void;

declare function RTCShutdownInternalTracer(): void;

declare const enum RTCSignalingState {

	Stable = 0,

	HaveLocalOffer = 1,

	HaveLocalPrAnswer = 2,

	HaveRemoteOffer = 3,

	HaveRemotePrAnswer = 4,

	Closed = 5
}

declare const enum RTCSourceState {

	Initializing = 0,

	Live = 1,

	Ended = 2,

	Muted = 3
}

declare function RTCStartInternalCapture(filePath: string): boolean;

declare const enum RTCStatsOutputLevel {

	Standard = 0,

	Debug = 1
}

declare function RTCStopInternalCapture(): void;

declare const enum RTCTcpCandidatePolicy {

	Enabled = 0,

	Disabled = 1
}

declare const enum RTCTlsCertPolicy {

	Secure = 0,

	InsecureNoCheck = 1
}

declare class RTCVideoCapturer extends NSObject {

	static alloc(): RTCVideoCapturer; // inherited from NSObject

	static new(): RTCVideoCapturer; // inherited from NSObject

	delegate: RTCVideoCapturerDelegate;

	constructor(o: { delegate: RTCVideoCapturerDelegate; });

	initWithDelegate(delegate: RTCVideoCapturerDelegate): this;
}

interface RTCVideoCapturerDelegate extends NSObjectProtocol {

	capturerDidCaptureVideoFrame(capturer: RTCVideoCapturer, frame: RTCVideoFrame): void;
}
declare var RTCVideoCapturerDelegate: {

	prototype: RTCVideoCapturerDelegate;
};

declare class RTCVideoCodecInfo extends NSObject implements NSCoding {

	static alloc(): RTCVideoCodecInfo; // inherited from NSObject

	static new(): RTCVideoCodecInfo; // inherited from NSObject

	readonly name: string;

	readonly parameters: NSDictionary<string, string>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; });

	constructor(o: { name: string; parameters: NSDictionary<string, string>; });

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithName(name: string): this;

	initWithNameParameters(name: string, parameters: NSDictionary<string, string>): this;

	isEqualToCodecInfo(info: RTCVideoCodecInfo): boolean;
}

declare const enum RTCVideoCodecMode {

	RealtimeVideo = 0,

	Screensharing = 1
}

declare const enum RTCVideoContentType {

	Unspecified = 0,

	Screenshare = 1
}

interface RTCVideoDecoder extends NSObjectProtocol {

	decodeMissingFramesCodecSpecificInfoRenderTimeMs(encodedImage: RTCEncodedImage, missingFrames: boolean, info: RTCCodecSpecificInfo, renderTimeMs: number): number;

	implementationName(): string;

	releaseDecoder(): number;

	setCallback(callback: (p1: RTCVideoFrame) => void): void;

	startDecodeWithNumberOfCores(numberOfCores: number): number;
}
declare var RTCVideoDecoder: {

	prototype: RTCVideoDecoder;
};

interface RTCVideoDecoderFactory extends NSObjectProtocol {

	createDecoder(info: RTCVideoCodecInfo): RTCVideoDecoder;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}
declare var RTCVideoDecoderFactory: {

	prototype: RTCVideoDecoderFactory;
};

declare class RTCVideoDecoderFactoryH264 extends NSObject implements RTCVideoDecoderFactory {

	static alloc(): RTCVideoDecoderFactoryH264; // inherited from NSObject

	static new(): RTCVideoDecoderFactoryH264; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDecoder(info: RTCVideoCodecInfo): RTCVideoDecoder;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}

declare class RTCVideoDecoderH264 extends NSObject implements RTCVideoDecoder {

	static alloc(): RTCVideoDecoderH264; // inherited from NSObject

	static new(): RTCVideoDecoderH264; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodeMissingFramesCodecSpecificInfoRenderTimeMs(encodedImage: RTCEncodedImage, missingFrames: boolean, info: RTCCodecSpecificInfo, renderTimeMs: number): number;

	implementationName(): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	releaseDecoder(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCallback(callback: (p1: RTCVideoFrame) => void): void;

	startDecodeWithNumberOfCores(numberOfCores: number): number;
}

declare class RTCVideoDecoderVP8 extends NSObject {

	static alloc(): RTCVideoDecoderVP8; // inherited from NSObject

	static new(): RTCVideoDecoderVP8; // inherited from NSObject

	static vp8Decoder(): RTCVideoDecoder;
}

declare class RTCVideoDecoderVP9 extends NSObject {

	static alloc(): RTCVideoDecoderVP9; // inherited from NSObject

	static new(): RTCVideoDecoderVP9; // inherited from NSObject

	static vp9Decoder(): RTCVideoDecoder;
}

interface RTCVideoEncoder extends NSObjectProtocol {

	encodeCodecSpecificInfoFrameTypes(frame: RTCVideoFrame, info: RTCCodecSpecificInfo, frameTypes: NSArray<number> | number[]): number;

	implementationName(): string;

	releaseEncoder(): number;

	scalingSettings(): RTCVideoEncoderQpThresholds;

	setBitrateFramerate(bitrateKbit: number, framerate: number): number;

	setCallback(callback: (p1: RTCEncodedImage, p2: RTCCodecSpecificInfo, p3: RTCRtpFragmentationHeader) => boolean): void;

	startEncodeWithSettingsNumberOfCores(settings: RTCVideoEncoderSettings, numberOfCores: number): number;
}
declare var RTCVideoEncoder: {

	prototype: RTCVideoEncoder;
};

interface RTCVideoEncoderFactory extends NSObjectProtocol {

	createEncoder(info: RTCVideoCodecInfo): RTCVideoEncoder;

	implementations?(): NSArray<RTCVideoCodecInfo>;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}
declare var RTCVideoEncoderFactory: {

	prototype: RTCVideoEncoderFactory;
};

declare class RTCVideoEncoderFactoryH264 extends NSObject implements RTCVideoEncoderFactory {

	static alloc(): RTCVideoEncoderFactoryH264; // inherited from NSObject

	static new(): RTCVideoEncoderFactoryH264; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createEncoder(info: RTCVideoCodecInfo): RTCVideoEncoder;

	implementations(): NSArray<RTCVideoCodecInfo>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedCodecs(): NSArray<RTCVideoCodecInfo>;
}

declare class RTCVideoEncoderH264 extends NSObject implements RTCVideoEncoder {

	static alloc(): RTCVideoEncoderH264; // inherited from NSObject

	static new(): RTCVideoEncoderH264; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { codecInfo: RTCVideoCodecInfo; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeCodecSpecificInfoFrameTypes(frame: RTCVideoFrame, info: RTCCodecSpecificInfo, frameTypes: NSArray<number> | number[]): number;

	implementationName(): string;

	initWithCodecInfo(codecInfo: RTCVideoCodecInfo): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	releaseEncoder(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scalingSettings(): RTCVideoEncoderQpThresholds;

	self(): this;

	setBitrateFramerate(bitrateKbit: number, framerate: number): number;

	setCallback(callback: (p1: RTCEncodedImage, p2: RTCCodecSpecificInfo, p3: RTCRtpFragmentationHeader) => boolean): void;

	startEncodeWithSettingsNumberOfCores(settings: RTCVideoEncoderSettings, numberOfCores: number): number;
}

declare class RTCVideoEncoderQpThresholds extends NSObject {

	static alloc(): RTCVideoEncoderQpThresholds; // inherited from NSObject

	static new(): RTCVideoEncoderQpThresholds; // inherited from NSObject

	readonly high: number;

	readonly low: number;

	constructor(o: { thresholdsLow: number; high: number; });

	initWithThresholdsLowHigh(low: number, high: number): this;
}

declare class RTCVideoEncoderSettings extends NSObject {

	static alloc(): RTCVideoEncoderSettings; // inherited from NSObject

	static new(): RTCVideoEncoderSettings; // inherited from NSObject

	height: number;

	maxBitrate: number;

	maxFramerate: number;

	minBitrate: number;

	mode: RTCVideoCodecMode;

	name: string;

	qpMax: number;

	startBitrate: number;

	width: number;
}

declare class RTCVideoEncoderVP8 extends NSObject {

	static alloc(): RTCVideoEncoderVP8; // inherited from NSObject

	static new(): RTCVideoEncoderVP8; // inherited from NSObject

	static vp8Encoder(): RTCVideoEncoder;
}

declare class RTCVideoEncoderVP9 extends NSObject {

	static alloc(): RTCVideoEncoderVP9; // inherited from NSObject

	static new(): RTCVideoEncoderVP9; // inherited from NSObject

	static vp9Encoder(): RTCVideoEncoder;
}

declare class RTCVideoFrame extends NSObject {

	static alloc(): RTCVideoFrame; // inherited from NSObject

	static new(): RTCVideoFrame; // inherited from NSObject

	readonly buffer: RTCVideoFrameBuffer;

	readonly height: number;

	readonly rotation: RTCVideoRotation;

	timeStamp: number;

	readonly timeStampNs: number;

	readonly width: number;

	constructor(o: { buffer: RTCVideoFrameBuffer; rotation: RTCVideoRotation; timeStampNs: number; });

	constructor(o: { pixelBuffer: any; rotation: RTCVideoRotation; timeStampNs: number; });

	constructor(o: { pixelBuffer: any; scaledWidth: number; scaledHeight: number; cropWidth: number; cropHeight: number; cropX: number; cropY: number; rotation: RTCVideoRotation; timeStampNs: number; });

	initWithBufferRotationTimeStampNs(frameBuffer: RTCVideoFrameBuffer, rotation: RTCVideoRotation, timeStampNs: number): this;

	initWithPixelBufferRotationTimeStampNs(pixelBuffer: any, rotation: RTCVideoRotation, timeStampNs: number): this;

	initWithPixelBufferScaledWidthScaledHeightCropWidthCropHeightCropXCropYRotationTimeStampNs(pixelBuffer: any, scaledWidth: number, scaledHeight: number, cropWidth: number, cropHeight: number, cropX: number, cropY: number, rotation: RTCVideoRotation, timeStampNs: number): this;

	newI420VideoFrame(): RTCVideoFrame;
}

interface RTCVideoFrameBuffer extends NSObjectProtocol {

	height: number;

	width: number;

	toI420(): RTCI420BufferProtocol;
}
declare var RTCVideoFrameBuffer: {

	prototype: RTCVideoFrameBuffer;
};

interface RTCVideoRenderer extends NSObjectProtocol {

	renderFrame(frame: RTCVideoFrame): void;

	setSize(size: CGSize): void;
}
declare var RTCVideoRenderer: {

	prototype: RTCVideoRenderer;
};

declare const enum RTCVideoRotation {

	Rotation_0 = 0,

	Rotation_90 = 90,

	Rotation_180 = 180,

	Rotation_270 = 270
}

declare class RTCVideoSource extends RTCMediaSource implements RTCVideoCapturerDelegate {

	static alloc(): RTCVideoSource; // inherited from NSObject

	static new(): RTCVideoSource; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	adaptOutputFormatToWidthHeightFps(width: number, height: number, fps: number): void;

	capturerDidCaptureVideoFrame(capturer: RTCVideoCapturer, frame: RTCVideoFrame): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class RTCVideoTrack extends RTCMediaStreamTrack {

	static alloc(): RTCVideoTrack; // inherited from NSObject

	static new(): RTCVideoTrack; // inherited from NSObject

	readonly source: RTCVideoSource;

	addRenderer(renderer: RTCVideoRenderer): void;

	removeRenderer(renderer: RTCVideoRenderer): void;
}

interface RTCVideoViewDelegate {

	videoViewDidChangeVideoSize(videoView: RTCVideoRenderer, size: CGSize): void;
}
declare var RTCVideoViewDelegate: {

	prototype: RTCVideoViewDelegate;
};

interface RTCVideoViewShading extends NSObjectProtocol {

	applyShadingForFrameWithWidthHeightRotationYPlaneUPlaneVPlane(width: number, height: number, rotation: RTCVideoRotation, yPlane: number, uPlane: number, vPlane: number): void;

	applyShadingForFrameWithWidthHeightRotationYPlaneUvPlane(width: number, height: number, rotation: RTCVideoRotation, yPlane: number, uvPlane: number): void;
}
declare var RTCVideoViewShading: {

	prototype: RTCVideoViewShading;
};

interface RTCYUVPlanarBuffer extends RTCVideoFrameBuffer {

	chromaHeight: number;

	chromaWidth: number;

	dataU: string;

	dataV: string;

	dataY: string;

	strideU: number;

	strideV: number;

	strideY: number;

	initWithWidthHeight?(width: number, height: number): RTCYUVPlanarBuffer;

	initWithWidthHeightDataYDataUDataV?(width: number, height: number, dataY: string | interop.Pointer | interop.Reference<any>, dataU: string | interop.Pointer | interop.Reference<any>, dataV: string | interop.Pointer | interop.Reference<any>): RTCYUVPlanarBuffer;

	initWithWidthHeightStrideYStrideUStrideV?(width: number, height: number, strideY: number, strideU: number, strideV: number): RTCYUVPlanarBuffer;
}
declare var RTCYUVPlanarBuffer: {

	prototype: RTCYUVPlanarBuffer;
};

declare var kRTCAudioSessionErrorConfiguration: number;

declare var kRTCAudioSessionErrorDomain: string;

declare var kRTCAudioSessionErrorLockRequired: number;

declare var kRTCAudioSessionHighPerformanceIOBufferDuration: number;

declare var kRTCAudioSessionHighPerformanceSampleRate: number;

declare var kRTCAudioSessionLowComplexityIOBufferDuration: number;

declare var kRTCAudioSessionLowComplexitySampleRate: number;

declare var kRTCAudioSessionPreferredNumberOfChannels: number;

declare var kRTCComfortNoiseCodecName: string;

declare var kRTCDtmfCodecName: string;

declare var kRTCFieldTrialAudioForceABWENoTWCCKey: string;

declare var kRTCFieldTrialAudioForceNoTWCCKey: string;

declare var kRTCFieldTrialAudioSendSideBweKey: string;

declare var kRTCFieldTrialEnabledValue: string;

declare var kRTCFieldTrialFlexFec03AdvertisedKey: string;

declare var kRTCFieldTrialFlexFec03Key: string;

declare var kRTCFieldTrialH264HighProfileKey: string;

declare var kRTCFieldTrialMinimizeResamplingOnMobileKey: string;

declare var kRTCFieldTrialSendSideBweWithOverheadKey: string;

declare var kRTCFlexfecCodecName: string;

declare var kRTCG722CodecName: string;

declare var kRTCH264CodecName: string;

declare var kRTCIlbcCodecName: string;

declare var kRTCIsacCodecName: string;

declare var kRTCL16CodecName: string;

declare var kRTCLevel31ConstrainedBaseline: string;

declare var kRTCLevel31ConstrainedHigh: string;

declare var kRTCMaxSupportedH264ProfileLevelConstrainedBaseline: string;

declare var kRTCMaxSupportedH264ProfileLevelConstrainedHigh: string;

declare var kRTCMediaConstraintsAudioNetworkAdaptorConfig: string;

declare var kRTCMediaConstraintsIceRestart: string;

declare var kRTCMediaConstraintsOfferToReceiveAudio: string;

declare var kRTCMediaConstraintsOfferToReceiveVideo: string;

declare var kRTCMediaConstraintsValueFalse: string;

declare var kRTCMediaConstraintsValueTrue: string;

declare var kRTCMediaConstraintsVoiceActivityDetection: string;

declare var kRTCMediaStreamTrackKindAudio: string;

declare var kRTCMediaStreamTrackKindVideo: string;

declare var kRTCOpusCodecName: string;

declare var kRTCPcmaCodecName: string;

declare var kRTCPcmuCodecName: string;

declare var kRTCPeerConnectionErrorDomain: string;

declare var kRTCRedCodecName: string;

declare var kRTCRtxCodecName: string;

declare var kRTCSessionDescriptionErrorCode: number;

declare var kRTCUlpfecCodecName: string;

declare var kRTCVideoCodecH264Name: string;

declare var kRTCVideoCodecVp8Name: string;

declare var kRTCVideoCodecVp9Name: string;

declare var kRTCVp8CodecName: string;

declare var kRTCVp9CodecName: string;
