import { Common, WebRTCOptions, WebRTCState } from './webrtc.common';
import { View } from 'tns-core-modules/ui/core/view';
import { fromObject } from 'tns-core-modules/data/observable/observable';

enum ErrorDomain {
  videoPermissionDenied = 'Video permission denied',
  audioPermissionDenied = 'Audio permission denied'
}

export class WebRTC extends Common {
  private connection: any;
  private connectionFactory: RTCPeerConnectionFactory;
  private configuration: RTCConfiguration;
  private constraints: any;
  private _state: WebRTCState;
  private _delegate: WebRTCClientDelegate;
  constructor(
    options: WebRTCOptions = { enableAudio: true, enableVideo: true }
  ) {
    super();
    this._delegate = WebRTCClientDelegate.initWithOwner(new WeakRef(this));
    this.configuration = RTCConfiguration.alloc().init();
    this.connectionFactory = RTCPeerConnectionFactory.alloc().init();
    if (!options.iceServers) {
      this.configuration.iceServers = this.defaultServers.map(server => {
        return RTCIceServer.alloc().initWithURLStrings(<any>(
          this.defaultServers
        ));
      });
    } else {
      // TODO
    }
    this.constraints = RTCMediaConstraints.alloc().initWithMandatoryConstraintsOptionalConstraints(
      <any>{
        OfferToReceiveAudio: String(options.enableAudio),
        OfferToReceiveVideo: String(options.enableVideo)
      },
      null
    );
    this.connection = this.connectionFactory.peerConnectionWithConfigurationConstraintsDelegate(
      this.configuration,
      this.constraints,
      RTCPeerConnectionDelegateImpl.initWithOwner(new WeakRef(this))
    );
  }

  get state() {
    return this._state;
  }

  get delegate(): any {
    return this._delegate;
  }

  public static init(): void {
    RTCPeerConnectionFactory.initialize();
  }

  public connect(): void {
    if (!this.connection) return;
    this._state = WebRTCState.Connecting;
    const localStream = this.getLocalStream();
    this.connection.addStream(localStream);
    if (localStream.videoTracks && localStream.videoTracks.firstObject) {
      this.delegate.webRTCClientDidReceiveLocalVideoTrack(
        this,
        localStream.videoTracks.firstObject
      );
    }
  }

  public disconnect(): void {
    if (!this.connection) return;
    this.connection.close();
    this._state = WebRTCState.Disconnected;
    const localStream = this.getLocalStream();
    if (localStream.videoTracks && localStream.videoTracks.firstObject) {
      this.connection.removeStream(localStream);
      this.delegate.webRTCClientDidChangeState(this, WebRTCState.Disconnected);
    }
  }

  public getLocalStream(): any {
    const factory = this.connectionFactory;
    const localStream = factory.mediaStreamWithStreamId('localStream');
    if (!AVCaptureState.isVideoDisabled) {
      const videoSource: RTCVideoSource = factory.videoSource();
      let capturer = RTCCameraVideoCapturer.alloc().initWithDelegate(
        videoSource
      );
      this.delegate.webRTCClientDidCreateLocalCapturer(this, capturer);
      const videoTrack = factory.videoTrackWithSourceTrackId(
        videoSource,
        'localVideoTrackId'
      );
      videoTrack.isEnabled = true;
      localStream.addVideoTrack(videoTrack);
    } else {
      const error = NSError.alloc().initWithDomainCodeUserInfo(
        ErrorDomain.videoPermissionDenied,
        0,
        null
      );
      this.delegate.webRTCClientDidReceiveError(this, error);
    }

    if (!AVCaptureState.isAudioDisabled) {
      const audioTrack = factory.audioTrackWithTrackId('localAudioTrackId');
      localStream.addAudioTrack(audioTrack);
    } else {
      const error = NSError.alloc().initWithDomainCodeUserInfo(
        ErrorDomain.audioPermissionDenied,
        0,
        null
      );
      this.delegate.webRTCClientDidReceiveError(this, error);
    }
    return localStream;
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

class RTCPeerConnectionDelegateImpl extends NSObject
  implements RTCPeerConnectionDelegate {
  peerConnectionDidAddReceiverStreams?(
    peerConnection: RTCPeerConnection,
    rtpReceiver: RTCRtpReceiver,
    mediaStreams: NSArray<RTCMediaStream>
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidAddStream(
    peerConnection: RTCPeerConnection,
    stream: RTCMediaStream
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      if (stream.videoTracks.count > 0) {
        owner.delegate.webRTCClientDidReceiveRemoteVideoTrack(
          owner,
          stream.videoTracks[0]
        );
      }
    }
  }
  peerConnectionDidChangeIceConnectionState(
    peerConnection: RTCPeerConnection,
    newState: RTCIceConnectionState
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.delegate.webRTCClientDidChangeConnectionState(owner, newState);
    }
  }
  peerConnectionDidChangeIceGatheringState(
    peerConnection: RTCPeerConnection,
    newState: RTCIceGatheringState
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidChangeSignalingState(
    peerConnection: RTCPeerConnection,
    stateChanged: RTCSignalingState
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidGenerateIceCandidate(
    peerConnection: RTCPeerConnection,
    candidate: RTCIceCandidate
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.delegate.webRTCClientDidGenerateIceCandidate(owner, candidate);
    }
  }
  peerConnectionDidOpenDataChannel(
    peerConnection: RTCPeerConnection,
    dataChannel: RTCDataChannel
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidRemoveIceCandidates(
    peerConnection: RTCPeerConnection,
    candidates: NSArray<RTCIceCandidate>
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidRemoveStream(
    peerConnection: RTCPeerConnection,
    stream: RTCMediaStream
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionDidStartReceivingOnTransceiver?(
    peerConnection: RTCPeerConnection,
    transceiver: RTCRtpTransceiver
  ): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
    }
  }
  peerConnectionShouldNegotiate(peerConnection: RTCPeerConnection): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
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
  webRTCClientStartCallWithSdp(client: WebRTC, sdp: string) {}
  webRTCClientDidReceiveLocalVideoTrack(
    client: WebRTC,
    localVideoTrack: RTCVideoTrack
  ) {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.notify({
        eventName: 'webRTCClientDidReceiveLocalVideoTrack',
        object: fromObject({
          client: client,
          localVideoTrack: localVideoTrack
        })
      });
    }
  }
  webRTCClientDidReceiveRemoteVideoTrack(
    client: WebRTC,
    remoteVideoTrack: RTCVideoTrack
  ) {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.notify({
        eventName: 'webRTCClientDidReceiveRemoteVideoTrack',
        object: fromObject({
          client: client,
          remoteVideoTrack: remoteVideoTrack
        })
      });
    }
  }
  webRTCClientDidReceiveError(client: WebRTC, error: NSError) {}
  webRTCClientDidChangeConnectionState(
    client: WebRTC,
    connectionState: RTCIceConnectionState
  ) {}
  webRTCClientDidChangeState(client: WebRTC, state: WebRTCState) {}
  webRTCClientDidGenerateIceCandidate(
    client: WebRTC,
    iceCandidate: RTCIceCandidate
  ) {}
  webRTCClientDidCreateLocalCapturer(
    client: WebRTC,
    capturer: RTCCameraVideoCapturer
  ) {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.notify({
        eventName: 'webRTCClientDidCreateLocalCapturer',
        object: fromObject({
          client: client,
          capturer: capturer
        })
      });
    }
  }
}
export class WebRTCLocalView extends View {
  private _capturer: WebRTCCapturer;
  private _localVideoTrack: any;
  cameraPosition = 'front';
  constructor() {
    super();
    this.nativeView = RTCEAGLVideoView.alloc().init();
  }

