export declare abstract class TNSRTCIceCandidateBase {
    _iceCandidate: any;
    candidate: string;
    sdp: string;
    sdpMid: string | null;
    sdpMLineIndex: number;
    usernameFragment: string;
    serverUrl: string;
    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number);
}
