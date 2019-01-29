import { TNSRTCIceCandidateBase } from '../base/TNSRTCIceCandidateBase';
export declare class TNSRTCIceCandidate extends TNSRTCIceCandidateBase {
    _iceCandidate: any;
    constructor(sdp: string, sdpMid: string | null, sdpMLineIndex: number);
    static fromNative(candidate: any): TNSRTCIceCandidate;
    readonly candidate: string;
    readonly sdp: string;
    readonly sdpMid: string | null;
    readonly sdpMLineIndex: number;
    readonly usernameFragment: string;
    readonly serverUrl: string;
    readonly ios: any;
    readonly instance: any;
}
