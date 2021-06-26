export abstract class TNSRTCIceCandidateBase {
    _iceCandidate;
    get candidate(): string { return undefined; }
    get sdp(): string { return undefined; }
    get sdpMid(): string | null { return undefined; }
    get sdpMLineIndex(): number { return undefined; }
    get usernameFragment(): string { return undefined; }
    get serverUrl(): string { return undefined; }

    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number) {
    }
}
