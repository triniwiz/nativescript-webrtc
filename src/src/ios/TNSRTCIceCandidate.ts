import { TNSRTCIceCandidateBase } from '../base/TNSRTCIceCandidateBase';

export class TNSRTCIceCandidate extends TNSRTCIceCandidateBase {
    _iceCandidate;

    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number) {
        super(sdp, sdpMid, sdpMLineIndex);
        this._iceCandidate = FancyRTCIceCandidate.alloc().initWithSdpSdpMidSdpMLineIndex(sdp, sdpMid, sdpMLineIndex);
    }

    public static fromNative(candidate) {
        return new TNSRTCIceCandidate(candidate.sdp, candidate.sdpMid, candidate.sdpMLineIndex);
    }

    get candidate(): string {
        return this._iceCandidate.candidate;
    }

    get sdp(): string {
        return this._iceCandidate.sdp;
    }

    get sdpMid(): string | null {
        return this._iceCandidate.sdpMid;
    }

    get sdpMLineIndex(): number {
        return this._iceCandidate.sdpMLineIndex;
    }

    get usernameFragment(): string {
        return this._iceCandidate.usernameFragment;
    }

    get serverUrl(): string {
        return this._iceCandidate.serverUrl;
    }

    get ios() {
        return this._iceCandidate.iceCandidate;
    }

    get instance() {
        return this._iceCandidate;
    }
}
