import { Common, WebRTCOptions } from './webrtc.common';
import { fromObject } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view/view';
import { device } from 'tns-core-modules/platform/platform';
import { ad } from 'tns-core-modules/utils/utils';
export class WebRTC extends Common {
  private connection: org.webrtc.PeerConnection;
  private connectionFactory: org.webrtc.PeerConnectionFactory;
  private configuration: any;
  private options: org.webrtc.PeerConnectionFactory.Options;
  private constraints: org.webrtc.MediaConstraints;
  constructor(
    options: WebRTCOptions = { enableAudio: true, enableVideo: true }
  ) {
    super();
    this.options = new org.webrtc.PeerConnectionFactory.Options();
    const builder = org.webrtc.PeerConnectionFactory.builder();
    builder.setOptions(this.options);
    this.connectionFactory = builder.createPeerConnectionFactory();
    const iceServers = new java.util.ArrayList();
    if (!options.iceServers) {
      this.defaultServers.forEach(server => {
        const iceServer = new org.webrtc.PeerConnection.IceServer(server);
        iceServers.add(iceServer);
      });
    }
    this.configuration = new org.webrtc.PeerConnection.RTCConfiguration(
      iceServers
    );

    this.constraints = new org.webrtc.MediaConstraints();
    this.constraints.mandatory.add(
      new org.webrtc.MediaConstraints.KeyValuePair(
        'OfferToReceiveAudio',
        'true'
      )
    );
    this.constraints.mandatory.add(
      new org.webrtc.MediaConstraints.KeyValuePair(
        'OfferToReceiveVideo',
        'true'
      )
    );

    this.connection = this.connectionFactory.createPeerConnection(
      this.configuration,
      new org.webrtc.PeerConnection.Observer({
        onAddStream(stream: org.webrtc.MediaStream) {},
        onRemoveStream(stream: org.webrtc.MediaStream) {},
        onDataChannel(channel: org.webrtc.DataChannel) {},
        onIceCandidate(candidate: org.webrtc.IceCandidate) {},
        onIceCandidatesRemoved(
          param0: native.Array<org.webrtc.IceCandidate>
        ) {},
        onIceConnectionChange(
          param0: org.webrtc.PeerConnection.IceConnectionState
        ) {},
        onIceConnectionReceivingChange(param0: boolean) {},
        onIceGatheringChange(
          state: org.webrtc.PeerConnection.IceGatheringState
        ) {},
        onAddTrack(
          param0: org.webrtc.RtpReceiver,
          param1: native.Array<org.webrtc.MediaStream>
        ) {},
        onTrack(param0: org.webrtc.RtpTransceiver) {},
        onSignalingChange(state: org.webrtc.PeerConnection.SignalingState) {},
        onRenegotiationNeeded() {}
      })
    );
  }

  public static init(): void {
    const options = org.webrtc.PeerConnectionFactory.InitializationOptions.builder(
      ad.getApplicationContext()
    );
    options.setEnableVideoHwAcceleration(true);
    org.webrtc.PeerConnectionFactory.initialize(
      options.createInitializationOptions()
    );
  }

  public connect(): void {
    console.log('connection',this.connection);
    if (!this.connection) return;
    console.log('before local');
    const localStream = this.getLocalStream();
    console.log('after local');
    console.log('before add');
    const added = this.connection.addStream(localStream);
    console.log('stream added', added);
    console.log('after add');
    console.log('localstream connect');
    console.log(localStream &&
      localStream.videoTracks &&
      localStream.videoTracks.get(0));
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

  private createCapturer() {
    const enumerator = new org.webrtc.Camera2Enumerator(
      ad.getApplicationContext()
    );
    const devicesNames = enumerator.getDeviceNames();
    let videoCapturer = null;
    for (let i = 0; i < devicesNames.length; i++) {
      const deviceName = devicesNames[i];
      if (enumerator.isFrontFacing(deviceName)) {
        videoCapturer = enumerator.createCapturer(deviceName, null);
        if (videoCapturer) {
          return videoCapturer;
        }
      }
    }

    for (let i = 0; i < devicesNames.length; i++) {
      const deviceName = devicesNames[i];
      if (!enumerator.isFrontFacing(deviceName)) {
        videoCapturer = enumerator.createCapturer(deviceName, null);
        if (videoCapturer) {
          return videoCapturer;
        }
      }
    }

    return videoCapturer;
  }

  public makeOffer() {
    this.connection.createOffer(
      new org.webrtc.SdpObserver({
        onCreateSuccess(param0: org.webrtc.SessionDescription) {
          console.log('makeOffer:onCreateSuccess');
        },
        onCreateFailure(param0: string) {},
        onSetFailure(param0: string) {},
        onSetSuccess() {
          console.log('makeOffer:onSetSuccess');
        }
      }),
      this.constraints
    );
  }

  private handleSdpGenerated(sdp: org.webrtc.SessionDescription) {
    const owner = new WeakRef(this);
    this.connection.setLocalDescription(
      new org.webrtc.SdpObserver({
        onCreateSuccess(param0: org.webrtc.SessionDescription) {
          console.log('handleSdpGenerated:onCreateSuccess');
        },
        onCreateFailure(param0: string) {},
        onSetFailure(param0: string) {},
        onSetSuccess() {
          console.log('handleSdpGenerated:onSetSuccess');
        }
      }),
      sdp
    );
  }

  public getLocalStream() {
    const factory = this.connectionFactory;
    const localStream = factory.createLocalMediaStream('localStream');

    const videoSource = factory.createVideoSource(true);

    let capturer = this.createCapturer();

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

    videoTrack.setEnabled(true);
    localStream.addTrack(videoTrack);

    const audioConstraints = new org.webrtc.MediaConstraints();
    const audioSource = factory.createAudioSource(audioConstraints);
    const audioTrack = factory.createAudioTrack(
      'localAudioTrackId',
      audioSource
    );
    audioTrack.setEnabled(true);
    localStream.addTrack(audioTrack);

    console.log(localStream);
    return localStream;
  }
}

export class WebRTCLocalView extends View {
  private _capturer: WebRTCCapturer;

  private _localVideoTrack: org.webrtc.VideoTrack;

  createNativeView() {
    const nativeView = new org.webrtc.SurfaceViewRenderer(this._context);
    nativeView.setMirror(true);
    const c = (org as any).webrtc.EglBase.extend({});
    const rootEglBase = c.create();
    nativeView.init(rootEglBase.getEglBaseContext(), null);
    return nativeView;
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
    console.log(this._capturer);
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
  private _remoteVideoTrack: org.webrtc.VideoTrack;

  createNativeView() {
    const nativeView = new org.webrtc.SurfaceViewRenderer(this._context);
    nativeView.setMirror(true);
    const c = (org as any).webrtc.EglBase.extend({});
    const rootEglBase = c.create();
    nativeView.init(rootEglBase.getEglBaseContext(), null);
    return nativeView;
  }

  set videoTrack(track) {
    this._remoteVideoTrack = track;
    track.addSink(this.nativeView);
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
