declare module co {
	export module fitcom {
		export module fancywebrtc {
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

declare module co {
	export module fitcom {
		export module fancywebrtc {
			export class FancyWebRTC {
				public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTC>;
				public static WEBRTC_PERMISSIONS: native.Array<string>;
				public static WEBRTC_PERMISSIONS_REQUEST_CODE: number;
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
			export module FancyWebRTC {
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

declare module co {
	export module fitcom {
		export module fancywebrtc {
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

declare module co {
	export module fitcom {
		export module fancywebrtc {
			export class FancyWebRTCEglUtils {
				public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCEglUtils>;
				public static getRootEglBaseContext(): org.webrtc.EglBase.Context;
				public static getRootEglBase(): org.webrtc.EglBase;
				public constructor();
			}
		}
	}
}

declare module co {
	export module fitcom {
		export module fancywebrtc {
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
					webRTCClientDidReceiveRemoteVideoTrackStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.VideoTrack, param2: org.webrtc.MediaStream): void;
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
				public webRTCClientOnIceConnectionReceivingChange(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: boolean): void;
				public webRTCClientDataChannelMessageType(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: string, param2: string, param3: co.fitcom.fancywebrtc.FancyWebRTC.DataChannelMessageType): void;
				public webRTCClientOnRemoveStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.MediaStream): void;
				public webRTCClientDidReceiveRemoteVideoTrackStream(param0: co.fitcom.fancywebrtc.FancyWebRTC, param1: org.webrtc.VideoTrack, param2: org.webrtc.MediaStream): void;
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
			export module FancyWebRTCListener {
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

declare module co {
	export module fitcom {
		export module fancywebrtc {
			export class FancyWebRTCView {
				public static class: java.lang.Class<co.fitcom.fancywebrtc.FancyWebRTCView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public setMirror(param0: boolean): void;
				public setVideoTrack(param0: org.webrtc.VideoTrack): void;
			}
		}
	}
}

//Generics information:

