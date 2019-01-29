export abstract class TNSRTCIceCandidateBase {
    _iceCandidate;
    candidate: string;
    sdp: string;
    sdpMid: string | null;
    sdpMLineIndex: number;
    usernameFragment: string;
    serverUrl: string;

    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number) {
    }
}
