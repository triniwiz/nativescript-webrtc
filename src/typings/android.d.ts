/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module webrtc {
		export class AudioProcessingFactory {
			public static class: java.lang.Class<org.webrtc.AudioProcessingFactory>;
			/**
			 * Constructs a new instance of the org.webrtc.AudioProcessingFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNative(): number;
			});
			public constructor();
			public createNative(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class AudioSource extends org.webrtc.MediaSource {
			public static class: java.lang.Class<org.webrtc.AudioSource>;
			public constructor(param0: number);
		}
	}
}

declare module org {
	export module webrtc {
		export class AudioTrack extends org.webrtc.MediaStreamTrack {
			public static class: java.lang.Class<org.webrtc.AudioTrack>;
			public constructor(param0: number);
			public setVolume(param0: number): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class BaseBitrateAdjuster extends org.webrtc.BitrateAdjuster {
			public static class: java.lang.Class<org.webrtc.BaseBitrateAdjuster>;
			public targetBitrateBps: number;
			public targetFps: number;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class BitrateAdjuster {
			public static class: java.lang.Class<org.webrtc.BitrateAdjuster>;
			/**
			 * Constructs a new instance of the org.webrtc.BitrateAdjuster interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setTargets(param0: number, param1: number): void;
				reportEncodedFrame(param0: number): void;
				getAdjustedBitrateBps(): number;
				getCodecConfigFramerate(): number;
			});
			public constructor();
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class CallSessionFileRotatingLogSink {
			public static class: java.lang.Class<org.webrtc.CallSessionFileRotatingLogSink>;
			public constructor(param0: string, param1: number, param2: org.webrtc.Logging.Severity);
			public static getLogData(param0: string): native.Array<number>;
			public dispose(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class CalledByNative {
			public static class: java.lang.Class<org.webrtc.CalledByNative>;
			/**
			 * Constructs a new instance of the org.webrtc.CalledByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module org {
	export module webrtc {
		export class CalledByNativeUnchecked {
			public static class: java.lang.Class<org.webrtc.CalledByNativeUnchecked>;
			/**
			 * Constructs a new instance of the org.webrtc.CalledByNativeUnchecked interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera1Capturer extends org.webrtc.CameraCapturer {
			public static class: java.lang.Class<org.webrtc.Camera1Capturer>;
			public constructor(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler, param2: boolean);
			public createCameraSession(param0: org.webrtc.CameraSession.CreateSessionCallback, param1: org.webrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.webrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public removeMediaRecorderFromCamera(param0: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public constructor(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.webrtc.CameraEnumerator);
			public switchCamera(param0: org.webrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera1Enumerator extends org.webrtc.CameraEnumerator {
			public static class: java.lang.Class<org.webrtc.Camera1Enumerator>;
			public isBackFacing(param0: string): boolean;
			public constructor(param0: boolean);
			public getDeviceNames(): native.Array<string>;
			public getSupportedFormats(param0: string): java.util.List<org.webrtc.CameraEnumerationAndroid.CaptureFormat>;
			public isFrontFacing(param0: string): boolean;
			public constructor();
			public createCapturer(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler): org.webrtc.CameraVideoCapturer;
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera1Session extends org.webrtc.CameraSession {
			public static class: java.lang.Class<org.webrtc.Camera1Session>;
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.webrtc.TextureBufferImpl, param1: boolean, param2: number): org.webrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public stop(): void;
			public static create(param0: org.webrtc.CameraSession.CreateSessionCallback, param1: org.webrtc.CameraSession.Events, param2: boolean, param3: globalAndroid.content.Context, param4: org.webrtc.SurfaceTextureHelper, param5: number, param6: number, param7: number, param8: number): void;
		}
		export module Camera1Session {
			export class SessionState {
				public static class: java.lang.Class<org.webrtc.Camera1Session.SessionState>;
				public static RUNNING: org.webrtc.Camera1Session.SessionState;
				public static STOPPED: org.webrtc.Camera1Session.SessionState;
				public static valueOf(param0: string): org.webrtc.Camera1Session.SessionState;
				public static values(): native.Array<org.webrtc.Camera1Session.SessionState>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera2Capturer extends org.webrtc.CameraCapturer {
			public static class: java.lang.Class<org.webrtc.Camera2Capturer>;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: org.webrtc.CameraVideoCapturer.CameraEventsHandler);
			public createCameraSession(param0: org.webrtc.CameraSession.CreateSessionCallback, param1: org.webrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.webrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public removeMediaRecorderFromCamera(param0: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public constructor(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.webrtc.CameraEnumerator);
			public switchCamera(param0: org.webrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera2Enumerator extends org.webrtc.CameraEnumerator {
			public static class: java.lang.Class<org.webrtc.Camera2Enumerator>;
			public isBackFacing(param0: string): boolean;
			public static isSupported(param0: globalAndroid.content.Context): boolean;
			public getDeviceNames(): native.Array<string>;
			public getSupportedFormats(param0: string): java.util.List<org.webrtc.CameraEnumerationAndroid.CaptureFormat>;
			public isFrontFacing(param0: string): boolean;
			public createCapturer(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler): org.webrtc.CameraVideoCapturer;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module org {
	export module webrtc {
		export class Camera2Session extends org.webrtc.CameraSession {
			public static class: java.lang.Class<org.webrtc.Camera2Session>;
			public static create(param0: org.webrtc.CameraSession.CreateSessionCallback, param1: org.webrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: globalAndroid.hardware.camera2.CameraManager, param4: org.webrtc.SurfaceTextureHelper, param5: string, param6: number, param7: number, param8: number): void;
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.webrtc.TextureBufferImpl, param1: boolean, param2: number): org.webrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public stop(): void;
		}
		export module Camera2Session {
			export class CameraCaptureCallback {
				public static class: java.lang.Class<org.webrtc.Camera2Session.CameraCaptureCallback>;
				public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
			}
			export class CameraStateCallback {
				public static class: java.lang.Class<org.webrtc.Camera2Session.CameraStateCallback>;
				public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
				public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
			}
			export class CaptureSessionCallback {
				public static class: java.lang.Class<org.webrtc.Camera2Session.CaptureSessionCallback>;
				public onConfigured(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
				public onConfigureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
			}
			export class SessionState {
				public static class: java.lang.Class<org.webrtc.Camera2Session.SessionState>;
				public static RUNNING: org.webrtc.Camera2Session.SessionState;
				public static STOPPED: org.webrtc.Camera2Session.SessionState;
				public static values(): native.Array<org.webrtc.Camera2Session.SessionState>;
				public static valueOf(param0: string): org.webrtc.Camera2Session.SessionState;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export abstract class CameraCapturer extends org.webrtc.CameraVideoCapturer {
			public static class: java.lang.Class<org.webrtc.CameraCapturer>;
			public getCameraName(): string;
			public removeMediaRecorderFromCamera(param0: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
			public switchCamera(param0: org.webrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public isScreencast(): boolean;
			public stopCapture(): void;
			public createCameraSession(param0: org.webrtc.CameraSession.CreateSessionCallback, param1: org.webrtc.CameraSession.Events, param2: globalAndroid.content.Context, param3: org.webrtc.SurfaceTextureHelper, param4: string, param5: number, param6: number, param7: number): void;
			public startCapture(param0: number, param1: number, param2: number): void;
			public constructor(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler, param2: org.webrtc.CameraEnumerator);
			public printStackTrace(): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
		}
		export module CameraCapturer {
			export class SwitchState {
				public static class: java.lang.Class<org.webrtc.CameraCapturer.SwitchState>;
				public static IDLE: org.webrtc.CameraCapturer.SwitchState;
				public static PENDING: org.webrtc.CameraCapturer.SwitchState;
				public static IN_PROGRESS: org.webrtc.CameraCapturer.SwitchState;
				public static values(): native.Array<org.webrtc.CameraCapturer.SwitchState>;
				public static valueOf(param0: string): org.webrtc.CameraCapturer.SwitchState;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class CameraEnumerationAndroid {
			public static class: java.lang.Class<org.webrtc.CameraEnumerationAndroid>;
			public static getClosestSupportedSize(param0: java.util.List<org.webrtc.Size>, param1: number, param2: number): org.webrtc.Size;
			public constructor();
			public static getClosestSupportedFramerateRange(param0: java.util.List<org.webrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange>, param1: number): org.webrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange;
		}
		export module CameraEnumerationAndroid {
			export class CaptureFormat {
				public static class: java.lang.Class<org.webrtc.CameraEnumerationAndroid.CaptureFormat>;
				public width: number;
				public height: number;
				public framerate: org.webrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange;
				public imageFormat: number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public static frameSize(param0: number, param1: number, param2: number): number;
				public hashCode(): number;
				public frameSize(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: number, param2: org.webrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange);
				public toString(): string;
			}
			export module CaptureFormat {
				export class FramerateRange {
					public static class: java.lang.Class<org.webrtc.CameraEnumerationAndroid.CaptureFormat.FramerateRange>;
					public min: number;
					public max: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
			export abstract class ClosestComparator<T>  extends java.util.Comparator<any> {
				public static class: java.lang.Class<org.webrtc.CameraEnumerationAndroid.ClosestComparator<any>>;
				public compare(param0: any, param1: any): number;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class CameraEnumerator {
			public static class: java.lang.Class<org.webrtc.CameraEnumerator>;
			/**
			 * Constructs a new instance of the org.webrtc.CameraEnumerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDeviceNames(): native.Array<string>;
				isFrontFacing(param0: string): boolean;
				isBackFacing(param0: string): boolean;
				getSupportedFormats(param0: string): java.util.List<org.webrtc.CameraEnumerationAndroid.CaptureFormat>;
				createCapturer(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler): org.webrtc.CameraVideoCapturer;
			});
			public constructor();
			public isBackFacing(param0: string): boolean;
			public getDeviceNames(): native.Array<string>;
			public getSupportedFormats(param0: string): java.util.List<org.webrtc.CameraEnumerationAndroid.CaptureFormat>;
			public isFrontFacing(param0: string): boolean;
			public createCapturer(param0: string, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler): org.webrtc.CameraVideoCapturer;
		}
	}
}

declare module org {
	export module webrtc {
		export class CameraSession {
			public static class: java.lang.Class<org.webrtc.CameraSession>;
			/**
			 * Constructs a new instance of the org.webrtc.CameraSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				stop(): void;
				getDeviceOrientation(param0: globalAndroid.content.Context): number;
				createTextureBufferWithModifiedTransformMatrix(param0: org.webrtc.TextureBufferImpl, param1: boolean, param2: number): org.webrtc.VideoFrame.TextureBuffer;
			});
			public constructor();
			public static createTextureBufferWithModifiedTransformMatrix(param0: org.webrtc.TextureBufferImpl, param1: boolean, param2: number): org.webrtc.VideoFrame.TextureBuffer;
			public static getDeviceOrientation(param0: globalAndroid.content.Context): number;
			public stop(): void;
		}
		export module CameraSession {
			export class CreateSessionCallback {
				public static class: java.lang.Class<org.webrtc.CameraSession.CreateSessionCallback>;
				/**
				 * Constructs a new instance of the org.webrtc.CameraSession$CreateSessionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDone(param0: org.webrtc.CameraSession): void;
					onFailure(param0: org.webrtc.CameraSession.FailureType, param1: string): void;
				});
				public constructor();
				public onDone(param0: org.webrtc.CameraSession): void;
				public onFailure(param0: org.webrtc.CameraSession.FailureType, param1: string): void;
			}
			export class Events {
				public static class: java.lang.Class<org.webrtc.CameraSession.Events>;
				/**
				 * Constructs a new instance of the org.webrtc.CameraSession$Events interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraOpening(): void;
					onCameraError(param0: org.webrtc.CameraSession, param1: string): void;
					onCameraDisconnected(param0: org.webrtc.CameraSession): void;
					onCameraClosed(param0: org.webrtc.CameraSession): void;
					onFrameCaptured(param0: org.webrtc.CameraSession, param1: org.webrtc.VideoFrame): void;
				});
				public constructor();
				public onCameraDisconnected(param0: org.webrtc.CameraSession): void;
				public onCameraClosed(param0: org.webrtc.CameraSession): void;
				public onFrameCaptured(param0: org.webrtc.CameraSession, param1: org.webrtc.VideoFrame): void;
				public onCameraOpening(): void;
				public onCameraError(param0: org.webrtc.CameraSession, param1: string): void;
			}
			export class FailureType {
				public static class: java.lang.Class<org.webrtc.CameraSession.FailureType>;
				public static ERROR: org.webrtc.CameraSession.FailureType;
				public static DISCONNECTED: org.webrtc.CameraSession.FailureType;
				public static valueOf(param0: string): org.webrtc.CameraSession.FailureType;
				public static values(): native.Array<org.webrtc.CameraSession.FailureType>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class CameraVideoCapturer extends org.webrtc.VideoCapturer {
			public static class: java.lang.Class<org.webrtc.CameraVideoCapturer>;
			/**
			 * Constructs a new instance of the org.webrtc.CameraVideoCapturer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				switchCamera(param0: org.webrtc.CameraVideoCapturer.CameraSwitchHandler): void;
				addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
				removeMediaRecorderFromCamera(param0: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
				initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
				startCapture(param0: number, param1: number, param2: number): void;
				stopCapture(): void;
				changeCaptureFormat(param0: number, param1: number, param2: number): void;
				dispose(): void;
				isScreencast(): boolean;
			});
			public constructor();
			public removeMediaRecorderFromCamera(param0: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public startCapture(param0: number, param1: number, param2: number): void;
			public switchCamera(param0: org.webrtc.CameraVideoCapturer.CameraSwitchHandler): void;
			public initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public addMediaRecorderToCamera(param0: globalAndroid.media.MediaRecorder, param1: org.webrtc.CameraVideoCapturer.MediaRecorderHandler): void;
			public stopCapture(): void;
		}
		export module CameraVideoCapturer {
			export class CameraEventsHandler {
				public static class: java.lang.Class<org.webrtc.CameraVideoCapturer.CameraEventsHandler>;
				/**
				 * Constructs a new instance of the org.webrtc.CameraVideoCapturer$CameraEventsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraError(param0: string): void;
					onCameraDisconnected(): void;
					onCameraFreezed(param0: string): void;
					onCameraOpening(param0: string): void;
					onFirstFrameAvailable(): void;
					onCameraClosed(): void;
				});
				public constructor();
				public onCameraError(param0: string): void;
				public onFirstFrameAvailable(): void;
				public onCameraOpening(param0: string): void;
				public onCameraFreezed(param0: string): void;
				public onCameraClosed(): void;
				public onCameraDisconnected(): void;
			}
			export class CameraStatistics {
				public static class: java.lang.Class<org.webrtc.CameraVideoCapturer.CameraStatistics>;
				public release(): void;
				public addFrame(): void;
				public constructor(param0: org.webrtc.SurfaceTextureHelper, param1: org.webrtc.CameraVideoCapturer.CameraEventsHandler);
			}
			export class CameraSwitchHandler {
				public static class: java.lang.Class<org.webrtc.CameraVideoCapturer.CameraSwitchHandler>;
				/**
				 * Constructs a new instance of the org.webrtc.CameraVideoCapturer$CameraSwitchHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCameraSwitchDone(param0: boolean): void;
					onCameraSwitchError(param0: string): void;
				});
				public constructor();
				public onCameraSwitchError(param0: string): void;
				public onCameraSwitchDone(param0: boolean): void;
			}
			export class MediaRecorderHandler {
				public static class: java.lang.Class<org.webrtc.CameraVideoCapturer.MediaRecorderHandler>;
				/**
				 * Constructs a new instance of the org.webrtc.CameraVideoCapturer$MediaRecorderHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMediaRecorderSuccess(): void;
					onMediaRecorderError(param0: string): void;
				});
				public constructor();
				public onMediaRecorderSuccess(): void;
				public onMediaRecorderError(param0: string): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class CapturerObserver {
			public static class: java.lang.Class<org.webrtc.CapturerObserver>;
			/**
			 * Constructs a new instance of the org.webrtc.CapturerObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCapturerStarted(param0: boolean): void;
				onCapturerStopped(): void;
				onFrameCaptured(param0: org.webrtc.VideoFrame): void;
			});
			public constructor();
			public onFrameCaptured(param0: org.webrtc.VideoFrame): void;
			public onCapturerStopped(): void;
			public onCapturerStarted(param0: boolean): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class ContextUtils {
			public static class: java.lang.Class<org.webrtc.ContextUtils>;
			public static initialize(param0: globalAndroid.content.Context): void;
			public static getApplicationContext(): globalAndroid.content.Context;
			public constructor();
		}
	}
}

declare module org {
	export module webrtc {
		export class DataChannel {
			public static class: java.lang.Class<org.webrtc.DataChannel>;
			public unregisterObserver(): void;
			public id(): number;
			public constructor(param0: number);
			public bufferedAmount(): number;
			public state(): org.webrtc.DataChannel.State;
			public dispose(): void;
			public label(): string;
			public close(): void;
			public registerObserver(param0: org.webrtc.DataChannel.Observer): void;
			public send(param0: org.webrtc.DataChannel.Buffer): boolean;
		}
		export module DataChannel {
			export class Buffer {
				public static class: java.lang.Class<org.webrtc.DataChannel.Buffer>;
				public data: java.nio.ByteBuffer;
				public binary: boolean;
				public constructor(param0: java.nio.ByteBuffer, param1: boolean);
			}
			export class Init {
				public static class: java.lang.Class<org.webrtc.DataChannel.Init>;
				public ordered: boolean;
				public maxRetransmitTimeMs: number;
				public maxRetransmits: number;
				public protocol: string;
				public negotiated: boolean;
				public id: number;
				public constructor();
			}
			export class Observer {
				public static class: java.lang.Class<org.webrtc.DataChannel.Observer>;
				/**
				 * Constructs a new instance of the org.webrtc.DataChannel$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBufferedAmountChange(param0: number): void;
					onStateChange(): void;
					onMessage(param0: org.webrtc.DataChannel.Buffer): void;
				});
				public constructor();
				public onStateChange(): void;
				public onBufferedAmountChange(param0: number): void;
				public onMessage(param0: org.webrtc.DataChannel.Buffer): void;
			}
			export class State {
				public static class: java.lang.Class<org.webrtc.DataChannel.State>;
				public static CONNECTING: org.webrtc.DataChannel.State;
				public static OPEN: org.webrtc.DataChannel.State;
				public static CLOSING: org.webrtc.DataChannel.State;
				public static CLOSED: org.webrtc.DataChannel.State;
				public static valueOf(param0: string): org.webrtc.DataChannel.State;
				public static values(): native.Array<org.webrtc.DataChannel.State>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class DefaultVideoDecoderFactory extends org.webrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.webrtc.DefaultVideoDecoderFactory>;
			public createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
			public createDecoder(param0: string): org.webrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public constructor(param0: org.webrtc.EglBase.Context);
		}
	}
}

declare module org {
	export module webrtc {
		export class DefaultVideoEncoderFactory extends org.webrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.webrtc.DefaultVideoEncoderFactory>;
			public constructor(param0: org.webrtc.EglBase.Context, param1: boolean, param2: boolean);
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module webrtc {
		export class DtmfSender {
			public static class: java.lang.Class<org.webrtc.DtmfSender>;
			public canInsertDtmf(): boolean;
			public insertDtmf(param0: string, param1: number, param2: number): boolean;
			public tones(): string;
			public duration(): number;
			public interToneGap(): number;
			public constructor(param0: number);
			public dispose(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class DynamicBitrateAdjuster extends org.webrtc.BaseBitrateAdjuster {
			public static class: java.lang.Class<org.webrtc.DynamicBitrateAdjuster>;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class EglBase {
			public static class: java.lang.Class<org.webrtc.EglBase>;
			/**
			 * Constructs a new instance of the org.webrtc.EglBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: org.webrtc.EglBase.Context, param1: native.Array<number>): org.webrtc.EglBase;
				create(): org.webrtc.EglBase;
				create(param0: org.webrtc.EglBase.Context): org.webrtc.EglBase;
				createEgl10(param0: native.Array<number>): org.webrtc.EglBase;
				createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
				createEgl14(param0: native.Array<number>): org.webrtc.EglBase;
				createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
				createSurface(param0: globalAndroid.view.Surface): void;
				createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				createDummyPbufferSurface(): void;
				createPbufferSurface(param0: number, param1: number): void;
				getEglBaseContext(): org.webrtc.EglBase.Context;
				hasSurface(): boolean;
				surfaceWidth(): number;
				surfaceHeight(): number;
				releaseSurface(): void;
				release(): void;
				makeCurrent(): void;
				detachCurrent(): void;
				swapBuffers(): void;
				swapBuffers(param0: number): void;
				<clinit>(): void;
			});
			public constructor();
			public static CONFIG_RECORDABLE: native.Array<number>;
			public static EGL_OPENGL_ES2_BIT: number;
			public static EGL_RECORDABLE_ANDROID: number;
			public static lock: any;
			public static CONFIG_PLAIN: native.Array<number>;
			public static CONFIG_PIXEL_RGBA_BUFFER: native.Array<number>;
			public static CONFIG_RGBA: native.Array<number>;
			public static CONFIG_PIXEL_BUFFER: native.Array<number>;
			public static create(param0: org.webrtc.EglBase.Context, param1: native.Array<number>): org.webrtc.EglBase;
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public getEglBaseContext(): org.webrtc.EglBase.Context;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public static create(): org.webrtc.EglBase;
			public static createEgl14(param0: native.Array<number>): org.webrtc.EglBase;
			public hasSurface(): boolean;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public releaseSurface(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public makeCurrent(): void;
			public static createEgl10(param0: native.Array<number>): org.webrtc.EglBase;
			public static create(param0: org.webrtc.EglBase.Context): org.webrtc.EglBase;
			public release(): void;
			public swapBuffers(): void;
			public detachCurrent(): void;
		}
		export module EglBase {
			export class Context {
				public static class: java.lang.Class<org.webrtc.EglBase.Context>;
				/**
				 * Constructs a new instance of the org.webrtc.EglBase$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeEglContext(): number;
				});
				public constructor();
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class EglBase10 extends org.webrtc.EglBase {
			public static class: java.lang.Class<org.webrtc.EglBase10>;
			public static create(param0: org.webrtc.EglBase.Context, param1: native.Array<number>): org.webrtc.EglBase;
			public constructor(param0: org.webrtc.EglBase10.Context, param1: native.Array<number>);
			public swapBuffers(param0: number): void;
			public surfaceWidth(): number;
			public createPbufferSurface(param0: number, param1: number): void;
			public getEglBaseContext(): org.webrtc.EglBase.Context;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public static create(): org.webrtc.EglBase;
			public static createEgl14(param0: native.Array<number>): org.webrtc.EglBase;
			public hasSurface(): boolean;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public makeCurrent(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public static createEgl10(param0: native.Array<number>): org.webrtc.EglBase;
			public release(): void;
			public swapBuffers(): void;
			public static create(param0: org.webrtc.EglBase.Context): org.webrtc.EglBase;
			public detachCurrent(): void;
		}
		export module EglBase10 {
			export class Context extends org.webrtc.EglBase.Context {
				public static class: java.lang.Class<org.webrtc.EglBase10.Context>;
				public constructor(param0: javax.microedition.khronos.egl.EGLContext);
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class EglBase14 extends org.webrtc.EglBase {
			public static class: java.lang.Class<org.webrtc.EglBase14>;
			public static create(param0: org.webrtc.EglBase.Context, param1: native.Array<number>): org.webrtc.EglBase;
			public getEglBaseContext(): org.webrtc.EglBase14.Context;
			public swapBuffers(param0: number): void;
			public static isEGL14Supported(): boolean;
			public surfaceWidth(): number;
			public constructor(param0: org.webrtc.EglBase14.Context, param1: native.Array<number>);
			public createPbufferSurface(param0: number, param1: number): void;
			public getEglBaseContext(): org.webrtc.EglBase.Context;
			public createSurface(param0: globalAndroid.view.Surface): void;
			public static create(): org.webrtc.EglBase;
			public static createEgl14(param0: native.Array<number>): org.webrtc.EglBase;
			public hasSurface(): boolean;
			public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public createDummyPbufferSurface(): void;
			public surfaceHeight(): number;
			public releaseSurface(): void;
			public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public makeCurrent(): void;
			public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): org.webrtc.EglBase;
			public static createEgl10(param0: native.Array<number>): org.webrtc.EglBase;
			public release(): void;
			public swapBuffers(): void;
			public static create(param0: org.webrtc.EglBase.Context): org.webrtc.EglBase;
			public detachCurrent(): void;
		}
		export module EglBase14 {
			export class Context extends org.webrtc.EglBase.Context {
				public static class: java.lang.Class<org.webrtc.EglBase14.Context>;
				public constructor(param0: globalAndroid.opengl.EGLContext);
				public getNativeEglContext(): number;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class EglRenderer extends org.webrtc.VideoSink {
			public static class: java.lang.Class<org.webrtc.EglRenderer>;
			public name: string;
			public init(param0: org.webrtc.EglBase.Context, param1: native.Array<number>, param2: org.webrtc.RendererCommon.GlDrawer): void;
			public addFrameListener(param0: org.webrtc.EglRenderer.FrameListener, param1: number, param2: org.webrtc.RendererCommon.GlDrawer, param3: boolean): void;
			public clearImage(): void;
			public clearImage(param0: number, param1: number, param2: number, param3: number): void;
			public releaseEglSurface(param0: java.lang.Runnable): void;
			public pauseVideo(): void;
			public addFrameListener(param0: org.webrtc.EglRenderer.FrameListener, param1: number, param2: org.webrtc.RendererCommon.GlDrawer): void;
			public setMirror(param0: boolean): void;
			public addFrameListener(param0: org.webrtc.EglRenderer.FrameListener, param1: number): void;
			public createEglSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
			public printStackTrace(): void;
			public setFpsReduction(param0: number): void;
			public removeFrameListener(param0: org.webrtc.EglRenderer.FrameListener): void;
			public createEglSurface(param0: globalAndroid.view.Surface): void;
			public setLayoutAspectRatio(param0: number): void;
			public disableFpsReduction(): void;
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public constructor(param0: string);
			public release(): void;
		}
		export module EglRenderer {
			export class EglSurfaceCreation {
				public static class: java.lang.Class<org.webrtc.EglRenderer.EglSurfaceCreation>;
				public setSurface(param0: any): void;
				public run(): void;
			}
			export class FrameListener {
				public static class: java.lang.Class<org.webrtc.EglRenderer.FrameListener>;
				/**
				 * Constructs a new instance of the org.webrtc.EglRenderer$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFrame(param0: globalAndroid.graphics.Bitmap): void;
				});
				public constructor();
				public onFrame(param0: globalAndroid.graphics.Bitmap): void;
			}
			export class FrameListenerAndParams {
				public static class: java.lang.Class<org.webrtc.EglRenderer.FrameListenerAndParams>;
				public listener: org.webrtc.EglRenderer.FrameListener;
				public scale: number;
				public drawer: org.webrtc.RendererCommon.GlDrawer;
				public applyFpsReduction: boolean;
				public constructor(param0: org.webrtc.EglRenderer.FrameListener, param1: number, param2: org.webrtc.RendererCommon.GlDrawer, param3: boolean);
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class Empty {
			public static class: java.lang.Class<org.webrtc.Empty>;
		}
	}
}

declare module org {
	export module webrtc {
		export class EncodedImage {
			public static class: java.lang.Class<org.webrtc.EncodedImage>;
			public buffer: java.nio.ByteBuffer;
			public encodedWidth: number;
			public encodedHeight: number;
			public captureTimeMs: number;
			public captureTimeNs: number;
			public frameType: org.webrtc.EncodedImage.FrameType;
			public rotation: number;
			public completeFrame: boolean;
			public qp: java.lang.Integer;
			public static builder(): org.webrtc.EncodedImage.Builder;
		}
		export module EncodedImage {
			export class Builder {
				public static class: java.lang.Class<org.webrtc.EncodedImage.Builder>;
				public setCaptureTimeNs(param0: number): org.webrtc.EncodedImage.Builder;
				public setQp(param0: java.lang.Integer): org.webrtc.EncodedImage.Builder;
				public setRotation(param0: number): org.webrtc.EncodedImage.Builder;
				public setCompleteFrame(param0: boolean): org.webrtc.EncodedImage.Builder;
				public setEncodedHeight(param0: number): org.webrtc.EncodedImage.Builder;
				public setFrameType(param0: org.webrtc.EncodedImage.FrameType): org.webrtc.EncodedImage.Builder;
				public createEncodedImage(): org.webrtc.EncodedImage;
				public setEncodedWidth(param0: number): org.webrtc.EncodedImage.Builder;
				public setCaptureTimeMs(param0: number): org.webrtc.EncodedImage.Builder;
				public setBuffer(param0: java.nio.ByteBuffer): org.webrtc.EncodedImage.Builder;
			}
			export class FrameType {
				public static class: java.lang.Class<org.webrtc.EncodedImage.FrameType>;
				public static EmptyFrame: org.webrtc.EncodedImage.FrameType;
				public static VideoFrameKey: org.webrtc.EncodedImage.FrameType;
				public static VideoFrameDelta: org.webrtc.EncodedImage.FrameType;
				public getNative(): number;
				public static valueOf(param0: string): org.webrtc.EncodedImage.FrameType;
				public static values(): native.Array<org.webrtc.EncodedImage.FrameType>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class FecControllerFactoryFactoryInterface {
			public static class: java.lang.Class<org.webrtc.FecControllerFactoryFactoryInterface>;
			/**
			 * Constructs a new instance of the org.webrtc.FecControllerFactoryFactoryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNative(): number;
			});
			public constructor();
			public createNative(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class FileVideoCapturer extends org.webrtc.VideoCapturer {
			public static class: java.lang.Class<org.webrtc.FileVideoCapturer>;
			public startCapture(param0: number, param1: number, param2: number): void;
			public tick(): void;
			public initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public constructor(param0: string);
			public stopCapture(): void;
		}
		export module FileVideoCapturer {
			export class VideoReader {
				public static class: java.lang.Class<org.webrtc.FileVideoCapturer.VideoReader>;
				/**
				 * Constructs a new instance of the org.webrtc.FileVideoCapturer$VideoReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNextFrame(): org.webrtc.VideoFrame;
					close(): void;
				});
				public constructor();
				public close(): void;
				public getNextFrame(): org.webrtc.VideoFrame;
			}
			export class VideoReaderY4M extends org.webrtc.FileVideoCapturer.VideoReader {
				public static class: java.lang.Class<org.webrtc.FileVideoCapturer.VideoReaderY4M>;
				public close(): void;
				public constructor(param0: string);
				public getNextFrame(): org.webrtc.VideoFrame;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class FramerateBitrateAdjuster extends org.webrtc.BaseBitrateAdjuster {
			public static class: java.lang.Class<org.webrtc.FramerateBitrateAdjuster>;
			public getAdjustedBitrateBps(): number;
			public setTargets(param0: number, param1: number): void;
			public reportEncodedFrame(param0: number): void;
			public getCodecConfigFramerate(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class GlGenericDrawer extends org.webrtc.RendererCommon.GlDrawer {
			public static class: java.lang.Class<org.webrtc.GlGenericDrawer>;
			public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public constructor(param0: string, param1: string, param2: org.webrtc.GlGenericDrawer.ShaderCallbacks);
			public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public constructor(param0: string, param1: org.webrtc.GlGenericDrawer.ShaderCallbacks);
			public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public release(): void;
		}
		export module GlGenericDrawer {
			export class ShaderCallbacks {
				public static class: java.lang.Class<org.webrtc.GlGenericDrawer.ShaderCallbacks>;
				/**
				 * Constructs a new instance of the org.webrtc.GlGenericDrawer$ShaderCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNewShader(param0: org.webrtc.GlShader): void;
					onPrepareShader(param0: org.webrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				});
				public constructor();
				public onPrepareShader(param0: org.webrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				public onNewShader(param0: org.webrtc.GlShader): void;
			}
			export class ShaderType {
				public static class: java.lang.Class<org.webrtc.GlGenericDrawer.ShaderType>;
				public static OES: org.webrtc.GlGenericDrawer.ShaderType;
				public static RGB: org.webrtc.GlGenericDrawer.ShaderType;
				public static YUV: org.webrtc.GlGenericDrawer.ShaderType;
				public static valueOf(param0: string): org.webrtc.GlGenericDrawer.ShaderType;
				public static values(): native.Array<org.webrtc.GlGenericDrawer.ShaderType>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class GlRectDrawer extends org.webrtc.GlGenericDrawer {
			public static class: java.lang.Class<org.webrtc.GlRectDrawer>;
			public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public constructor(param0: string, param1: string, param2: org.webrtc.GlGenericDrawer.ShaderCallbacks);
			public constructor();
			public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public constructor(param0: string, param1: org.webrtc.GlGenericDrawer.ShaderCallbacks);
			public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public release(): void;
		}
		export module GlRectDrawer {
			export class ShaderCallbacks extends org.webrtc.GlGenericDrawer.ShaderCallbacks {
				public static class: java.lang.Class<org.webrtc.GlRectDrawer.ShaderCallbacks>;
				public onPrepareShader(param0: org.webrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				public onNewShader(param0: org.webrtc.GlShader): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class GlShader {
			public static class: java.lang.Class<org.webrtc.GlShader>;
			public constructor(param0: string, param1: string);
			public getUniformLocation(param0: string): number;
			public useProgram(): void;
			public setVertexAttribArray(param0: string, param1: number, param2: java.nio.FloatBuffer): void;
			public getAttribLocation(param0: string): number;
			public setVertexAttribArray(param0: string, param1: number, param2: number, param3: java.nio.FloatBuffer): void;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class GlTextureFrameBuffer {
			public static class: java.lang.Class<org.webrtc.GlTextureFrameBuffer>;
			public getTextureId(): number;
			public getHeight(): number;
			public getFrameBufferId(): number;
			public setSize(param0: number, param1: number): void;
			public constructor(param0: number);
			public getWidth(): number;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class GlUtil {
			public static class: java.lang.Class<org.webrtc.GlUtil>;
			public static createFloatBuffer(param0: native.Array<number>): java.nio.FloatBuffer;
			public static checkNoGLES2Error(param0: string): void;
			public static generateTexture(param0: number): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class H264Utils {
			public static class: java.lang.Class<org.webrtc.H264Utils>;
			public static H264_FMTP_PROFILE_LEVEL_ID: string;
			public static H264_FMTP_LEVEL_ASYMMETRY_ALLOWED: string;
			public static H264_FMTP_PACKETIZATION_MODE: string;
			public static H264_PROFILE_CONSTRAINED_BASELINE: string;
			public static H264_PROFILE_CONSTRAINED_HIGH: string;
			public static H264_LEVEL_3_1: string;
			public static H264_CONSTRAINED_HIGH_3_1: string;
			public static H264_CONSTRAINED_BASELINE_3_1: string;
			public static DEFAULT_H264_BASELINE_PROFILE_CODEC: org.webrtc.VideoCodecInfo;
			public static DEFAULT_H264_HIGH_PROFILE_CODEC: org.webrtc.VideoCodecInfo;
			public static getDefaultH264Params(param0: boolean): java.util.Map<string,string>;
			public static isSameH264Profile(param0: java.util.Map<string,string>, param1: java.util.Map<string,string>): boolean;
		}
	}
}

declare module org {
	export module webrtc {
		export class HardwareVideoDecoder implements org.webrtc.VideoDecoder, org.webrtc.VideoSink {
			public static class: java.lang.Class<org.webrtc.HardwareVideoDecoder>;
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public release(): org.webrtc.VideoCodecStatus;
		}
		export module HardwareVideoDecoder {
			export class DecodedTextureMetadata {
				public static class: java.lang.Class<org.webrtc.HardwareVideoDecoder.DecodedTextureMetadata>;
			}
			export class FrameInfo {
				public static class: java.lang.Class<org.webrtc.HardwareVideoDecoder.FrameInfo>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class HardwareVideoDecoderFactory extends org.webrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.webrtc.HardwareVideoDecoderFactory>;
			public createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
			public createDecoder(param0: string): org.webrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public constructor();
			public constructor(param0: org.webrtc.EglBase.Context);
		}
	}
}

declare module org {
	export module webrtc {
		export class HardwareVideoEncoder extends org.webrtc.VideoEncoder {
			public static class: java.lang.Class<org.webrtc.HardwareVideoEncoder>;
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public constructor(param0: string, param1: org.webrtc.VideoCodecType, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.util.Map<string,string>, param5: number, param6: number, param7: org.webrtc.BitrateAdjuster, param8: org.webrtc.EglBase14.Context);
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
		export module HardwareVideoEncoder {
			export abstract class YuvFormat {
				public static class: java.lang.Class<org.webrtc.HardwareVideoEncoder.YuvFormat>;
				public static I420: org.webrtc.HardwareVideoEncoder.YuvFormat;
				public static NV12: org.webrtc.HardwareVideoEncoder.YuvFormat;
				public static valueOf(param0: string): org.webrtc.HardwareVideoEncoder.YuvFormat;
				public static values(): native.Array<org.webrtc.HardwareVideoEncoder.YuvFormat>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class HardwareVideoEncoderFactory extends org.webrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.webrtc.HardwareVideoEncoderFactory>;
			public constructor(param0: org.webrtc.EglBase.Context, param1: boolean, param2: boolean);
			public constructor(param0: boolean, param1: boolean);
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module webrtc {
		export class Histogram {
			public static class: java.lang.Class<org.webrtc.Histogram>;
			public static createCounts(param0: string, param1: number, param2: number, param3: number): org.webrtc.Histogram;
			public static createEnumeration(param0: string, param1: number): org.webrtc.Histogram;
			public addSample(param0: number): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class IceCandidate {
			public static class: java.lang.Class<org.webrtc.IceCandidate>;
			public sdpMid: string;
			public sdpMLineIndex: number;
			public sdp: string;
			public serverUrl: string;
			public constructor(param0: string, param1: number, param2: string);
			public toString(): string;
		}
	}
}

declare module org {
	export module webrtc {
		export class JNILogging {
			public static class: java.lang.Class<org.webrtc.JNILogging>;
			public logToInjectable(param0: string, param1: java.lang.Integer, param2: string): void;
			public constructor(param0: org.webrtc.Loggable);
		}
	}
}

declare module org {
	export module webrtc {
		export class JavaI420Buffer extends org.webrtc.VideoFrame.I420Buffer {
			public static class: java.lang.Class<org.webrtc.JavaI420Buffer>;
			public getStrideU(): number;
			public getHeight(): number;
			public getDataU(): java.nio.ByteBuffer;
			public static allocate(param0: number, param1: number): org.webrtc.JavaI420Buffer;
			public getStrideY(): number;
			public getWidth(): number;
			public static wrap(param0: number, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.lang.Runnable): org.webrtc.JavaI420Buffer;
			public static cropAndScaleI420(param0: org.webrtc.VideoFrame.I420Buffer, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.webrtc.VideoFrame.Buffer;
			public getDataY(): java.nio.ByteBuffer;
			public getStrideV(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
			public toI420(): org.webrtc.VideoFrame.I420Buffer;
			public getDataV(): java.nio.ByteBuffer;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class JniCommon {
			public static class: java.lang.Class<org.webrtc.JniCommon>;
			public static nativeReleaseRef(param0: number): void;
			public static nativeAddRef(param0: number): void;
			public constructor();
			public static nativeAllocateByteBuffer(param0: number): java.nio.ByteBuffer;
			public static nativeFreeByteBuffer(param0: java.nio.ByteBuffer): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class JniHelper {
			public static class: java.lang.Class<org.webrtc.JniHelper>;
		}
	}
}

declare module org {
	export module webrtc {
		export class Loggable {
			public static class: java.lang.Class<org.webrtc.Loggable>;
			/**
			 * Constructs a new instance of the org.webrtc.Loggable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onLogMessage(param0: string, param1: org.webrtc.Logging.Severity, param2: string): void;
			});
			public constructor();
			public onLogMessage(param0: string, param1: org.webrtc.Logging.Severity, param2: string): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class Logging {
			public static class: java.lang.Class<org.webrtc.Logging>;
			public static enableLogTimeStamps(): void;
			public static log(param0: org.webrtc.Logging.Severity, param1: string, param2: string): void;
			public static enableLogToDebugOutput(param0: org.webrtc.Logging.Severity): void;
			public static v(param0: string, param1: string): void;
			public static w(param0: string, param1: string): void;
			public static enableLogThreads(): void;
			public constructor();
			public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static enableTracing(param0: string, param1: java.util.EnumSet<org.webrtc.Logging.TraceLevel>): void;
			public static e(param0: string, param1: string): void;
			public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static d(param0: string, param1: string): void;
		}
		export module Logging {
			export class Severity {
				public static class: java.lang.Class<org.webrtc.Logging.Severity>;
				public static LS_SENSITIVE: org.webrtc.Logging.Severity;
				public static LS_VERBOSE: org.webrtc.Logging.Severity;
				public static LS_INFO: org.webrtc.Logging.Severity;
				public static LS_WARNING: org.webrtc.Logging.Severity;
				public static LS_ERROR: org.webrtc.Logging.Severity;
				public static LS_NONE: org.webrtc.Logging.Severity;
				public static valueOf(param0: string): org.webrtc.Logging.Severity;
				public static values(): native.Array<org.webrtc.Logging.Severity>;
			}
			export class TraceLevel {
				public static class: java.lang.Class<org.webrtc.Logging.TraceLevel>;
				public static TRACE_NONE: org.webrtc.Logging.TraceLevel;
				public static TRACE_STATEINFO: org.webrtc.Logging.TraceLevel;
				public static TRACE_WARNING: org.webrtc.Logging.TraceLevel;
				public static TRACE_ERROR: org.webrtc.Logging.TraceLevel;
				public static TRACE_CRITICAL: org.webrtc.Logging.TraceLevel;
				public static TRACE_APICALL: org.webrtc.Logging.TraceLevel;
				public static TRACE_DEFAULT: org.webrtc.Logging.TraceLevel;
				public static TRACE_MODULECALL: org.webrtc.Logging.TraceLevel;
				public static TRACE_MEMORY: org.webrtc.Logging.TraceLevel;
				public static TRACE_TIMER: org.webrtc.Logging.TraceLevel;
				public static TRACE_STREAM: org.webrtc.Logging.TraceLevel;
				public static TRACE_DEBUG: org.webrtc.Logging.TraceLevel;
				public static TRACE_INFO: org.webrtc.Logging.TraceLevel;
				public static TRACE_TERSEINFO: org.webrtc.Logging.TraceLevel;
				public static TRACE_ALL: org.webrtc.Logging.TraceLevel;
				public level: number;
				public static values(): native.Array<org.webrtc.Logging.TraceLevel>;
				public static valueOf(param0: string): org.webrtc.Logging.TraceLevel;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaCodecUtils {
			public static class: java.lang.Class<org.webrtc.MediaCodecUtils>;
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaCodecVideoDecoder {
			public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder>;
			public static setEglContext(param0: org.webrtc.EglBase.Context): void;
			public static isH264HighProfileHwSupported(): boolean;
			public static setErrorCallback(param0: org.webrtc.MediaCodecVideoDecoder.MediaCodecVideoDecoderErrorCallback): void;
			public static disableH264HwCodec(): void;
			public static disposeEglContext(): void;
			public static createFactory(): org.webrtc.VideoDecoderFactory;
			public static isVp8HwSupported(): boolean;
			public static isVp9HwSupported(): boolean;
			public static disableVp9HwCodec(): void;
			public static isH264HwSupported(): boolean;
			public static disableVp8HwCodec(): void;
			public static printStackTrace(): void;
		}
		export module MediaCodecVideoDecoder {
			export class DecodedOutputBuffer {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.DecodedOutputBuffer>;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
			}
			export class DecodedTextureBuffer {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.DecodedTextureBuffer>;
				public constructor(param0: org.webrtc.VideoFrame.Buffer, param1: number, param2: number, param3: number, param4: number, param5: number);
			}
			export class DecoderProperties {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.DecoderProperties>;
				public codecName: string;
				public colorFormat: number;
				public constructor(param0: string, param1: number);
			}
			export class HwDecoderFactory extends org.webrtc.VideoDecoderFactory {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.HwDecoderFactory>;
				public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
				public createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
				public createDecoder(param0: string): org.webrtc.VideoDecoder;
			}
			export class MediaCodecVideoDecoderErrorCallback {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.MediaCodecVideoDecoderErrorCallback>;
				/**
				 * Constructs a new instance of the org.webrtc.MediaCodecVideoDecoder$MediaCodecVideoDecoderErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMediaCodecVideoDecoderCriticalError(param0: number): void;
				});
				public constructor();
				public onMediaCodecVideoDecoderCriticalError(param0: number): void;
			}
			export class TextureListener extends org.webrtc.VideoSink {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.TextureListener>;
				public addBufferToRender(param0: org.webrtc.MediaCodecVideoDecoder.DecodedOutputBuffer): void;
				public onFrame(param0: org.webrtc.VideoFrame): void;
				public release(): void;
				public constructor(param0: org.webrtc.MediaCodecVideoDecoder, param1: org.webrtc.SurfaceTextureHelper);
				public setSize(param0: number, param1: number): void;
				public isWaitingForTexture(): boolean;
				public dequeueTextureBuffer(param0: number): org.webrtc.MediaCodecVideoDecoder.DecodedTextureBuffer;
			}
			export class TimeStamps {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.TimeStamps>;
				public constructor(param0: number, param1: number, param2: number);
			}
			export class VideoCodecType {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoDecoder.VideoCodecType>;
				public static VIDEO_CODEC_UNKNOWN: org.webrtc.MediaCodecVideoDecoder.VideoCodecType;
				public static VIDEO_CODEC_VP8: org.webrtc.MediaCodecVideoDecoder.VideoCodecType;
				public static VIDEO_CODEC_VP9: org.webrtc.MediaCodecVideoDecoder.VideoCodecType;
				public static VIDEO_CODEC_H264: org.webrtc.MediaCodecVideoDecoder.VideoCodecType;
				public static values(): native.Array<org.webrtc.MediaCodecVideoDecoder.VideoCodecType>;
				public static valueOf(param0: string): org.webrtc.MediaCodecVideoDecoder.VideoCodecType;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaCodecVideoEncoder {
			public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder>;
			public static vp8HwEncoderProperties(): org.webrtc.MediaCodecVideoEncoder.EncoderProperties;
			public static setErrorCallback(param0: org.webrtc.MediaCodecVideoEncoder.MediaCodecVideoEncoderErrorCallback): void;
			public static isH264HwSupportedUsingTextures(): boolean;
			public static isH264HwSupported(): boolean;
			public static disableVp8HwCodec(): void;
			public static setEglContext(param0: org.webrtc.EglBase.Context): void;
			public static isH264HighProfileHwSupported(): boolean;
			public static isVp8HwSupportedUsingTextures(): boolean;
			public static disableH264HwCodec(): void;
			public static isVp9HwSupportedUsingTextures(): boolean;
			public static disposeEglContext(): void;
			public static createFactory(): org.webrtc.VideoEncoderFactory;
			public static isVp8HwSupported(): boolean;
			public static isVp9HwSupported(): boolean;
			public static disableVp9HwCodec(): void;
			public static printStackTrace(): void;
		}
		export module MediaCodecVideoEncoder {
			export class BitrateAdjustmentType {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType>;
				public static NO_ADJUSTMENT: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
				public static FRAMERATE_ADJUSTMENT: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
				public static DYNAMIC_ADJUSTMENT: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
				public static valueOf(param0: string): org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
				public static values(): native.Array<org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType>;
			}
			export class EncoderProperties {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.EncoderProperties>;
				public codecName: string;
				public colorFormat: number;
				public bitrateAdjustmentType: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
				public constructor(param0: string, param1: number, param2: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType);
			}
			export class H264Profile {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.H264Profile>;
				public static CONSTRAINED_BASELINE: org.webrtc.MediaCodecVideoEncoder.H264Profile;
				public static BASELINE: org.webrtc.MediaCodecVideoEncoder.H264Profile;
				public static MAIN: org.webrtc.MediaCodecVideoEncoder.H264Profile;
				public static CONSTRAINED_HIGH: org.webrtc.MediaCodecVideoEncoder.H264Profile;
				public static HIGH: org.webrtc.MediaCodecVideoEncoder.H264Profile;
				public static values(): native.Array<org.webrtc.MediaCodecVideoEncoder.H264Profile>;
				public getValue(): number;
				public static valueOf(param0: string): org.webrtc.MediaCodecVideoEncoder.H264Profile;
			}
			export class HwEncoderFactory extends org.webrtc.VideoEncoderFactory {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.HwEncoderFactory>;
				public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
				public createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
			}
			export class MediaCodecProperties {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.MediaCodecProperties>;
				public codecPrefix: string;
				public minSdk: number;
				public bitrateAdjustmentType: org.webrtc.MediaCodecVideoEncoder.BitrateAdjustmentType;
			}
			export class MediaCodecVideoEncoderErrorCallback {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.MediaCodecVideoEncoderErrorCallback>;
				/**
				 * Constructs a new instance of the org.webrtc.MediaCodecVideoEncoder$MediaCodecVideoEncoderErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMediaCodecVideoEncoderCriticalError(param0: number): void;
				});
				public constructor();
				public onMediaCodecVideoEncoderCriticalError(param0: number): void;
			}
			export class OutputBufferInfo {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.OutputBufferInfo>;
				public index: number;
				public buffer: java.nio.ByteBuffer;
				public isKeyFrame: boolean;
				public presentationTimestampUs: number;
				public constructor(param0: number, param1: java.nio.ByteBuffer, param2: boolean, param3: number);
			}
			export class VideoCodecType {
				public static class: java.lang.Class<org.webrtc.MediaCodecVideoEncoder.VideoCodecType>;
				public static VIDEO_CODEC_UNKNOWN: org.webrtc.MediaCodecVideoEncoder.VideoCodecType;
				public static VIDEO_CODEC_VP8: org.webrtc.MediaCodecVideoEncoder.VideoCodecType;
				public static VIDEO_CODEC_VP9: org.webrtc.MediaCodecVideoEncoder.VideoCodecType;
				public static VIDEO_CODEC_H264: org.webrtc.MediaCodecVideoEncoder.VideoCodecType;
				public static valueOf(param0: string): org.webrtc.MediaCodecVideoEncoder.VideoCodecType;
				public static values(): native.Array<org.webrtc.MediaCodecVideoEncoder.VideoCodecType>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaConstraints {
			public static class: java.lang.Class<org.webrtc.MediaConstraints>;
			public mandatory: java.util.List<org.webrtc.MediaConstraints.KeyValuePair>;
			public optional: java.util.List<org.webrtc.MediaConstraints.KeyValuePair>;
			public toString(): string;
			public constructor();
		}
		export module MediaConstraints {
			export class KeyValuePair {
				public static class: java.lang.Class<org.webrtc.MediaConstraints.KeyValuePair>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string, param1: string);
				public getKey(): string;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaSource {
			public static class: java.lang.Class<org.webrtc.MediaSource>;
			public state(): org.webrtc.MediaSource.State;
			public constructor(param0: number);
			public dispose(): void;
		}
		export module MediaSource {
			export class State {
				public static class: java.lang.Class<org.webrtc.MediaSource.State>;
				public static INITIALIZING: org.webrtc.MediaSource.State;
				public static LIVE: org.webrtc.MediaSource.State;
				public static ENDED: org.webrtc.MediaSource.State;
				public static MUTED: org.webrtc.MediaSource.State;
				public static values(): native.Array<org.webrtc.MediaSource.State>;
				public static valueOf(param0: string): org.webrtc.MediaSource.State;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaStream {
			public static class: java.lang.Class<org.webrtc.MediaStream>;
			public audioTracks: java.util.List<org.webrtc.AudioTrack>;
			public videoTracks: java.util.List<org.webrtc.VideoTrack>;
			public preservedVideoTracks: java.util.List<org.webrtc.VideoTrack>;
			public addPreservedTrack(param0: org.webrtc.VideoTrack): boolean;
			public removeTrack(param0: org.webrtc.AudioTrack): boolean;
			public getId(): string;
			public toString(): string;
			public addTrack(param0: org.webrtc.AudioTrack): boolean;
			public constructor(param0: number);
			public dispose(): void;
			public addTrack(param0: org.webrtc.VideoTrack): boolean;
			public removeTrack(param0: org.webrtc.VideoTrack): boolean;
		}
	}
}

declare module org {
	export module webrtc {
		export class MediaStreamTrack {
			public static class: java.lang.Class<org.webrtc.MediaStreamTrack>;
			public static AUDIO_TRACK_KIND: string;
			public static VIDEO_TRACK_KIND: string;
			public state(): org.webrtc.MediaStreamTrack.State;
			public setEnabled(param0: boolean): boolean;
			public enabled(): boolean;
			public constructor(param0: number);
			public kind(): string;
			public dispose(): void;
			public id(): string;
		}
		export module MediaStreamTrack {
			export class MediaType {
				public static class: java.lang.Class<org.webrtc.MediaStreamTrack.MediaType>;
				public static MEDIA_TYPE_AUDIO: org.webrtc.MediaStreamTrack.MediaType;
				public static MEDIA_TYPE_VIDEO: org.webrtc.MediaStreamTrack.MediaType;
				public static valueOf(param0: string): org.webrtc.MediaStreamTrack.MediaType;
				public static values(): native.Array<org.webrtc.MediaStreamTrack.MediaType>;
			}
			export class State {
				public static class: java.lang.Class<org.webrtc.MediaStreamTrack.State>;
				public static LIVE: org.webrtc.MediaStreamTrack.State;
				public static ENDED: org.webrtc.MediaStreamTrack.State;
				public static valueOf(param0: string): org.webrtc.MediaStreamTrack.State;
				public static values(): native.Array<org.webrtc.MediaStreamTrack.State>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class Metrics {
			public static class: java.lang.Class<org.webrtc.Metrics>;
			public map: java.util.Map<string,org.webrtc.Metrics.HistogramInfo>;
			public static getAndReset(): org.webrtc.Metrics;
			public static enable(): void;
		}
		export module Metrics {
			export class HistogramInfo {
				public static class: java.lang.Class<org.webrtc.Metrics.HistogramInfo>;
				public min: number;
				public max: number;
				public bucketCount: number;
				public samples: java.util.Map<java.lang.Integer,java.lang.Integer>;
				public constructor(param0: number, param1: number, param2: number);
				public addSample(param0: number, param1: number): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class NV12Buffer extends org.webrtc.VideoFrame.Buffer {
			public static class: java.lang.Class<org.webrtc.NV12Buffer>;
			public getHeight(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
			public getWidth(): number;
			public toI420(): org.webrtc.VideoFrame.I420Buffer;
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: java.nio.ByteBuffer, param5: java.lang.Runnable);
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class NV21Buffer extends org.webrtc.VideoFrame.Buffer {
			public static class: java.lang.Class<org.webrtc.NV21Buffer>;
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: java.lang.Runnable);
			public getHeight(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
			public getWidth(): number;
			public toI420(): org.webrtc.VideoFrame.I420Buffer;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class NativeCapturerObserver extends org.webrtc.CapturerObserver {
			public static class: java.lang.Class<org.webrtc.NativeCapturerObserver>;
			public onFrameCaptured(param0: org.webrtc.VideoFrame): void;
			public constructor(param0: number);
			public onCapturerStopped(): void;
			public onCapturerStarted(param0: boolean): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class NativeLibrary {
			public static class: java.lang.Class<org.webrtc.NativeLibrary>;
		}
		export module NativeLibrary {
			export class DefaultLoader extends org.webrtc.NativeLibraryLoader {
				public static class: java.lang.Class<org.webrtc.NativeLibrary.DefaultLoader>;
				public load(param0: string): boolean;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class NativeLibraryLoader {
			public static class: java.lang.Class<org.webrtc.NativeLibraryLoader>;
			/**
			 * Constructs a new instance of the org.webrtc.NativeLibraryLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				load(param0: string): boolean;
			});
			public constructor();
			public load(param0: string): boolean;
		}
	}
}

declare module org {
	export module webrtc {
		export class NativePeerConnectionFactory {
			public static class: java.lang.Class<org.webrtc.NativePeerConnectionFactory>;
			/**
			 * Constructs a new instance of the org.webrtc.NativePeerConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativePeerConnection(): number;
			});
			public constructor();
			public createNativePeerConnection(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class NetworkMonitor {
			public static class: java.lang.Class<org.webrtc.NetworkMonitor>;
			public startMonitoring(): void;
			public stopMonitoring(): void;
			public static removeNetworkObserver(param0: org.webrtc.NetworkMonitor.NetworkObserver): void;
			public static init(param0: globalAndroid.content.Context): void;
			public startMonitoring(param0: globalAndroid.content.Context): void;
			public addObserver(param0: org.webrtc.NetworkMonitor.NetworkObserver): void;
			public static isOnline(): boolean;
			public static getInstance(): org.webrtc.NetworkMonitor;
			public removeObserver(param0: org.webrtc.NetworkMonitor.NetworkObserver): void;
			public static addNetworkObserver(param0: org.webrtc.NetworkMonitor.NetworkObserver): void;
		}
		export module NetworkMonitor {
			export class InstanceHolder {
				public static class: java.lang.Class<org.webrtc.NetworkMonitor.InstanceHolder>;
			}
			export class NetworkObserver {
				public static class: java.lang.Class<org.webrtc.NetworkMonitor.NetworkObserver>;
				/**
				 * Constructs a new instance of the org.webrtc.NetworkMonitor$NetworkObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionTypeChanged(param0: org.webrtc.NetworkMonitorAutoDetect.ConnectionType): void;
				});
				public constructor();
				public onConnectionTypeChanged(param0: org.webrtc.NetworkMonitorAutoDetect.ConnectionType): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class NetworkMonitorAutoDetect {
			public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect>;
			public getDefaultNetId(): number;
			public constructor(param0: org.webrtc.NetworkMonitorAutoDetect.Observer, param1: globalAndroid.content.Context);
			public destroy(): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public supportNetworkCallback(): boolean;
			public getCurrentNetworkState(): org.webrtc.NetworkMonitorAutoDetect.NetworkState;
			public static getConnectionType(param0: org.webrtc.NetworkMonitorAutoDetect.NetworkState): org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
		}
		export module NetworkMonitorAutoDetect {
			export class ConnectionType {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.ConnectionType>;
				public static CONNECTION_UNKNOWN: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_ETHERNET: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_WIFI: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_4G: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_3G: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_2G: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_UNKNOWN_CELLULAR: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_BLUETOOTH: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_VPN: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static CONNECTION_NONE: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public static values(): native.Array<org.webrtc.NetworkMonitorAutoDetect.ConnectionType>;
				public static valueOf(param0: string): org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
			}
			export class ConnectivityManagerDelegate {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.ConnectivityManagerDelegate>;
				public registerNetworkCallback(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public requestMobileNetwork(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public releaseCallback(param0: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
				public supportNetworkCallback(): boolean;
			}
			export class IPAddress {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.IPAddress>;
				public address: native.Array<number>;
				public constructor(param0: native.Array<number>);
			}
			export class NetworkInformation {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.NetworkInformation>;
				public name: string;
				public type: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public underlyingTypeForVpn: org.webrtc.NetworkMonitorAutoDetect.ConnectionType;
				public handle: number;
				public ipAddresses: native.Array<org.webrtc.NetworkMonitorAutoDetect.IPAddress>;
				public constructor(param0: string, param1: org.webrtc.NetworkMonitorAutoDetect.ConnectionType, param2: org.webrtc.NetworkMonitorAutoDetect.ConnectionType, param3: number, param4: native.Array<org.webrtc.NetworkMonitorAutoDetect.IPAddress>);
			}
			export class NetworkState {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.NetworkState>;
				public isConnected(): boolean;
				public getNetworkSubType(): number;
				public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
				public getNetworkType(): number;
				public getUnderlyingNetworkTypeForVpn(): number;
				public getUnderlyingNetworkSubtypeForVpn(): number;
			}
			export class Observer {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.Observer>;
				/**
				 * Constructs a new instance of the org.webrtc.NetworkMonitorAutoDetect$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionTypeChanged(param0: org.webrtc.NetworkMonitorAutoDetect.ConnectionType): void;
					onNetworkConnect(param0: org.webrtc.NetworkMonitorAutoDetect.NetworkInformation): void;
					onNetworkDisconnect(param0: number): void;
				});
				public constructor();
				public onNetworkDisconnect(param0: number): void;
				public onConnectionTypeChanged(param0: org.webrtc.NetworkMonitorAutoDetect.ConnectionType): void;
				public onNetworkConnect(param0: org.webrtc.NetworkMonitorAutoDetect.NetworkInformation): void;
			}
			export class SimpleNetworkCallback {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.SimpleNetworkCallback>;
				public onLost(param0: globalAndroid.net.Network): void;
				public onLosing(param0: globalAndroid.net.Network, param1: number): void;
				public onAvailable(param0: globalAndroid.net.Network): void;
				public onLinkPropertiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.LinkProperties): void;
				public onCapabilitiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.NetworkCapabilities): void;
			}
			export class WifiDirectManagerDelegate {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.WifiDirectManagerDelegate>;
				public release(): void;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public getActiveNetworkList(): java.util.List<org.webrtc.NetworkMonitorAutoDetect.NetworkInformation>;
			}
			export class WifiManagerDelegate {
				public static class: java.lang.Class<org.webrtc.NetworkMonitorAutoDetect.WifiManagerDelegate>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class PeerConnection {
			public static class: java.lang.Class<org.webrtc.PeerConnection>;
			public signalingState(): org.webrtc.PeerConnection.SignalingState;
			public setLocalDescription(param0: org.webrtc.SdpObserver, param1: org.webrtc.SessionDescription): void;
			public getLocalDescription(): org.webrtc.SessionDescription;
			public setBitrate(param0: java.lang.Integer, param1: java.lang.Integer, param2: java.lang.Integer): boolean;
			public createAnswer(param0: org.webrtc.SdpObserver, param1: org.webrtc.MediaConstraints): void;
			public getReceivers(): java.util.List<org.webrtc.RtpReceiver>;
			public getStats(param0: org.webrtc.RTCStatsCollectorCallback): void;
			public createOffer(param0: org.webrtc.SdpObserver, param1: org.webrtc.MediaConstraints): void;
			public addTransceiver(param0: org.webrtc.MediaStreamTrack, param1: org.webrtc.RtpTransceiver.RtpTransceiverInit): org.webrtc.RtpTransceiver;
			public iceConnectionState(): org.webrtc.PeerConnection.IceConnectionState;
			public createDataChannel(param0: string, param1: org.webrtc.DataChannel.Init): org.webrtc.DataChannel;
			public setAudioRecording(param0: boolean): void;
			public addStream(param0: org.webrtc.MediaStream): boolean;
			public createSender(param0: string, param1: string): org.webrtc.RtpSender;
			public addTransceiver(param0: org.webrtc.MediaStreamTrack): org.webrtc.RtpTransceiver;
			public getNativePeerConnection(): number;
			public getRemoteDescription(): org.webrtc.SessionDescription;
			public setRemoteDescription(param0: org.webrtc.SdpObserver, param1: org.webrtc.SessionDescription): void;
			public dispose(): void;
			public iceGatheringState(): org.webrtc.PeerConnection.IceGatheringState;
			public close(): void;
			public addTrack(param0: org.webrtc.MediaStreamTrack): org.webrtc.RtpSender;
			public startRtcEventLog(param0: number, param1: number): boolean;
			public stopRtcEventLog(): void;
			public constructor(param0: org.webrtc.NativePeerConnectionFactory);
			public addIceCandidate(param0: org.webrtc.IceCandidate): boolean;
			public removeIceCandidates(param0: native.Array<org.webrtc.IceCandidate>): boolean;
			public setAudioPlayout(param0: boolean): void;
			public getTransceivers(): java.util.List<org.webrtc.RtpTransceiver>;
			public addTransceiver(param0: org.webrtc.MediaStreamTrack.MediaType, param1: org.webrtc.RtpTransceiver.RtpTransceiverInit): org.webrtc.RtpTransceiver;
			public getSenders(): java.util.List<org.webrtc.RtpSender>;
			public removeTrack(param0: org.webrtc.RtpSender): boolean;
			public addTransceiver(param0: org.webrtc.MediaStreamTrack.MediaType): org.webrtc.RtpTransceiver;
			public static createNativePeerConnectionObserver(param0: org.webrtc.PeerConnection.Observer): number;
			public removeStream(param0: org.webrtc.MediaStream): void;
			public setConfiguration(param0: org.webrtc.PeerConnection.RTCConfiguration): boolean;
			public addTrack(param0: org.webrtc.MediaStreamTrack, param1: java.util.List<string>): org.webrtc.RtpSender;
			public getStats(param0: org.webrtc.StatsObserver, param1: org.webrtc.MediaStreamTrack): boolean;
		}
		export module PeerConnection {
			export class AdapterType {
				public static class: java.lang.Class<org.webrtc.PeerConnection.AdapterType>;
				public static UNKNOWN: org.webrtc.PeerConnection.AdapterType;
				public static ETHERNET: org.webrtc.PeerConnection.AdapterType;
				public static WIFI: org.webrtc.PeerConnection.AdapterType;
				public static CELLULAR: org.webrtc.PeerConnection.AdapterType;
				public static VPN: org.webrtc.PeerConnection.AdapterType;
				public static LOOPBACK: org.webrtc.PeerConnection.AdapterType;
				public static valueOf(param0: string): org.webrtc.PeerConnection.AdapterType;
				public static values(): native.Array<org.webrtc.PeerConnection.AdapterType>;
			}
			export class BundlePolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.BundlePolicy>;
				public static BALANCED: org.webrtc.PeerConnection.BundlePolicy;
				public static MAXBUNDLE: org.webrtc.PeerConnection.BundlePolicy;
				public static MAXCOMPAT: org.webrtc.PeerConnection.BundlePolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.BundlePolicy>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.BundlePolicy;
			}
			export class CandidateNetworkPolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.CandidateNetworkPolicy>;
				public static ALL: org.webrtc.PeerConnection.CandidateNetworkPolicy;
				public static LOW_COST: org.webrtc.PeerConnection.CandidateNetworkPolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.CandidateNetworkPolicy>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.CandidateNetworkPolicy;
			}
			export class ContinualGatheringPolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.ContinualGatheringPolicy>;
				public static GATHER_ONCE: org.webrtc.PeerConnection.ContinualGatheringPolicy;
				public static GATHER_CONTINUALLY: org.webrtc.PeerConnection.ContinualGatheringPolicy;
				public static valueOf(param0: string): org.webrtc.PeerConnection.ContinualGatheringPolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.ContinualGatheringPolicy>;
			}
			export class IceConnectionState {
				public static class: java.lang.Class<org.webrtc.PeerConnection.IceConnectionState>;
				public static NEW: org.webrtc.PeerConnection.IceConnectionState;
				public static CHECKING: org.webrtc.PeerConnection.IceConnectionState;
				public static CONNECTED: org.webrtc.PeerConnection.IceConnectionState;
				public static COMPLETED: org.webrtc.PeerConnection.IceConnectionState;
				public static FAILED: org.webrtc.PeerConnection.IceConnectionState;
				public static DISCONNECTED: org.webrtc.PeerConnection.IceConnectionState;
				public static CLOSED: org.webrtc.PeerConnection.IceConnectionState;
				public static valueOf(param0: string): org.webrtc.PeerConnection.IceConnectionState;
				public static values(): native.Array<org.webrtc.PeerConnection.IceConnectionState>;
			}
			export class IceGatheringState {
				public static class: java.lang.Class<org.webrtc.PeerConnection.IceGatheringState>;
				public static NEW: org.webrtc.PeerConnection.IceGatheringState;
				public static GATHERING: org.webrtc.PeerConnection.IceGatheringState;
				public static COMPLETE: org.webrtc.PeerConnection.IceGatheringState;
				public static values(): native.Array<org.webrtc.PeerConnection.IceGatheringState>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.IceGatheringState;
			}
			export class IceServer {
				public static class: java.lang.Class<org.webrtc.PeerConnection.IceServer>;
				public uri: string;
				public urls: java.util.List<string>;
				public username: string;
				public password: string;
				public tlsCertPolicy: org.webrtc.PeerConnection.TlsCertPolicy;
				public hostname: string;
				public tlsAlpnProtocols: java.util.List<string>;
				public tlsEllipticCurves: java.util.List<string>;
				public static builder(param0: string): org.webrtc.PeerConnection.IceServer.Builder;
				public constructor(param0: string, param1: string, param2: string, param3: org.webrtc.PeerConnection.TlsCertPolicy, param4: string);
				public constructor(param0: string, param1: string, param2: string);
				public static builder(param0: java.util.List<string>): org.webrtc.PeerConnection.IceServer.Builder;
				public toString(): string;
				public constructor(param0: string);
				public constructor(param0: string, param1: string, param2: string, param3: org.webrtc.PeerConnection.TlsCertPolicy);
			}
			export module IceServer {
				export class Builder {
					public static class: java.lang.Class<org.webrtc.PeerConnection.IceServer.Builder>;
					public setPassword(param0: string): org.webrtc.PeerConnection.IceServer.Builder;
					public createIceServer(): org.webrtc.PeerConnection.IceServer;
					public setTlsCertPolicy(param0: org.webrtc.PeerConnection.TlsCertPolicy): org.webrtc.PeerConnection.IceServer.Builder;
					public setHostname(param0: string): org.webrtc.PeerConnection.IceServer.Builder;
					public setTlsAlpnProtocols(param0: java.util.List<string>): org.webrtc.PeerConnection.IceServer.Builder;
					public setTlsEllipticCurves(param0: java.util.List<string>): org.webrtc.PeerConnection.IceServer.Builder;
					public setUsername(param0: string): org.webrtc.PeerConnection.IceServer.Builder;
				}
			}
			export class IceTransportsType {
				public static class: java.lang.Class<org.webrtc.PeerConnection.IceTransportsType>;
				public static NONE: org.webrtc.PeerConnection.IceTransportsType;
				public static RELAY: org.webrtc.PeerConnection.IceTransportsType;
				public static NOHOST: org.webrtc.PeerConnection.IceTransportsType;
				public static ALL: org.webrtc.PeerConnection.IceTransportsType;
				public static valueOf(param0: string): org.webrtc.PeerConnection.IceTransportsType;
				public static values(): native.Array<org.webrtc.PeerConnection.IceTransportsType>;
			}
			export class IntervalRange {
				public static class: java.lang.Class<org.webrtc.PeerConnection.IntervalRange>;
				public constructor(param0: number, param1: number);
				public getMax(): number;
				public getMin(): number;
			}
			export class KeyType {
				public static class: java.lang.Class<org.webrtc.PeerConnection.KeyType>;
				public static RSA: org.webrtc.PeerConnection.KeyType;
				public static ECDSA: org.webrtc.PeerConnection.KeyType;
				public static values(): native.Array<org.webrtc.PeerConnection.KeyType>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.KeyType;
			}
			export class Observer {
				public static class: java.lang.Class<org.webrtc.PeerConnection.Observer>;
				/**
				 * Constructs a new instance of the org.webrtc.PeerConnection$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSignalingChange(param0: org.webrtc.PeerConnection.SignalingState): void;
					onIceConnectionChange(param0: org.webrtc.PeerConnection.IceConnectionState): void;
					onIceConnectionReceivingChange(param0: boolean): void;
					onIceGatheringChange(param0: org.webrtc.PeerConnection.IceGatheringState): void;
					onIceCandidate(param0: org.webrtc.IceCandidate): void;
					onIceCandidatesRemoved(param0: native.Array<org.webrtc.IceCandidate>): void;
					onAddStream(param0: org.webrtc.MediaStream): void;
					onRemoveStream(param0: org.webrtc.MediaStream): void;
					onDataChannel(param0: org.webrtc.DataChannel): void;
					onRenegotiationNeeded(): void;
					onAddTrack(param0: org.webrtc.RtpReceiver, param1: native.Array<org.webrtc.MediaStream>): void;
					onTrack(param0: org.webrtc.RtpTransceiver): void;
				});
				public constructor();
				public onAddStream(param0: org.webrtc.MediaStream): void;
				public onSignalingChange(param0: org.webrtc.PeerConnection.SignalingState): void;
				public onRemoveStream(param0: org.webrtc.MediaStream): void;
				public onIceGatheringChange(param0: org.webrtc.PeerConnection.IceGatheringState): void;
				public onIceCandidatesRemoved(param0: native.Array<org.webrtc.IceCandidate>): void;
				public onDataChannel(param0: org.webrtc.DataChannel): void;
				public onIceConnectionChange(param0: org.webrtc.PeerConnection.IceConnectionState): void;
				public onAddTrack(param0: org.webrtc.RtpReceiver, param1: native.Array<org.webrtc.MediaStream>): void;
				public onTrack(param0: org.webrtc.RtpTransceiver): void;
				public onIceCandidate(param0: org.webrtc.IceCandidate): void;
				public onIceConnectionReceivingChange(param0: boolean): void;
				public onRenegotiationNeeded(): void;
			}
			export class RTCConfiguration {
				public static class: java.lang.Class<org.webrtc.PeerConnection.RTCConfiguration>;
				public iceTransportsType: org.webrtc.PeerConnection.IceTransportsType;
				public iceServers: java.util.List<org.webrtc.PeerConnection.IceServer>;
				public bundlePolicy: org.webrtc.PeerConnection.BundlePolicy;
				public rtcpMuxPolicy: org.webrtc.PeerConnection.RtcpMuxPolicy;
				public tcpCandidatePolicy: org.webrtc.PeerConnection.TcpCandidatePolicy;
				public candidateNetworkPolicy: org.webrtc.PeerConnection.CandidateNetworkPolicy;
				public audioJitterBufferMaxPackets: number;
				public audioJitterBufferFastAccelerate: boolean;
				public iceConnectionReceivingTimeout: number;
				public iceBackupCandidatePairPingInterval: number;
				public keyType: org.webrtc.PeerConnection.KeyType;
				public continualGatheringPolicy: org.webrtc.PeerConnection.ContinualGatheringPolicy;
				public iceCandidatePoolSize: number;
				public pruneTurnPorts: boolean;
				public presumeWritableWhenFullyRelayed: boolean;
				public iceCheckIntervalStrongConnectivityMs: java.lang.Integer;
				public iceCheckIntervalWeakConnectivityMs: java.lang.Integer;
				public iceCheckMinInterval: java.lang.Integer;
				public iceUnwritableTimeMs: java.lang.Integer;
				public iceUnwritableMinChecks: java.lang.Integer;
				public stunCandidateKeepaliveIntervalMs: java.lang.Integer;
				public disableIPv6OnWifi: boolean;
				public maxIPv6Networks: number;
				public iceRegatherIntervalRange: org.webrtc.PeerConnection.IntervalRange;
				public disableIpv6: boolean;
				public enableDscp: boolean;
				public enableCpuOveruseDetection: boolean;
				public enableRtpDataChannel: boolean;
				public suspendBelowMinBitrate: boolean;
				public screencastMinBitrate: java.lang.Integer;
				public combinedAudioVideoBwe: java.lang.Boolean;
				public enableDtlsSrtp: java.lang.Boolean;
				public networkPreference: org.webrtc.PeerConnection.AdapterType;
				public sdpSemantics: org.webrtc.PeerConnection.SdpSemantics;
				public turnCustomizer: org.webrtc.TurnCustomizer;
				public activeResetSrtpParams: boolean;
				public constructor(param0: java.util.List<org.webrtc.PeerConnection.IceServer>);
			}
			export class RtcpMuxPolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.RtcpMuxPolicy>;
				public static NEGOTIATE: org.webrtc.PeerConnection.RtcpMuxPolicy;
				public static REQUIRE: org.webrtc.PeerConnection.RtcpMuxPolicy;
				public static valueOf(param0: string): org.webrtc.PeerConnection.RtcpMuxPolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.RtcpMuxPolicy>;
			}
			export class SdpSemantics {
				public static class: java.lang.Class<org.webrtc.PeerConnection.SdpSemantics>;
				public static PLAN_B: org.webrtc.PeerConnection.SdpSemantics;
				public static UNIFIED_PLAN: org.webrtc.PeerConnection.SdpSemantics;
				public static values(): native.Array<org.webrtc.PeerConnection.SdpSemantics>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.SdpSemantics;
			}
			export class SignalingState {
				public static class: java.lang.Class<org.webrtc.PeerConnection.SignalingState>;
				public static STABLE: org.webrtc.PeerConnection.SignalingState;
				public static HAVE_LOCAL_OFFER: org.webrtc.PeerConnection.SignalingState;
				public static HAVE_LOCAL_PRANSWER: org.webrtc.PeerConnection.SignalingState;
				public static HAVE_REMOTE_OFFER: org.webrtc.PeerConnection.SignalingState;
				public static HAVE_REMOTE_PRANSWER: org.webrtc.PeerConnection.SignalingState;
				public static CLOSED: org.webrtc.PeerConnection.SignalingState;
				public static values(): native.Array<org.webrtc.PeerConnection.SignalingState>;
				public static valueOf(param0: string): org.webrtc.PeerConnection.SignalingState;
			}
			export class TcpCandidatePolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.TcpCandidatePolicy>;
				public static ENABLED: org.webrtc.PeerConnection.TcpCandidatePolicy;
				public static DISABLED: org.webrtc.PeerConnection.TcpCandidatePolicy;
				public static valueOf(param0: string): org.webrtc.PeerConnection.TcpCandidatePolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.TcpCandidatePolicy>;
			}
			export class TlsCertPolicy {
				public static class: java.lang.Class<org.webrtc.PeerConnection.TlsCertPolicy>;
				public static TLS_CERT_POLICY_SECURE: org.webrtc.PeerConnection.TlsCertPolicy;
				public static TLS_CERT_POLICY_INSECURE_NO_CHECK: org.webrtc.PeerConnection.TlsCertPolicy;
				public static valueOf(param0: string): org.webrtc.PeerConnection.TlsCertPolicy;
				public static values(): native.Array<org.webrtc.PeerConnection.TlsCertPolicy>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class PeerConnectionDependencies {
			public static class: java.lang.Class<org.webrtc.PeerConnectionDependencies>;
			public static builder(param0: org.webrtc.PeerConnection.Observer): org.webrtc.PeerConnectionDependencies.Builder;
		}
		export module PeerConnectionDependencies {
			export class Builder {
				public static class: java.lang.Class<org.webrtc.PeerConnectionDependencies.Builder>;
				public createPeerConnectionDependencies(): org.webrtc.PeerConnectionDependencies;
				public setSSLCertificateVerifier(param0: org.webrtc.SSLCertificateVerifier): org.webrtc.PeerConnectionDependencies.Builder;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class PeerConnectionFactory {
			public static class: java.lang.Class<org.webrtc.PeerConnectionFactory>;
			public static TRIAL_ENABLED: string;
			public static VIDEO_FRAME_EMIT_TRIAL: string;
			public static initialize(param0: org.webrtc.PeerConnectionFactory.InitializationOptions): void;
			public createVideoSource(param0: boolean): org.webrtc.VideoSource;
			public createPeerConnection(param0: org.webrtc.PeerConnection.RTCConfiguration, param1: org.webrtc.PeerConnection.Observer): org.webrtc.PeerConnection;
			public createAudioSource(param0: org.webrtc.MediaConstraints): org.webrtc.AudioSource;
			public createAudioTrack(param0: string, param1: org.webrtc.AudioSource): org.webrtc.AudioTrack;
			public static printStackTraces(): void;
			public createLocalMediaStream(param0: string): org.webrtc.MediaStream;
			public static initializeFieldTrials(param0: string): void;
			public setVideoHwAccelerationOptions(param0: org.webrtc.EglBase.Context, param1: org.webrtc.EglBase.Context): void;
			public dispose(): void;
			public static startInternalTracingCapture(param0: string): boolean;
			public createPeerConnection(param0: java.util.List<org.webrtc.PeerConnection.IceServer>, param1: org.webrtc.MediaConstraints, param2: org.webrtc.PeerConnection.Observer): org.webrtc.PeerConnection;
			public static stopInternalTracingCapture(): void;
			public getNativePeerConnectionFactory(): number;
			public createVideoTrack(param0: string, param1: org.webrtc.VideoSource): org.webrtc.VideoTrack;
			public threadsCallbacks(): void;
			public startAecDump(param0: number, param1: number): boolean;
			public static builder(): org.webrtc.PeerConnectionFactory.Builder;
			public createPeerConnection(param0: java.util.List<org.webrtc.PeerConnection.IceServer>, param1: org.webrtc.PeerConnection.Observer): org.webrtc.PeerConnection;
			public getNativeOwnedFactoryAndThreads(): number;
			public stopAecDump(): void;
			public createPeerConnection(param0: org.webrtc.PeerConnection.RTCConfiguration, param1: org.webrtc.PeerConnectionDependencies): org.webrtc.PeerConnection;
			public static shutdownInternalTracer(): void;
			public static fieldTrialsFindFullName(param0: string): string;
			public createPeerConnection(param0: org.webrtc.PeerConnection.RTCConfiguration, param1: org.webrtc.MediaConstraints, param2: org.webrtc.PeerConnection.Observer): org.webrtc.PeerConnection;
		}
		export module PeerConnectionFactory {
			export class Builder {
				public static class: java.lang.Class<org.webrtc.PeerConnectionFactory.Builder>;
				public setAudioProcessingFactory(param0: org.webrtc.AudioProcessingFactory): org.webrtc.PeerConnectionFactory.Builder;
				public setAudioDeviceModule(param0: org.webrtc.audio.AudioDeviceModule): org.webrtc.PeerConnectionFactory.Builder;
				public setVideoDecoderFactory(param0: org.webrtc.VideoDecoderFactory): org.webrtc.PeerConnectionFactory.Builder;
				public setOptions(param0: org.webrtc.PeerConnectionFactory.Options): org.webrtc.PeerConnectionFactory.Builder;
				public setVideoEncoderFactory(param0: org.webrtc.VideoEncoderFactory): org.webrtc.PeerConnectionFactory.Builder;
				public createPeerConnectionFactory(): org.webrtc.PeerConnectionFactory;
				public setFecControllerFactoryFactoryInterface(param0: org.webrtc.FecControllerFactoryFactoryInterface): org.webrtc.PeerConnectionFactory.Builder;
			}
			export class InitializationOptions {
				public static class: java.lang.Class<org.webrtc.PeerConnectionFactory.InitializationOptions>;
				public static builder(param0: globalAndroid.content.Context): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
			}
			export module InitializationOptions {
				export class Builder {
					public static class: java.lang.Class<org.webrtc.PeerConnectionFactory.InitializationOptions.Builder>;
					public setEnableInternalTracer(param0: boolean): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setNativeLibraryLoader(param0: org.webrtc.NativeLibraryLoader): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setNativeLibraryName(param0: string): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public createInitializationOptions(): org.webrtc.PeerConnectionFactory.InitializationOptions;
					public setEnableVideoHwAcceleration(param0: boolean): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setFieldTrials(param0: string): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
					public setInjectableLogger(param0: org.webrtc.Loggable, param1: org.webrtc.Logging.Severity): org.webrtc.PeerConnectionFactory.InitializationOptions.Builder;
				}
			}
			export class Options {
				public static class: java.lang.Class<org.webrtc.PeerConnectionFactory.Options>;
				public networkIgnoreMask: number;
				public disableEncryption: boolean;
				public disableNetworkMonitor: boolean;
				public enableAes128Sha1_32CryptoCipher: boolean;
				public enableGcmCryptoSuites: boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class RTCStats {
			public static class: java.lang.Class<org.webrtc.RTCStats>;
			public getId(): string;
			public toString(): string;
			public constructor(param0: number, param1: string, param2: string, param3: java.util.Map<string,any>);
			public getMembers(): java.util.Map<string,any>;
			public getTimestampUs(): number;
			public getType(): string;
		}
	}
}

declare module org {
	export module webrtc {
		export class RTCStatsCollectorCallback {
			public static class: java.lang.Class<org.webrtc.RTCStatsCollectorCallback>;
			/**
			 * Constructs a new instance of the org.webrtc.RTCStatsCollectorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStatsDelivered(param0: org.webrtc.RTCStatsReport): void;
			});
			public constructor();
			public onStatsDelivered(param0: org.webrtc.RTCStatsReport): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class RTCStatsReport {
			public static class: java.lang.Class<org.webrtc.RTCStatsReport>;
			public toString(): string;
			public constructor(param0: number, param1: java.util.Map<string,org.webrtc.RTCStats>);
			public getTimestampUs(): number;
			public getStatsMap(): java.util.Map<string,org.webrtc.RTCStats>;
		}
	}
}

declare module org {
	export module webrtc {
		export class RefCountDelegate extends org.webrtc.RefCounted {
			public static class: java.lang.Class<org.webrtc.RefCountDelegate>;
			public constructor(param0: java.lang.Runnable);
			public retain(): void;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class RefCounted {
			public static class: java.lang.Class<org.webrtc.RefCounted>;
			/**
			 * Constructs a new instance of the org.webrtc.RefCounted interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				retain(): void;
				release(): void;
			});
			public constructor();
			public retain(): void;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class RendererCommon {
			public static class: java.lang.Class<org.webrtc.RendererCommon>;
			public static multiplyMatrices(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
			public static convertMatrixFromAndroidGraphicsMatrix(param0: globalAndroid.graphics.Matrix): native.Array<number>;
			public static getDisplaySize(param0: org.webrtc.RendererCommon.ScalingType, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
			public static rotateTextureMatrix(param0: native.Array<number>, param1: number): native.Array<number>;
			public static horizontalFlipMatrix(): native.Array<number>;
			public static getLayoutMatrix(param0: boolean, param1: number, param2: number): native.Array<number>;
			public static convertMatrixToAndroidGraphicsMatrix(param0: native.Array<number>): globalAndroid.graphics.Matrix;
			public static verticalFlipMatrix(): native.Array<number>;
			public constructor();
			public static identityMatrix(): native.Array<number>;
		}
		export module RendererCommon {
			export class GlDrawer {
				public static class: java.lang.Class<org.webrtc.RendererCommon.GlDrawer>;
				/**
				 * Constructs a new instance of the org.webrtc.RendererCommon$GlDrawer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					release(): void;
				});
				public constructor();
				public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public release(): void;
				public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			}
			export class RendererEvents {
				public static class: java.lang.Class<org.webrtc.RendererCommon.RendererEvents>;
				/**
				 * Constructs a new instance of the org.webrtc.RendererCommon$RendererEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFirstFrameRendered(): void;
					onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
				});
				public constructor();
				public onFirstFrameRendered(): void;
				public onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
			}
			export class ScalingType {
				public static class: java.lang.Class<org.webrtc.RendererCommon.ScalingType>;
				public static SCALE_ASPECT_FIT: org.webrtc.RendererCommon.ScalingType;
				public static SCALE_ASPECT_FILL: org.webrtc.RendererCommon.ScalingType;
				public static SCALE_ASPECT_BALANCED: org.webrtc.RendererCommon.ScalingType;
				public static valueOf(param0: string): org.webrtc.RendererCommon.ScalingType;
				public static values(): native.Array<org.webrtc.RendererCommon.ScalingType>;
			}
			export class VideoLayoutMeasure {
				public static class: java.lang.Class<org.webrtc.RendererCommon.VideoLayoutMeasure>;
				public setScalingType(param0: org.webrtc.RendererCommon.ScalingType): void;
				public setScalingType(param0: org.webrtc.RendererCommon.ScalingType, param1: org.webrtc.RendererCommon.ScalingType): void;
				public measure(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
				public constructor();
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class RtpParameters {
			public static class: java.lang.Class<org.webrtc.RtpParameters>;
			public transactionId: string;
			public encodings: java.util.List<org.webrtc.RtpParameters.Encoding>;
			public codecs: java.util.List<org.webrtc.RtpParameters.Codec>;
			public getRtcp(): org.webrtc.RtpParameters.Rtcp;
			public getHeaderExtensions(): java.util.List<org.webrtc.RtpParameters.HeaderExtension>;
		}
		export module RtpParameters {
			export class Codec {
				public static class: java.lang.Class<org.webrtc.RtpParameters.Codec>;
				public payloadType: number;
				public name: string;
				public clockRate: java.lang.Integer;
				public numChannels: java.lang.Integer;
				public parameters: java.util.Map<string,string>;
			}
			export class Encoding {
				public static class: java.lang.Class<org.webrtc.RtpParameters.Encoding>;
				public active: boolean;
				public maxBitrateBps: java.lang.Integer;
				public minBitrateBps: java.lang.Integer;
				public ssrc: java.lang.Long;
			}
			export class HeaderExtension {
				public static class: java.lang.Class<org.webrtc.RtpParameters.HeaderExtension>;
				public getUri(): string;
				public getId(): number;
				public getEncrypted(): boolean;
			}
			export class Rtcp {
				public static class: java.lang.Class<org.webrtc.RtpParameters.Rtcp>;
				public getReducedSize(): boolean;
				public getCname(): string;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class RtpReceiver {
			public static class: java.lang.Class<org.webrtc.RtpReceiver>;
			public SetObserver(param0: org.webrtc.RtpReceiver.Observer): void;
			public constructor(param0: number);
			public track(): org.webrtc.MediaStreamTrack;
			public dispose(): void;
			public getParameters(): org.webrtc.RtpParameters;
			public id(): string;
			public setParameters(param0: org.webrtc.RtpParameters): boolean;
		}
		export module RtpReceiver {
			export class Observer {
				public static class: java.lang.Class<org.webrtc.RtpReceiver.Observer>;
				/**
				 * Constructs a new instance of the org.webrtc.RtpReceiver$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFirstPacketReceived(param0: org.webrtc.MediaStreamTrack.MediaType): void;
				});
				public constructor();
				public onFirstPacketReceived(param0: org.webrtc.MediaStreamTrack.MediaType): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class RtpSender {
			public static class: java.lang.Class<org.webrtc.RtpSender>;
			public setTrack(param0: org.webrtc.MediaStreamTrack, param1: boolean): boolean;
			public constructor(param0: number);
			public track(): org.webrtc.MediaStreamTrack;
			public dispose(): void;
			public dtmf(): org.webrtc.DtmfSender;
			public getParameters(): org.webrtc.RtpParameters;
			public id(): string;
			public setParameters(param0: org.webrtc.RtpParameters): boolean;
		}
	}
}

declare module org {
	export module webrtc {
		export class RtpTransceiver {
			public static class: java.lang.Class<org.webrtc.RtpTransceiver>;
			public isStopped(): boolean;
			public getDirection(): org.webrtc.RtpTransceiver.RtpTransceiverDirection;
			public getReceiver(): org.webrtc.RtpReceiver;
			public getSender(): org.webrtc.RtpSender;
			public stop(): void;
			public constructor(param0: number);
			public getMediaType(): org.webrtc.MediaStreamTrack.MediaType;
			public getCurrentDirection(): org.webrtc.RtpTransceiver.RtpTransceiverDirection;
			public setDirection(param0: org.webrtc.RtpTransceiver.RtpTransceiverDirection): void;
			public getMid(): string;
			public dispose(): void;
		}
		export module RtpTransceiver {
			export class RtpTransceiverDirection {
				public static class: java.lang.Class<org.webrtc.RtpTransceiver.RtpTransceiverDirection>;
				public static SEND_RECV: org.webrtc.RtpTransceiver.RtpTransceiverDirection;
				public static SEND_ONLY: org.webrtc.RtpTransceiver.RtpTransceiverDirection;
				public static RECV_ONLY: org.webrtc.RtpTransceiver.RtpTransceiverDirection;
				public static INACTIVE: org.webrtc.RtpTransceiver.RtpTransceiverDirection;
				public static values(): native.Array<org.webrtc.RtpTransceiver.RtpTransceiverDirection>;
				public static valueOf(param0: string): org.webrtc.RtpTransceiver.RtpTransceiverDirection;
			}
			export class RtpTransceiverInit {
				public static class: java.lang.Class<org.webrtc.RtpTransceiver.RtpTransceiverInit>;
				public constructor(param0: org.webrtc.RtpTransceiver.RtpTransceiverDirection, param1: java.util.List<string>);
				public constructor();
				public constructor(param0: org.webrtc.RtpTransceiver.RtpTransceiverDirection);
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class SSLCertificateVerifier {
			public static class: java.lang.Class<org.webrtc.SSLCertificateVerifier>;
			/**
			 * Constructs a new instance of the org.webrtc.SSLCertificateVerifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				verify(param0: native.Array<number>): boolean;
			});
			public constructor();
			public verify(param0: native.Array<number>): boolean;
		}
	}
}

declare module org {
	export module webrtc {
		export class ScreenCapturerAndroid implements org.webrtc.VideoCapturer, org.webrtc.VideoSink {
			public static class: java.lang.Class<org.webrtc.ScreenCapturerAndroid>;
			public getNumCapturedFrames(): number;
			public constructor(param0: globalAndroid.content.Intent, param1: globalAndroid.media.projection.MediaProjection.Callback);
			public startCapture(param0: number, param1: number, param2: number): void;
			public initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
			public dispose(): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public isScreencast(): boolean;
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public stopCapture(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class SdpObserver {
			public static class: java.lang.Class<org.webrtc.SdpObserver>;
			/**
			 * Constructs a new instance of the org.webrtc.SdpObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreateSuccess(param0: org.webrtc.SessionDescription): void;
				onSetSuccess(): void;
				onCreateFailure(param0: string): void;
				onSetFailure(param0: string): void;
			});
			public constructor();
			public onCreateSuccess(param0: org.webrtc.SessionDescription): void;
			public onCreateFailure(param0: string): void;
			public onSetFailure(param0: string): void;
			public onSetSuccess(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class SessionDescription {
			public static class: java.lang.Class<org.webrtc.SessionDescription>;
			public type: org.webrtc.SessionDescription.Type;
			public description: string;
			public constructor(param0: org.webrtc.SessionDescription.Type, param1: string);
		}
		export module SessionDescription {
			export class Type {
				public static class: java.lang.Class<org.webrtc.SessionDescription.Type>;
				public static OFFER: org.webrtc.SessionDescription.Type;
				public static PRANSWER: org.webrtc.SessionDescription.Type;
				public static ANSWER: org.webrtc.SessionDescription.Type;
				public static values(): native.Array<org.webrtc.SessionDescription.Type>;
				public static valueOf(param0: string): org.webrtc.SessionDescription.Type;
				public canonicalForm(): string;
				public static fromCanonicalForm(param0: string): org.webrtc.SessionDescription.Type;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class Size {
			public static class: java.lang.Class<org.webrtc.Size>;
			public width: number;
			public height: number;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class SoftwareVideoDecoderFactory extends org.webrtc.VideoDecoderFactory {
			public static class: java.lang.Class<org.webrtc.SoftwareVideoDecoderFactory>;
			public createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
			public createDecoder(param0: string): org.webrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public constructor();
		}
	}
}

declare module org {
	export module webrtc {
		export class SoftwareVideoEncoderFactory extends org.webrtc.VideoEncoderFactory {
			public static class: java.lang.Class<org.webrtc.SoftwareVideoEncoderFactory>;
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public constructor();
			public createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module webrtc {
		export class StatsObserver {
			public static class: java.lang.Class<org.webrtc.StatsObserver>;
			/**
			 * Constructs a new instance of the org.webrtc.StatsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onComplete(param0: native.Array<org.webrtc.StatsReport>): void;
			});
			public constructor();
			public onComplete(param0: native.Array<org.webrtc.StatsReport>): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class StatsReport {
			public static class: java.lang.Class<org.webrtc.StatsReport>;
			public id: string;
			public type: string;
			public timestamp: number;
			public values: native.Array<org.webrtc.StatsReport.Value>;
			public toString(): string;
			public constructor(param0: string, param1: string, param2: number, param3: native.Array<org.webrtc.StatsReport.Value>);
		}
		export module StatsReport {
			export class Value {
				public static class: java.lang.Class<org.webrtc.StatsReport.Value>;
				public name: string;
				public value: string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class SurfaceEglRenderer extends org.webrtc.EglRenderer {
			public static class: java.lang.Class<org.webrtc.SurfaceEglRenderer>;
			public init(param0: org.webrtc.EglBase.Context, param1: native.Array<number>, param2: org.webrtc.RendererCommon.GlDrawer): void;
			public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public init(param0: org.webrtc.EglBase.Context, param1: org.webrtc.RendererCommon.RendererEvents, param2: native.Array<number>, param3: org.webrtc.RendererCommon.GlDrawer): void;
			public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
			public setFpsReduction(param0: number): void;
			public pauseVideo(): void;
			public disableFpsReduction(): void;
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public constructor(param0: string);
			public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class SurfaceTextureHelper {
			public static class: java.lang.Class<org.webrtc.SurfaceTextureHelper>;
			public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
			public startListening(param0: org.webrtc.VideoSink): void;
			public stopListening(): void;
			public setTextureSize(param0: number, param1: number): void;
			public createTextureBuffer(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): org.webrtc.TextureBufferImpl;
			public isTextureInUse(): boolean;
			public setFrameRotation(param0: number): void;
			public textureToYuv(param0: org.webrtc.VideoFrame.TextureBuffer): org.webrtc.VideoFrame.I420Buffer;
			public startListening(param0: org.webrtc.SurfaceTextureHelper.OnTextureFrameAvailableListener): void;
			public static create(param0: string, param1: org.webrtc.EglBase.Context): org.webrtc.SurfaceTextureHelper;
			public returnTextureFrame(): void;
			public dispose(): void;
			public getHandler(): globalAndroid.os.Handler;
		}
		export module SurfaceTextureHelper {
			export class OnTextureFrameAvailableListener {
				public static class: java.lang.Class<org.webrtc.SurfaceTextureHelper.OnTextureFrameAvailableListener>;
				/**
				 * Constructs a new instance of the org.webrtc.SurfaceTextureHelper$OnTextureFrameAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
				});
				public constructor();
				public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class SurfaceViewRenderer implements org.webrtc.VideoSink, org.webrtc.RendererCommon.RendererEvents {
			public static class: java.lang.Class<org.webrtc.SurfaceViewRenderer>;
			public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public clearImage(): void;
			public init(param0: org.webrtc.EglBase.Context, param1: org.webrtc.RendererCommon.RendererEvents, param2: native.Array<number>, param3: org.webrtc.RendererCommon.GlDrawer): void;
			public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public pauseVideo(): void;
			public addFrameListener(param0: org.webrtc.EglRenderer.FrameListener, param1: number, param2: org.webrtc.RendererCommon.GlDrawer): void;
			public setScalingType(param0: org.webrtc.RendererCommon.ScalingType): void;
			public onMeasure(param0: number, param1: number): void;
			public setMirror(param0: boolean): void;
			public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
			public addFrameListener(param0: org.webrtc.EglRenderer.FrameListener, param1: number): void;
			public init(param0: org.webrtc.EglBase.Context, param1: org.webrtc.RendererCommon.RendererEvents): void;
			public setEnableHardwareScaler(param0: boolean): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setScalingType(param0: org.webrtc.RendererCommon.ScalingType, param1: org.webrtc.RendererCommon.ScalingType): void;
			public setFpsReduction(param0: number): void;
			public removeFrameListener(param0: org.webrtc.EglRenderer.FrameListener): void;
			public disableFpsReduction(): void;
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public onFirstFrameRendered(): void;
			public constructor(param0: globalAndroid.content.Context);
			public release(): void;
			public onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class TextureBufferImpl extends org.webrtc.VideoFrame.TextureBuffer {
			public static class: java.lang.Class<org.webrtc.TextureBufferImpl>;
			public applyTransformMatrix(param0: globalAndroid.graphics.Matrix, param1: number, param2: number): org.webrtc.TextureBufferImpl;
			public getTextureId(): number;
			public constructor(param0: number, param1: number, param2: org.webrtc.VideoFrame.TextureBuffer.Type, param3: number, param4: globalAndroid.graphics.Matrix, param5: globalAndroid.os.Handler, param6: org.webrtc.YuvConverter, param7: java.lang.Runnable);
			public getTransformMatrix(): globalAndroid.graphics.Matrix;
			public getHeight(): number;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
			public getType(): org.webrtc.VideoFrame.TextureBuffer.Type;
			public getWidth(): number;
			public toI420(): org.webrtc.VideoFrame.I420Buffer;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class ThreadUtils {
			public static class: java.lang.Class<org.webrtc.ThreadUtils>;
			public static joinUninterruptibly(param0: java.lang.Thread, param1: number): boolean;
			public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch, param1: number): boolean;
			public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.lang.Runnable): void;
			public static joinUninterruptibly(param0: java.lang.Thread): void;
			public static executeUninterruptibly(param0: org.webrtc.ThreadUtils.BlockingOperation): void;
			public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch): void;
			public constructor();
			public static checkIsOnMainThread(): void;
			public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Callable): any;
		}
		export module ThreadUtils {
			export class BlockingOperation {
				public static class: java.lang.Class<org.webrtc.ThreadUtils.BlockingOperation>;
				/**
				 * Constructs a new instance of the org.webrtc.ThreadUtils$BlockingOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(): void;
				});
				public constructor();
				public run(): void;
			}
			export class ThreadChecker {
				public static class: java.lang.Class<org.webrtc.ThreadUtils.ThreadChecker>;
				public checkIsOnValidThread(): void;
				public detachThread(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class TurnCustomizer {
			public static class: java.lang.Class<org.webrtc.TurnCustomizer>;
			public constructor(param0: number);
			public dispose(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class VP8Decoder extends org.webrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.webrtc.VP8Decoder>;
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VP8Encoder extends org.webrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.webrtc.VP8Encoder>;
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VP9Decoder extends org.webrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.webrtc.VP9Decoder>;
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VP9Encoder extends org.webrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.webrtc.VP9Encoder>;
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoCapturer {
			public static class: java.lang.Class<org.webrtc.VideoCapturer>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoCapturer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
				startCapture(param0: number, param1: number, param2: number): void;
				stopCapture(): void;
				changeCaptureFormat(param0: number, param1: number, param2: number): void;
				dispose(): void;
				isScreencast(): boolean;
			});
			public constructor();
			public startCapture(param0: number, param1: number, param2: number): void;
			public initialize(param0: org.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: org.webrtc.CapturerObserver): void;
			public changeCaptureFormat(param0: number, param1: number, param2: number): void;
			public dispose(): void;
			public isScreencast(): boolean;
			public stopCapture(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoCodecInfo {
			public static class: java.lang.Class<org.webrtc.VideoCodecInfo>;
			public static H264_FMTP_PROFILE_LEVEL_ID: string;
			public static H264_FMTP_LEVEL_ASYMMETRY_ALLOWED: string;
			public static H264_FMTP_PACKETIZATION_MODE: string;
			public static H264_PROFILE_CONSTRAINED_BASELINE: string;
			public static H264_PROFILE_CONSTRAINED_HIGH: string;
			public static H264_LEVEL_3_1: string;
			public static H264_CONSTRAINED_HIGH_3_1: string;
			public static H264_CONSTRAINED_BASELINE_3_1: string;
			public name: string;
			public params: java.util.Map<string,string>;
			public payload: number;
			public equals(param0: any): boolean;
			public constructor(param0: number, param1: string, param2: java.util.Map<string,string>);
			public constructor(param0: string, param1: java.util.Map<string,string>);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoCodecStatus {
			public static class: java.lang.Class<org.webrtc.VideoCodecStatus>;
			public static REQUEST_SLI: org.webrtc.VideoCodecStatus;
			public static NO_OUTPUT: org.webrtc.VideoCodecStatus;
			public static OK: org.webrtc.VideoCodecStatus;
			public static ERROR: org.webrtc.VideoCodecStatus;
			public static LEVEL_EXCEEDED: org.webrtc.VideoCodecStatus;
			public static MEMORY: org.webrtc.VideoCodecStatus;
			public static ERR_PARAMETER: org.webrtc.VideoCodecStatus;
			public static ERR_SIZE: org.webrtc.VideoCodecStatus;
			public static TIMEOUT: org.webrtc.VideoCodecStatus;
			public static UNINITIALIZED: org.webrtc.VideoCodecStatus;
			public static ERR_REQUEST_SLI: org.webrtc.VideoCodecStatus;
			public static FALLBACK_SOFTWARE: org.webrtc.VideoCodecStatus;
			public static TARGET_BITRATE_OVERSHOOT: org.webrtc.VideoCodecStatus;
			public static values(): native.Array<org.webrtc.VideoCodecStatus>;
			public static valueOf(param0: string): org.webrtc.VideoCodecStatus;
			public getNumber(): number;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoCodecType {
			public static class: java.lang.Class<org.webrtc.VideoCodecType>;
			public static VP8: org.webrtc.VideoCodecType;
			public static VP9: org.webrtc.VideoCodecType;
			public static H264: org.webrtc.VideoCodecType;
			public static values(): native.Array<org.webrtc.VideoCodecType>;
			public static valueOf(param0: string): org.webrtc.VideoCodecType;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoDecoder {
			public static class: java.lang.Class<org.webrtc.VideoDecoder>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeVideoDecoder(): number;
				initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
				release(): org.webrtc.VideoCodecStatus;
				decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
				getPrefersLateDecoding(): boolean;
				getImplementationName(): string;
			});
			public constructor();
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
		}
		export module VideoDecoder {
			export class Callback {
				public static class: java.lang.Class<org.webrtc.VideoDecoder.Callback>;
				/**
				 * Constructs a new instance of the org.webrtc.VideoDecoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDecodedFrame(param0: org.webrtc.VideoFrame, param1: java.lang.Integer, param2: java.lang.Integer): void;
				});
				public constructor();
				public onDecodedFrame(param0: org.webrtc.VideoFrame, param1: java.lang.Integer, param2: java.lang.Integer): void;
			}
			export class DecodeInfo {
				public static class: java.lang.Class<org.webrtc.VideoDecoder.DecodeInfo>;
				public isMissingFrames: boolean;
				public renderTimeMs: number;
				public constructor(param0: boolean, param1: number);
			}
			export class Settings {
				public static class: java.lang.Class<org.webrtc.VideoDecoder.Settings>;
				public numberOfCores: number;
				public width: number;
				public height: number;
				public constructor(param0: number, param1: number, param2: number);
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoDecoderFactory {
			public static class: java.lang.Class<org.webrtc.VideoDecoderFactory>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoDecoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createDecoder(param0: string): org.webrtc.VideoDecoder;
				createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
				getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			});
			public constructor();
			public createDecoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoDecoder;
			public createDecoder(param0: string): org.webrtc.VideoDecoder;
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoDecoderFallback extends org.webrtc.WrappedNativeVideoDecoder {
			public static class: java.lang.Class<org.webrtc.VideoDecoderFallback>;
			public constructor(param0: org.webrtc.VideoDecoder, param1: org.webrtc.VideoDecoder);
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoDecoderWrapper {
			public static class: java.lang.Class<org.webrtc.VideoDecoderWrapper>;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoEncoder {
			public static class: java.lang.Class<org.webrtc.VideoEncoder>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoEncoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createNativeVideoEncoder(): number;
				isHardwareEncoder(): boolean;
				initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
				release(): org.webrtc.VideoCodecStatus;
				encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
				setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
				setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
				getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
				getImplementationName(): string;
			});
			public constructor();
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
		export module VideoEncoder {
			export class BitrateAllocation {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.BitrateAllocation>;
				public bitratesBbs: native.Array<native.Array<number>>;
				public constructor(param0: native.Array<native.Array<number>>);
				public getSum(): number;
			}
			export class Callback {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.Callback>;
				/**
				 * Constructs a new instance of the org.webrtc.VideoEncoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onEncodedFrame(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoEncoder.CodecSpecificInfo): void;
				});
				public constructor();
				public onEncodedFrame(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoEncoder.CodecSpecificInfo): void;
			}
			export class CodecSpecificInfo {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.CodecSpecificInfo>;
				public constructor();
			}
			export class CodecSpecificInfoH264 extends org.webrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.CodecSpecificInfoH264>;
				public constructor();
			}
			export class CodecSpecificInfoVP8 extends org.webrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.CodecSpecificInfoVP8>;
				public constructor();
			}
			export class CodecSpecificInfoVP9 extends org.webrtc.VideoEncoder.CodecSpecificInfo {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.CodecSpecificInfoVP9>;
				public constructor();
			}
			export class EncodeInfo {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.EncodeInfo>;
				public frameTypes: native.Array<org.webrtc.EncodedImage.FrameType>;
				public constructor(param0: native.Array<org.webrtc.EncodedImage.FrameType>);
			}
			export class ScalingSettings {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.ScalingSettings>;
				public on: boolean;
				public low: java.lang.Integer;
				public high: java.lang.Integer;
				public static OFF: org.webrtc.VideoEncoder.ScalingSettings;
				public constructor(param0: number, param1: number);
				public constructor(param0: boolean, param1: number, param2: number);
				public constructor(param0: boolean);
				public toString(): string;
			}
			export class Settings {
				public static class: java.lang.Class<org.webrtc.VideoEncoder.Settings>;
				public numberOfCores: number;
				public width: number;
				public height: number;
				public startBitrate: number;
				public maxFramerate: number;
				public automaticResizeOn: boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean);
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoEncoderFactory {
			public static class: java.lang.Class<org.webrtc.VideoEncoderFactory>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoEncoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
				getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			});
			public constructor();
			public getSupportedCodecs(): native.Array<org.webrtc.VideoCodecInfo>;
			public createEncoder(param0: org.webrtc.VideoCodecInfo): org.webrtc.VideoEncoder;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoEncoderFallback extends org.webrtc.WrappedNativeVideoEncoder {
			public static class: java.lang.Class<org.webrtc.VideoEncoderFallback>;
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public constructor(param0: org.webrtc.VideoEncoder, param1: org.webrtc.VideoEncoder);
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoEncoderWrapper {
			public static class: java.lang.Class<org.webrtc.VideoEncoderWrapper>;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoFileRenderer extends org.webrtc.VideoSink {
			public static class: java.lang.Class<org.webrtc.VideoFileRenderer>;
			public constructor(param0: string, param1: number, param2: number, param3: org.webrtc.EglBase.Context);
			public onFrame(param0: org.webrtc.VideoFrame): void;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoFrame extends org.webrtc.RefCounted {
			public static class: java.lang.Class<org.webrtc.VideoFrame>;
			public retain(): void;
			public constructor(param0: org.webrtc.VideoFrame.Buffer, param1: number, param2: number);
			public getBuffer(): org.webrtc.VideoFrame.Buffer;
			public getRotation(): number;
			public getTimestampNs(): number;
			public getRotatedWidth(): number;
			public getRotatedHeight(): number;
			public release(): void;
		}
		export module VideoFrame {
			export class Buffer extends org.webrtc.RefCounted {
				public static class: java.lang.Class<org.webrtc.VideoFrame.Buffer>;
				/**
				 * Constructs a new instance of the org.webrtc.VideoFrame$Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getWidth(): number;
					getHeight(): number;
					toI420(): org.webrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
				public toI420(): org.webrtc.VideoFrame.I420Buffer;
			}
			export class I420Buffer extends org.webrtc.VideoFrame.Buffer {
				public static class: java.lang.Class<org.webrtc.VideoFrame.I420Buffer>;
				/**
				 * Constructs a new instance of the org.webrtc.VideoFrame$I420Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDataY(): java.nio.ByteBuffer;
					getDataU(): java.nio.ByteBuffer;
					getDataV(): java.nio.ByteBuffer;
					getStrideY(): number;
					getStrideU(): number;
					getStrideV(): number;
					getWidth(): number;
					getHeight(): number;
					toI420(): org.webrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getDataU(): java.nio.ByteBuffer;
				public getDataV(): java.nio.ByteBuffer;
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public getDataY(): java.nio.ByteBuffer;
				public getStrideV(): number;
				public getStrideY(): number;
				public getStrideU(): number;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
				public toI420(): org.webrtc.VideoFrame.I420Buffer;
			}
			export class TextureBuffer extends org.webrtc.VideoFrame.Buffer {
				public static class: java.lang.Class<org.webrtc.VideoFrame.TextureBuffer>;
				/**
				 * Constructs a new instance of the org.webrtc.VideoFrame$TextureBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): org.webrtc.VideoFrame.TextureBuffer.Type;
					getTextureId(): number;
					getTransformMatrix(): globalAndroid.graphics.Matrix;
					getWidth(): number;
					getHeight(): number;
					toI420(): org.webrtc.VideoFrame.I420Buffer;
					retain(): void;
					release(): void;
					cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
					retain(): void;
					release(): void;
				});
				public constructor();
				public getTransformMatrix(): globalAndroid.graphics.Matrix;
				public getWidth(): number;
				public getHeight(): number;
				public release(): void;
				public getTextureId(): number;
				public retain(): void;
				public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
				public getType(): org.webrtc.VideoFrame.TextureBuffer.Type;
				public toI420(): org.webrtc.VideoFrame.I420Buffer;
			}
			export module TextureBuffer {
				export class Type {
					public static class: java.lang.Class<org.webrtc.VideoFrame.TextureBuffer.Type>;
					public static OES: org.webrtc.VideoFrame.TextureBuffer.Type;
					public static RGB: org.webrtc.VideoFrame.TextureBuffer.Type;
					public getGlTarget(): number;
					public static values(): native.Array<org.webrtc.VideoFrame.TextureBuffer.Type>;
					public static valueOf(param0: string): org.webrtc.VideoFrame.TextureBuffer.Type;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoFrameDrawer {
			public static class: java.lang.Class<org.webrtc.VideoFrameDrawer>;
			public drawFrame(param0: org.webrtc.VideoFrame, param1: org.webrtc.RendererCommon.GlDrawer): void;
			public drawFrame(param0: org.webrtc.VideoFrame, param1: org.webrtc.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix): void;
			public constructor();
			public drawFrame(param0: org.webrtc.VideoFrame, param1: org.webrtc.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix, param3: number, param4: number, param5: number, param6: number): void;
			public release(): void;
		}
		export module VideoFrameDrawer {
			export class YuvUploader {
				public static class: java.lang.Class<org.webrtc.VideoFrameDrawer.YuvUploader>;
				public uploadFromBuffer(param0: org.webrtc.VideoFrame.I420Buffer): native.Array<number>;
				public release(): void;
				public getYuvTextures(): native.Array<number>;
				public uploadYuvData(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<java.nio.ByteBuffer>): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoSink {
			public static class: java.lang.Class<org.webrtc.VideoSink>;
			/**
			 * Constructs a new instance of the org.webrtc.VideoSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onFrame(param0: org.webrtc.VideoFrame): void;
			});
			public constructor();
			public onFrame(param0: org.webrtc.VideoFrame): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoSource extends org.webrtc.MediaSource {
			public static class: java.lang.Class<org.webrtc.VideoSource>;
			public getCapturerObserver(): org.webrtc.CapturerObserver;
			public adaptOutputFormat(param0: number, param1: number, param2: number): void;
			public constructor(param0: number);
		}
	}
}

declare module org {
	export module webrtc {
		export class VideoTrack extends org.webrtc.MediaStreamTrack {
			public static class: java.lang.Class<org.webrtc.VideoTrack>;
			public addSink(param0: org.webrtc.VideoSink): void;
			public constructor(param0: number);
			public removeSink(param0: org.webrtc.VideoSink): void;
			public dispose(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export class WebRtcClassLoader {
			public static class: java.lang.Class<org.webrtc.WebRtcClassLoader>;
		}
	}
}

declare module org {
	export module webrtc {
		export class WrappedNativeI420Buffer extends org.webrtc.VideoFrame.I420Buffer {
			public static class: java.lang.Class<org.webrtc.WrappedNativeI420Buffer>;
			public getStrideV(): number;
			public getStrideU(): number;
			public getHeight(): number;
			public getDataU(): java.nio.ByteBuffer;
			public retain(): void;
			public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.webrtc.VideoFrame.Buffer;
			public getStrideY(): number;
			public getWidth(): number;
			public toI420(): org.webrtc.VideoFrame.I420Buffer;
			public getDataV(): java.nio.ByteBuffer;
			public getDataY(): java.nio.ByteBuffer;
			public release(): void;
		}
	}
}

declare module org {
	export module webrtc {
		export abstract class WrappedNativeVideoDecoder extends org.webrtc.VideoDecoder {
			public static class: java.lang.Class<org.webrtc.WrappedNativeVideoDecoder>;
			public initDecode(param0: org.webrtc.VideoDecoder.Settings, param1: org.webrtc.VideoDecoder.Callback): org.webrtc.VideoCodecStatus;
			public getImplementationName(): string;
			public createNativeVideoDecoder(): number;
			public getPrefersLateDecoding(): boolean;
			public decode(param0: org.webrtc.EncodedImage, param1: org.webrtc.VideoDecoder.DecodeInfo): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export abstract class WrappedNativeVideoEncoder extends org.webrtc.VideoEncoder {
			public static class: java.lang.Class<org.webrtc.WrappedNativeVideoEncoder>;
			public encode(param0: org.webrtc.VideoFrame, param1: org.webrtc.VideoEncoder.EncodeInfo): org.webrtc.VideoCodecStatus;
			public getScalingSettings(): org.webrtc.VideoEncoder.ScalingSettings;
			public getImplementationName(): string;
			public createNativeVideoEncoder(): number;
			public isHardwareEncoder(): boolean;
			public setChannelParameters(param0: number, param1: number): org.webrtc.VideoCodecStatus;
			public initEncode(param0: org.webrtc.VideoEncoder.Settings, param1: org.webrtc.VideoEncoder.Callback): org.webrtc.VideoCodecStatus;
			public release(): org.webrtc.VideoCodecStatus;
			public setRateAllocation(param0: org.webrtc.VideoEncoder.BitrateAllocation, param1: number): org.webrtc.VideoCodecStatus;
		}
	}
}

declare module org {
	export module webrtc {
		export class YuvConverter {
			public static class: java.lang.Class<org.webrtc.YuvConverter>;
			public constructor();
			public convert(param0: org.webrtc.VideoFrame.TextureBuffer): org.webrtc.VideoFrame.I420Buffer;
			public release(): void;
		}
		export module YuvConverter {
			export class ShaderCallbacks extends org.webrtc.GlGenericDrawer.ShaderCallbacks {
				public static class: java.lang.Class<org.webrtc.YuvConverter.ShaderCallbacks>;
				public setPlaneU(): void;
				public onPrepareShader(param0: org.webrtc.GlShader, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number): void;
				public onNewShader(param0: org.webrtc.GlShader): void;
				public setPlaneY(): void;
				public setPlaneV(): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export class YuvHelper {
			public static class: java.lang.Class<org.webrtc.YuvHelper>;
			public static copyPlane(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: number, param5: number): void;
			public static I420ToNV12(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number): void;
			public constructor();
			public static I420Copy(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: java.nio.ByteBuffer, param11: number, param12: number, param13: number): void;
			public static I420ToNV12(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: number, param11: number): void;
			public static I420Rotate(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.nio.ByteBuffer, param9: number, param10: java.nio.ByteBuffer, param11: number, param12: number, param13: number, param14: number): void;
			public static I420Copy(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number): void;
			public static I420Rotate(param0: java.nio.ByteBuffer, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: number, param9: number): void;
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class AudioDeviceModule {
				public static class: java.lang.Class<org.webrtc.audio.AudioDeviceModule>;
				/**
				 * Constructs a new instance of the org.webrtc.audio.AudioDeviceModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeAudioDeviceModulePointer(): number;
					release(): void;
					setSpeakerMute(param0: boolean): void;
					setMicrophoneMute(param0: boolean): void;
				});
				public constructor();
				public release(): void;
				public getNativeAudioDeviceModulePointer(): number;
				public setSpeakerMute(param0: boolean): void;
				public setMicrophoneMute(param0: boolean): void;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class JavaAudioDeviceModule extends org.webrtc.audio.AudioDeviceModule {
				public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule>;
				public static isBuiltInAcousticEchoCancelerSupported(): boolean;
				public release(): void;
				public getNativeAudioDeviceModulePointer(): number;
				public setSpeakerMute(param0: boolean): void;
				public setMicrophoneMute(param0: boolean): void;
				public static builder(param0: globalAndroid.content.Context): org.webrtc.audio.JavaAudioDeviceModule.Builder;
				public static isBuiltInNoiseSuppressorSupported(): boolean;
			}
			export module JavaAudioDeviceModule {
				export class AudioRecordErrorCallback {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.audio.JavaAudioDeviceModule$AudioRecordErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordInitError(param0: string): void;
						onWebRtcAudioRecordStartError(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode, param1: string): void;
						onWebRtcAudioRecordError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioRecordError(param0: string): void;
					public onWebRtcAudioRecordStartError(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode, param1: string): void;
					public onWebRtcAudioRecordInitError(param0: string): void;
				}
				export class AudioRecordStartErrorCode {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode>;
					public static AUDIO_RECORD_START_EXCEPTION: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
					public static AUDIO_RECORD_START_STATE_MISMATCH: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
					public static values(): native.Array<org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode>;
					public static valueOf(param0: string): org.webrtc.audio.JavaAudioDeviceModule.AudioRecordStartErrorCode;
				}
				export class AudioSamples {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.AudioSamples>;
					public getChannelCount(): number;
					public getData(): native.Array<number>;
					public getAudioFormat(): number;
					public getSampleRate(): number;
					public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);
				}
				export class AudioTrackErrorCallback {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.AudioTrackErrorCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.audio.JavaAudioDeviceModule$AudioTrackErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode, param1: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackStartError(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode, param1: string): void;
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
				export class AudioTrackStartErrorCode {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode>;
					public static AUDIO_TRACK_START_EXCEPTION: org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
					public static AUDIO_TRACK_START_STATE_MISMATCH: org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
					public static valueOf(param0: string): org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode;
					public static values(): native.Array<org.webrtc.audio.JavaAudioDeviceModule.AudioTrackStartErrorCode>;
				}
				export class Builder {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.Builder>;
					public setAudioTrackErrorCallback(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioTrackErrorCallback): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseHardwareAcousticEchoCanceler(param0: boolean): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioRecordErrorCallback(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseStereoInput(param0: boolean): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseHardwareNoiseSuppressor(param0: boolean): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setSampleRate(param0: number): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setAudioSource(param0: number): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setSamplesReadyCallback(param0: org.webrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public setUseStereoOutput(param0: boolean): org.webrtc.audio.JavaAudioDeviceModule.Builder;
					public createAudioDeviceModule(): org.webrtc.audio.AudioDeviceModule;
				}
				export class SamplesReadyCallback {
					public static class: java.lang.Class<org.webrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.audio.JavaAudioDeviceModule$SamplesReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordSamplesReady(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioSamples): void;
					});
					public constructor();
					public onWebRtcAudioRecordSamplesReady(param0: org.webrtc.audio.JavaAudioDeviceModule.AudioSamples): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class LegacyAudioDeviceModule extends org.webrtc.audio.AudioDeviceModule {
				public static class: java.lang.Class<org.webrtc.audio.LegacyAudioDeviceModule>;
				public release(): void;
				public getNativeAudioDeviceModulePointer(): number;
				public setSpeakerMute(param0: boolean): void;
				public setMicrophoneMute(param0: boolean): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class VolumeLogger {
				public static class: java.lang.Class<org.webrtc.audio.VolumeLogger>;
				public stop(): void;
				public start(): void;
				public constructor(param0: globalAndroid.media.AudioManager);
			}
			export module VolumeLogger {
				export class LogVolumeTask {
					public static class: java.lang.Class<org.webrtc.audio.VolumeLogger.LogVolumeTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class WebRtcAudioEffects {
				public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioEffects>;
				public static isNoiseSuppressorSupported(): boolean;
				public enable(param0: number): void;
				public release(): void;
				public static isAcousticEchoCancelerSupported(): boolean;
				public setAEC(param0: boolean): boolean;
				public setNS(param0: boolean): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class WebRtcAudioManager {
				public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioManager>;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class WebRtcAudioRecord {
				public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioRecord>;
				public static DEFAULT_AUDIO_SOURCE: number;
				public setNativeAudioRecord(param0: number): void;
				public setMicrophoneMute(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.media.AudioManager, param2: number, param3: org.webrtc.audio.JavaAudioDeviceModule.AudioRecordErrorCallback, param4: org.webrtc.audio.JavaAudioDeviceModule.SamplesReadyCallback, param5: boolean, param6: boolean);
			}
			export module WebRtcAudioRecord {
				export class AudioRecordThread {
					public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioRecord.AudioRecordThread>;
					public constructor(param0: org.webrtc.audio.WebRtcAudioRecord, param1: string);
					public run(): void;
					public stopThread(): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class WebRtcAudioTrack {
				public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioTrack>;
				public setSpeakerMute(param0: boolean): void;
				public setNativeAudioTrack(param0: number): void;
			}
			export module WebRtcAudioTrack {
				export class AudioTrackThread {
					public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioTrack.AudioTrackThread>;
					public run(): void;
					public constructor(param0: org.webrtc.audio.WebRtcAudioTrack, param1: string);
					public stopThread(): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module audio {
			export class WebRtcAudioUtils {
				public static class: java.lang.Class<org.webrtc.audio.WebRtcAudioUtils>;
				public static runningOnLollipopOrHigher(): boolean;
				public static runningOnJellyBeanMR2OrHigher(): boolean;
				public static runningOnOreoMR1OrHigher(): boolean;
				public static runningOnOreoOrHigher(): boolean;
				public static getThreadInfo(): string;
				public static runningOnEmulator(): boolean;
				public static runningOnMarshmallowOrHigher(): boolean;
				public static runningOnJellyBeanMR1OrHigher(): boolean;
				public static runningOnNougatOrHigher(): boolean;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class BuildInfo {
				public static class: java.lang.Class<org.webrtc.voiceengine.BuildInfo>;
				public static getDevice(): string;
				public static getBuildType(): string;
				public static getSdkVersion(): number;
				public static getAndroidBuildId(): string;
				public static getProduct(): string;
				public static getDeviceManufacturer(): string;
				public static getDeviceModel(): string;
				public constructor();
				public static getBrand(): string;
				public static getBuildRelease(): string;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class WebRtcAudioEffects {
				public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioEffects>;
				public static canUseAcousticEchoCanceler(): boolean;
				public static isNoiseSuppressorSupported(): boolean;
				public static canUseNoiseSuppressor(): boolean;
				public enable(param0: number): void;
				public release(): void;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static isAcousticEchoCancelerBlacklisted(): boolean;
				public static isNoiseSuppressorBlacklisted(): boolean;
				public setAEC(param0: boolean): boolean;
				public static create(): org.webrtc.voiceengine.WebRtcAudioEffects;
				public setNS(param0: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class WebRtcAudioManager {
				public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioManager>;
				public static setStereoInput(param0: boolean): void;
				public static getStereoInput(): boolean;
				public isLowLatencyInputSupported(): boolean;
				public static setStereoOutput(param0: boolean): void;
				public static getStereoOutput(): boolean;
				public static setBlacklistDeviceForOpenSLESUsage(param0: boolean): void;
			}
			export module WebRtcAudioManager {
				export class VolumeLogger {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioManager.VolumeLogger>;
					public constructor(param0: globalAndroid.media.AudioManager);
					public start(): void;
				}
				export module VolumeLogger {
					export class LogVolumeTask {
						public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioManager.VolumeLogger.LogVolumeTask>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class WebRtcAudioRecord {
				public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord>;
				public static setAudioSource(param0: number): void;
				public static setErrorCallback(param0: org.webrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback): void;
				public static setOnAudioSamplesReady(param0: org.webrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordSamplesReadyCallback): void;
				public static setMicrophoneMute(param0: boolean): void;
			}
			export module WebRtcAudioRecord {
				export class AudioRecordStartErrorCode {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode>;
					public static AUDIO_RECORD_START_EXCEPTION: org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static AUDIO_RECORD_START_STATE_MISMATCH: org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static valueOf(param0: string): org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode;
					public static values(): native.Array<org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode>;
				}
				export class AudioRecordThread {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordThread>;
					public constructor(param0: org.webrtc.voiceengine.WebRtcAudioRecord, param1: string);
					public run(): void;
					public stopThread(): void;
				}
				export class AudioSamples {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord.AudioSamples>;
					public getChannelCount(): number;
					public getData(): native.Array<number>;
					public getAudioFormat(): number;
					public getSampleRate(): number;
				}
				export class WebRtcAudioRecordErrorCallback {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordErrorCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.voiceengine.WebRtcAudioRecord$WebRtcAudioRecordErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordInitError(param0: string): void;
						onWebRtcAudioRecordStartError(param0: org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
						onWebRtcAudioRecordError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioRecordError(param0: string): void;
					public onWebRtcAudioRecordStartError(param0: org.webrtc.voiceengine.WebRtcAudioRecord.AudioRecordStartErrorCode, param1: string): void;
					public onWebRtcAudioRecordInitError(param0: string): void;
				}
				export class WebRtcAudioRecordSamplesReadyCallback {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioRecord.WebRtcAudioRecordSamplesReadyCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.voiceengine.WebRtcAudioRecord$WebRtcAudioRecordSamplesReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioRecordSamplesReady(param0: org.webrtc.voiceengine.WebRtcAudioRecord.AudioSamples): void;
					});
					public constructor();
					public onWebRtcAudioRecordSamplesReady(param0: org.webrtc.voiceengine.WebRtcAudioRecord.AudioSamples): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class WebRtcAudioTrack {
				public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioTrack>;
				public static setErrorCallback(param0: org.webrtc.voiceengine.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback): void;
				public static setAudioTrackUsageAttribute(param0: number): void;
				public static setErrorCallback(param0: org.webrtc.voiceengine.WebRtcAudioTrack.ErrorCallback): void;
				public static setSpeakerMute(param0: boolean): void;
			}
			export module WebRtcAudioTrack {
				export class AudioTrackStartErrorCode {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode>;
					public static AUDIO_TRACK_START_EXCEPTION: org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
					public static AUDIO_TRACK_START_STATE_MISMATCH: org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
					public static values(): native.Array<org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode>;
					public static valueOf(param0: string): org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode;
				}
				export class AudioTrackThread {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackThread>;
					public run(): void;
					public stopThread(): void;
					public constructor(param0: org.webrtc.voiceengine.WebRtcAudioTrack, param1: string);
				}
				export class ErrorCallback {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioTrack.ErrorCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.voiceengine.WebRtcAudioTrack$ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode, param1: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackStartError(param0: org.webrtc.voiceengine.WebRtcAudioTrack.AudioTrackStartErrorCode, param1: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
				export class WebRtcAudioTrackErrorCallback {
					public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioTrack.WebRtcAudioTrackErrorCallback>;
					/**
					 * Constructs a new instance of the org.webrtc.voiceengine.WebRtcAudioTrack$WebRtcAudioTrackErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWebRtcAudioTrackInitError(param0: string): void;
						onWebRtcAudioTrackStartError(param0: string): void;
						onWebRtcAudioTrackError(param0: string): void;
					});
					public constructor();
					public onWebRtcAudioTrackStartError(param0: string): void;
					public onWebRtcAudioTrackInitError(param0: string): void;
					public onWebRtcAudioTrackError(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module webrtc {
		export module voiceengine {
			export class WebRtcAudioUtils {
				public static class: java.lang.Class<org.webrtc.voiceengine.WebRtcAudioUtils>;
				public static deviceIsBlacklistedForOpenSLESUsage(): boolean;
				public static useWebRtcBasedNoiseSuppressor(): boolean;
				public static isAcousticEchoCancelerSupported(): boolean;
				public static runningOnOreoMR1OrHigher(): boolean;
				public static setDefaultSampleRateHz(param0: number): void;
				public static runningOnOreoOrHigher(): boolean;
				public static getThreadInfo(): string;
				public static useWebRtcBasedAutomaticGainControl(): boolean;
				public constructor();
				public static runningOnEmulator(): boolean;
				public static useWebRtcBasedAcousticEchoCanceler(): boolean;
				public static runningOnJellyBeanMR1OrHigher(): boolean;
				public static isDefaultSampleRateOverridden(): boolean;
				public static getBlackListedModelsForAecUsage(): java.util.List<string>;
				public static runningOnLollipopOrHigher(): boolean;
				public static runningOnJellyBeanMR2OrHigher(): boolean;
				public static getDefaultSampleRateHz(): number;
				public static runningOnNougatOrHigher(): boolean;
				public static setWebRtcBasedAutomaticGainControl(param0: boolean): void;
				public static isNoiseSuppressorSupported(): boolean;
				public static isAutomaticGainControlSupported(): boolean;
				public static setWebRtcBasedAcousticEchoCanceler(param0: boolean): void;
				public static runningOnMarshmallowOrHigher(): boolean;
				public static setWebRtcBasedNoiseSuppressor(param0: boolean): void;
				public static getBlackListedModelsForNsUsage(): java.util.List<string>;
			}
		}
	}
}

//Generics information:
//org.webrtc.CameraEnumerationAndroid.ClosestComparator:1