  set capturer(capturer) {
    this._capturer = new WebRTCCapturer(capturer);
  }

  set videoTrack(track) {
    this._localVideoTrack = track;
    console.log(track);
    track.addRenderer(this.nativeView);
  }

  get capturer() {
    if (!this._capturer) return null;
    return this._capturer.getCapturer();
  }

  start() {
    if (!this._capturer) return;
    this._capturer.start();
  }
  stop() {
    if (!this._capturer) return;
    this._capturer.stop();
  }
  toggleCamera() {
    if (!this._capturer) return;
    this._capturer.toggleCamera();
  }
}

class WebRTCCapturer {
  private capturer: RTCCameraVideoCapturer;
  private cameraPosition = 'front';
  constructor(capturer) {
    this.capturer = capturer;
  }

  getCapturer(): any {
    return this.capturer;
  }

  start() {
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
  }

  private selectFpsForFormat(format: AVCaptureDeviceFormat): number {
    let maxFramerate = 0;
    for (let i = 0; i < format.videoSupportedFrameRateRanges.count; i++) {
      const fpsRange = format.videoSupportedFrameRateRanges.objectAtIndex(i);
      maxFramerate = fmax(maxFramerate, fpsRange.maxFrameRate);
    }
    return maxFramerate;
  }

  private selectFormatForDevice(
    device: AVCaptureDevice
  ): AVCaptureDeviceFormat {
    let supportedFormats = RTCCameraVideoCapturer.supportedFormatsForDevice(
      device
    );
    let targetHeight = '640';
    let targetWidth = '480';
    let selectedFormat: AVCaptureDeviceFormat = null;
    let currentDiff = Number.MAX_VALUE;

    for (let i = 0; i < supportedFormats.count; i++) {
      const format = supportedFormats.objectAtIndex(i);
      let dimension: CMVideoDimensions = CMVideoFormatDescriptionGetDimensions(
        format
      );
      let diff =
        abs(parseInt(targetWidth) - dimension.width) +
        abs(parseInt(targetHeight) - dimension.height);
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
    this.cameraPosition = 'back';
    this.start();
  }
}

class RTCVideoCapturerDelegateImpl extends NSObject
  implements RTCVideoCapturerDelegate {
  capturerDidCaptureVideoFrame(
    capturer: RTCVideoCapturer,
    frame: RTCVideoFrame
  ): void {}
  private _owner: WeakRef<WebRTCLocalView>;
  public static initWithOwner(owner: WeakRef<WebRTCLocalView>) {
    const delegate = new RTCVideoCapturerDelegateImpl();
    delegate._owner = owner;
    return delegate;
  }
  public static ObjCProtocols = [RTCVideoCapturerDelegate];
}

export class WebRTCRemoteView extends View {
  constructor() {
    super();
    this.nativeView = RTCEAGLVideoView.alloc().init();
  }
}
