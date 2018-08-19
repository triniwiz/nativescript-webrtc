# NativeScript WebRTC

[![npm](https://img.shields.io/npm/v/nativescript-webrtc-plugin.svg)](https://www.npmjs.com/package/nativescript-webrtc-plugin)
[![npm](https://img.shields.io/npm/dt/nativescript-webrtc-plugin.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-webrtc-plugin)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-webrtc-plugin.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-webrtc-plugin)

## Installation

- `tns plugin add nativescript-webrtc-plugin`

```typescript
import { WebRTC } from 'nativescript-webrtc-plugin';
WebRTC.init(); // <= Try calling this in you app.js or app.ts or main.ts
```

### How to make a call


**IMPORTANT**: Make sure you include xmlns:webrtc="nativescript-webrtc-plugin" on the Page element any element can be used in the pager

```xml
<webrtc:WebRTCView id="remoteVideoView" height="50%" />
<webrtc:WebRTCView  id="localVideoView" height="50%" />
```

**Caller**

```typescript
import { WebRTC } from 'nativescript-webrtc-plugin';
const webrtc = new WebRTC({
  enableAudio: true, // default true
  enableVideo: false, // default true
  iceServers: [
    // Optional defaults to google stun servers
    {
      url: 'stun:stun.l.google.com:19302'
    },
    {
      url: 'serverRequiresAuth',
      username: 'username',
      password: 'password'
    }
  ]
});

webrtc.on('webRTCClientDidReceiveRemoteVideoTrackStream', args => {
  const object = args.object;
  const remoteVideoTrack = object.get('remoteVideoTrack');
  remoteStream = object.get('stream');
  const video = frame.topmost().getViewById('remoteVideoView') as WebRTCView;
  video.videoTrack = remoteVideoTrack;
});

webrtc.on('webRTCClientStartCallWithSdp', args => {
  const sdp = args.object.get('sdp');
  const type = args.object.get('type');
  if (type === 'answer') {
    webrtc.handleAnswerReceived({
      sdp: sdp,
      type: type
    });
  } else {
    // send data to signaling server
  }
});

webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
  const iceCandidate = args.object.get('iceCandidate');
  // send data to signaling server
});

// Before using getUserMedia verify the app has the permissions and if not try requesting them

if (!WebRTC.hasPermissions()) {
  try {
    await WebRTC.requestPermissions();
    localStream = await webrtc.getUserMedia(Quality.HIGHEST);
  } catch (e) {}
}

webrtc.connect();
webrtc.addLocalStream(localStream);
webrtc.makeOffer();
```

**Callee**

```typescript
import { WebRTC } from 'nativescript-webrtc-plugin';
const webrtc = new WebRTC({
  enableAudio: true, // default true
  enableVideo: false, // default true
  iceServers: [
    // Optional defaults to google stun servers
    {
      url: 'stun:stun.l.google.com:19302'
    },
    {
      url: 'serverRequiresAuth',
      username: 'username',
      password: 'password'
    }
  ]
});

webrtc.on('webRTCClientStartCallWithSdp', args => {
  const sdp = args.object.get('sdp');
  const type = args.object.get('type') as WebRTCSdpType;
  if (type === WebRTCSdpType.ANSWER) {
    // send data to signaling server
  }
});

webrtc.on('webRTCClientDidGenerateIceCandidate', args => {
  const iceCandidate = args.object.get('iceCandidate');
  // send data to signaling server
});

// Before using getUserMedia verify the app has the permissions and if not try requesting them

if (!WebRTC.hasPermissions()) {
  try {
    await WebRTC.requestPermissions();
    localStream = await webrtc.getUserMedia(Quality.HIGHEST);
  } catch (e) {}
}

webrtc.connect();
webrtc.addLocalStream(localStream);
// sdp received from the signaling server
webrtc.createAnswerForOfferReceived({
  type: sdp.type,
  sdp: sdp.sdp
});
```

## License

Apache License Version 2.0, January 2004
