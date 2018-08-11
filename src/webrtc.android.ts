import { Common, WebRTCOptions } from './webrtc.common';
import { fromObject } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view/view';

export class WebRTC extends Common {
  private connection: org.webrtc.PeerConnection;
  private connectionFactory: org.webrtc.PeerConnectionFactory;
  private configuration: any;
  constructor(
    options: WebRTCOptions = { enableAudio: true, enableVideo: true }
  ) {
    super();
    const iceServers = new java.util.List();
    if (!options.iceServers) {
      this.defaultServers.forEach(server => {
        const iceServer = new org.webrtc.PeerConnection.IceServer(server);
        iceServers.add(iceServer);
      });
    }
    this.configuration = new org.webrtc.PeerConnection.RTCConfiguration(
      iceServers
    );
    this.connection = this.connectionFactory.createPeerConnection(
      this.configuration,
      new ObserverImp(new WeakRef(this))
    );
  }

  public static init(): void {
    const options = new org.webrtc.PeerConnectionFactory.InitializationOptions.Builder();
    options.setEnableVideoHwAcceleration(true);
    org.webrtc.PeerConnectionFactory.initialize(options);
  }

  public connect(): void {
    if (!this.connection) return;
    const localStream = this.getLocalStream();
    this.connection.addStream(localStream);
    if (
      localStream &&
      localStream.videoTracks &&
      localStream.videoTracks.get(0)
    ) {
      this.notify({
        eventName: 'webRTCClientDidReceiveLocalVideoTrack',
        object: fromObject({
          client: this,
          localVideoTrack: localStream.videoTracks.get(0)
        })
      });
    }
  }

  public getLocalStream() {
    const factory = this.connectionFactory;
    const localStream = factory.createLocalMediaStream('localStream');

    const videoSource = factory.createVideoSource(true);
    let capturer = new org.webrtc.CameraVideoCapturer();

    this.notify({
      eventName: 'webRTCClientDidCreateLocalCapturer',
      object: fromObject({
        client: this,
        capturer: capturer
      })
    });
    const videoTrack = factory.createVideoTrack(
      'localVideoTrackId',
      videoSource
    );
    localStream.addTrack(videoTrack);

    const audioConstraints = new org.webrtc.MediaConstraints();
    const audioSource = factory.createAudioSource(audioConstraints);
    const audioTrack = factory.createAudioTrack(
      'localAudioTrackId',
      audioSource
    );

    localStream.addTrack(audioTrack);

    return localStream;
  }
}

class ObserverImp extends org.webrtc.PeerConnection.Observer {
  private _owner: WeakRef<WebRTC>;
  constructor(owner: WeakRef<WebRTC>) {
    super();
    this._owner = owner;
  }
  onAddStream(stream: org.webrtc.MediaStream) {}
  onRemoveStream(stream: org.webrtc.MediaStream) {}
  onDataChannel(channel: org.webrtc.DataChannel) {}
  onIceCandidate(candidate: org.webrtc.IceCandidate) {}
  onIceCandidatesRemoved(param0: native.Array<org.webrtc.IceCandidate>) {}
  onIceConnectionChange(param0: org.webrtc.PeerConnection.IceConnectionState) {}
  onIceConnectionReceivingChange(param0: boolean) {}
  onIceGatheringChange(state: org.webrtc.PeerConnection.IceGatheringState) {}
  onAddTrack(
    param0: org.webrtc.RtpReceiver,
    param1: native.Array<org.webrtc.MediaStream>
  ) {}
  onTrack(param0: org.webrtc.RtpTransceiver) {}
  onSignalingChange(state: org.webrtc.PeerConnection.SignalingState) {}
  onRenegotiationNeeded() {}
}

export class WebRTCLocalView extends View {
  private _capturer: WebRTCCapturer;
  private _localVideoTrack: org.webrtc.VideoTrack;

  createNativeView() {
    return new org.webrtc.SurfaceViewRenderer(this._context);
  }

  set capturer(capturer) {
    this._capturer = capturer;
  }

  set videoTrack(track) {
    this._localVideoTrack = track;
    track.addSink(this.nativeView);
  }

  get capturer(): any {
    return this._capturer;
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

export class WebRTCRemoteView extends View {
  createNativeView() {
    return new org.webrtc.SurfaceViewRenderer(this._context);
  }
}

class WebRTCCapturer {
  private capturer: org.webrtc.CameraVideoCapturer;
  private cameraPosition = 'front';
  constructor(capturer) {
    this.capturer = capturer;
  }
  start() {
    let targetHeight = '640';
    let targetWidth = '480';
    this.capturer.startCapture(
      parseInt(targetWidth),
      parseInt(targetHeight),
      30
    );
  }
  stop() {
    this.capturer.stopCapture();
  }
  toggleCamera() {
    this.capturer.switchCamera(
      new org.webrtc.CameraCapturer.CameraSwitchHandler({
        onCameraSwitchDone(done: boolean): void {},
        onCameraSwitchError(error: string): void {}
      })
    );
  }
}
