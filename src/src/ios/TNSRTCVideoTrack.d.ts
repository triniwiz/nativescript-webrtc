import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
export declare class TNSRTCVideoTrack extends TNSRTCMediaStreamTrack {
    private _videoTrack;
    constructor(track: any);
    static fromNative(track: any): TNSRTCVideoTrack;
    readonly ios: any;
    readonly instance: any;
}
