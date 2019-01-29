declare let io;
let socket = io('http://192.168.0.10:3001', {
  transports: ['websocket'],
  upgrade: false
});
let localStream: MediaStream;
let connection: RTCPeerConnection;
let isInitiator = false;
let remoteIceCandidates = [];
let inCall = false;
let localVideo;
let remoteVideo;
function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const me = getUUID();
const iceServers: RTCIceServer[] = [];
const turnServerOne: RTCIceServer = {
  urls: ['turn:192.158.29.39:3478?transport=udp'],
  username: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
  credential: '28224511:1379330808',
  credentialType: 'password'
};
const turnServerTwo: RTCIceServer = {
  urls: ['turn:192.158.29.39:3478?transport=tcp'],
  username: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
  credential: '28224511:1379330808'
};
const turnServerThree: RTCIceServer = {
  urls: ['turn:numb.viagenie.ca'],
  username: 'muazkh',
  credential: 'webrtc@live.com'
};
iceServers.push(turnServerOne);
iceServers.push(turnServerTwo);
iceServers.push(turnServerThree);
connection = new RTCPeerConnection();
connection.onconnectionstatechange = e => {
  console.log('onconnectionstatechange', connection.iceConnectionState);
};
connection.ontrack = event => {
  const stream = event.streams[0];
  console.log('ontrack' + stream);
  remoteVideo.srcObject = event.streams[0];
};
connection.onicecandidate = event => {
  const candidate = event.candidate;
  if (!candidate) return;
  const object = {};
  object['from'] = me;
  object['sdp'] = candidate.candidate;
  object['sdpMid'], candidate.sdpMid;
  object['sdpMLineIndex'], candidate.sdpMLineIndex;
  object['serverUrl'], candidate.relatedAddress;
  socket.emit('iceCandidate', object);
  console.log('setOnIceCandidateListener ' + candidate);
};

window.onload = event => {
  localVideo = document.getElementById('localVideo');
  remoteVideo = document.getElementById('remoteVideo');
  init();
};

async function init() {
  socket.on('call:incoming', args => {
    const object = args;
    const from = object['from'];
    const session = object['sdp'];
    const to = object['to'];
    console.log('call:incoming' + ' to: ' + to + ' from: ' + from);
    if (to.indexOf(me) > -1) {
      if (localStream != null) {
        for (let track of localStream.getVideoTracks()) {
          connection.addTrack(track, localStream);
        }
        for (let track of localStream.getAudioTracks()) {
          connection.addTrack(track, localStream);
        }
      }
      const sdp = new RTCSessionDescription({ sdp: session, type: 'offer' });
      createAnswerForOfferReceived(sdp);
    }
  });

  socket.on('call:answer', args => {
    const object = args;
    const from = object['from'];
    const session = object['sdp'];
    const to = object['to'];
    console.log('call:answer');
    console.log('me : ' + me + ' from: ' + from + ' to: ' + to);
    if (to.indexOf(me) > -1) {
      console.log(me);
      const sdp = new RTCSessionDescription({ type: 'offer', sdp: session });
      createAnswerForOfferReceived(sdp);
    }
  });

  socket.on('call:answered', args => {
    const object = args;
    const from = object['from'];
    const session = object['sdp'];
    const to = object['to'];
    if (to.indexOf(me) > -1) {
      console.log('call:answered');
      const sdp = new RTCSessionDescription({ type: 'answer', sdp: session });
      handleAnswerReceived(sdp);
      // dataChannelCreate("osei");
      // dataChannelSend("osei", "Test", FancyWebRTC.DataChannelMessageType.TEXT);
    }
  });

  socket.on('call:iceCandidate', args => {
    console.log('call:iceCandidate');
    const object = args;

    const from = object['from'];
    const session = object['sdp'];
    const to = object['to'];
    const sdpMid = object['sdpMid'];
    const sdpMLineIndex = object['sdpMLineIndex'];
    const serverUrl = object['serverUrl'];

    if (to.indexOf(me) > -1) {
      const candidate = new RTCIceCandidate({
        candidate: session,
        sdpMid,
        sdpMLineIndex
      });
      connection.addIceCandidate(candidate);
    }
  });

  socket.on('connect', args => {
    const object = {};
    object['id'] = me;
    socket.emit('init', object);
  });

  socket.connect();

  localStream = await (navigator as any).mediaDevices.getUserMedia({
    audio: true,
    video: true
  });

  localVideo.srcObject = localStream;
  const hangUp = document.getElementById('hangUp');
  const call = document.getElementById('call');
  const answer = document.getElementById('answer');
  const switchCamera = document.getElementById('switch');
  hangUp.addEventListener('click', event => {
    endCall(event);
  });

  call.addEventListener('click', event => {
    makeCall(event);
  });

  answer.addEventListener('click', event => {});

  switchCamera.addEventListener('click', event => {});
}
let localTracksAdded = false;
async function makeCall(event) {
  console.log('makeCall ' + connection);
  if (connection != null) {
    isInitiator = true;
    if (localStream != null) {
      for (let track of localStream.getVideoTracks()) {
        connection.addTrack(track, localStream);
      }
      for (let track of localStream.getAudioTracks()) {
        connection.addTrack(track, localStream);
      }
    }
    const description = await connection.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    });
    setInitiatorLocalSdp(description);
  }
}

