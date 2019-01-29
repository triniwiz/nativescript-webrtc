# NativeScript WebRTC

[![npm](https://img.shields.io/npm/v/nativescript-webrtc-plugin.svg)](https://www.npmjs.com/package/nativescript-webrtc-plugin)
[![npm](https://img.shields.io/npm/dt/nativescript-webrtc-plugin.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-webrtc-plugin)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-webrtc.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-webrtc)

## Installation

- `tns plugin add nativescript-webrtc-plugin`

```typescript
import { WebRTC } from 'nativescript-webrtc-plugin';
WebRTC.init(); // <= Try calling this in you app.js or app.ts or main.ts
```

### How to make a call


**IMPORTANT**: Make sure you include xmlns:webrtc="nativescript-webrtc-plugin" on the Page element

```xml
<webrtc:WebRTCView id="remoteVideoView" height="50%" />
<webrtc:WebRTCView  id="localVideoView" height="50%" />
```


#### Using Angular ? 


Import the WebRTCModule from nativescript-webrtc-plugin/angular and add it to the imports of your initial @NgModule, like shown [here](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo-ng/app/app.module.ts#L23).


#### Vue
```js
import Vue from 'nativescript-vue';
import WebRTCView from 'nativescript-webrtc-plugin/vue';

Vue.use(WebRTCView);

```


```html
<WebRTCView #remoteVideoView height="50%" ></WebRTCView>
<WebRTCView #localVideoView height="50%" ></WebRTCView>
```

## Basic Api

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



## Standard Api
This api is similar to the webrtc browser api -> [example](demo/app/standard/standard-vm.ts)


### Using demo

**Note** the demo can be ran on a device w/o a camera but you will need to disable the video option [here](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo/app/call-view-model.ts#L50) an [here](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo/app/call-view-model.ts#L129) for core or [here](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo-ng/app/call.service.ts#L155) an [here](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo-ng/app/call.service.ts#L89) for angular  also the app connects to remote [stun server(s)](https://www.3cx.com/pbx/what-is-a-stun-server/) so internet connection is needed.


1. Start demo-server by running `npm i && node app`

2. Edit the [socket-server.ts ](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo/app/socket-server.ts#L8) or [environment.ts](https://github.com/triniwiz/nativescript-webrtc/blob/master/demo-ng/app/environment.ts#L1) to point to your computer's local ip where the demo-server is running

3. Run the demo/demo-ng enter usernames on both device then tap on the username of the other device the demo will auto answer the call . 🙂


## License

Apache License Version 2.0, January 2004
