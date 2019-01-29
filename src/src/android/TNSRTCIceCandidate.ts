import { TNSRTCIceCandidateBase } from '../base/TNSRTCIceCandidateBase';

export class TNSRTCIceCandidate extends TNSRTCIceCandidateBase {
    _iceCandidate;

    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number) {
        super(sdp, sdpMid, sdpMLineIndex);
        this._iceCandidate = new co.fitcom.fancywebrtc.FancyRTCIceCandidate(sdp, sdpMid, sdpMLineIndex);
    }

    public static fromNative(candidate) {
        return new TNSRTCIceCandidate(candidate.getSdp(), candidate.getSdpMid(), candidate.getSdpMLineIndex());
    }

    get candidate(): string {
        return this._iceCandidate.getCandidate();
    }

    get sdp(): string {
        return this._iceCandidate.getSdp();
    }

    get sdpMid(): string | null {
        return this._iceCandidate.getSdpMid();
    }

    get sdpMLineIndex(): number {
        return this._iceCandidate.getSdpMLineIndex();
    }

    get usernameFragment(): string {
        return this._iceCandidate.getUsernameFragment();
    }

    get serverUrl(): string {
        return this._iceCandidate.getServerUrl();
    }

    get android() {
        return this._iceCandidate.getIceCandidate();
    }

    get instance() {
        return this._iceCandidate;
    }
}
