import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
export declare class TNSRTCAudioTrack extends TNSRTCMediaStreamTrack {
    private _audioTrack;
    constructor(track: any);
    static fromNative(track: any): TNSRTCAudioTrack;
    readonly android: any;
    readonly instance: any;
    volume: number;
}
