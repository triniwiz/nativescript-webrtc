import { TNSRTCSdpType } from './TNSRTCSdpType';
export declare class TNSRTCSessionDescription {
    private _sessionDescription;
    constructor(...args: any[]);
    static fromNative(sdp: any): TNSRTCSessionDescription;
    readonly type: TNSRTCSdpType;
    readonly sdp: string;
    toJSON(): string;
    readonly instance: any;
    readonly android: any;
}