async function setInitiatorLocalSdp(sdp) {
  if (connection == null) return;
  if (
    connection.localDescription != null &&
    (connection.localDescription.type === 'answer' && sdp.type === 'answer')
  )
    return;
  console.log('setInitiatorLocalSdp');
  await connection.setLocalDescription(sdp);
  console.log(' setInitiatorLocalSdp : success');
  sendInitiatorSdp(sdp);
}

async function sendInitiatorSdp(sdp: RTCSessionDescription) {
  console.log('sendInitiatorSdp' + ' type: ' + sdp.type);
  const object = {};
  object['from'] = me;
  object['sdp'] = sdp.sdp;
  socket.emit('call', object);
}

async function createAnswerForOfferReceived(remoteSdp) {
  if (connection == null || remoteSdp == null) return;
  /* if (connection.getRemoteDescription() != null && (connection.getRemoteDescription().getType() == FancyRTCSdpType.ANSWER && remoteSdp.getType() == FancyRTCSdpType.ANSWER))
        return;
    */

  await connection.setRemoteDescription(remoteSdp);
  console.log('createAnswerForOfferReceived: success');
  handleRemoteDescriptionSet();
  const description = await connection.createAnswer({
    offerToReceiveVideo: true,
    offerToReceiveAudio: true
  });
  console.log('createAnswer: success');
  setNonInitiatorLocalSdp(description);
}

async function setNonInitiatorLocalSdp(sdp) {
  if (connection == null) return;
  if (
    connection.localDescription != null &&
    (connection.localDescription.type === 'answer' && sdp.type === 'answer')
  )
    return;
  console.log(' setNonInitiatorLocalSdp ');
  await connection.setLocalDescription(sdp);
  console.log(' setNonInitiatorLocalSdp : success');
  sendNonInitiatorSdp(sdp);
}
async function sendNonInitiatorSdp(sdp) {
  console.log('sendNonInitiatorSdp' + ' type: ' + sdp.type);
  const object = {};
  object['from'] = me;
  object['sdp'] = sdp.sdp; // ???
  /* handleAnswerReceived(sdp); */ socket.emit('answered', object);
}

function handleRemoteDescriptionSet() {
  for (let iceCandidate of remoteIceCandidates) {
    connection.addIceCandidate(iceCandidate);
  }
  remoteIceCandidates = [];
}

function endCall(event) {
  connection.close();
}

async function handleAnswerReceived(sdp) {
  if (connection == null || sdp == null || inCall) return;
  console.log('handleAnswerReceived ' + sdp);
  const newSdp = new RTCSessionDescription({ type: 'answer', sdp: sdp.sdp });
  await connection.setRemoteDescription(newSdp);
  console.log('handleAnswerReceived: SUCCESS');
  inCall = true;
}
