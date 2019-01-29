import { TNSRTCSdpType } from './TNSRTCSdpType';
export declare class TNSRTCSessionDescription {
    private _sessionDescription;
    constructor(...args: any[]);
    readonly type: TNSRTCSdpType;
    static fromNative(sdp: any): TNSRTCSessionDescription;
    readonly sdp: string;
    toJSON(): string;
    readonly instance: any;
    readonly ios: any;
}
