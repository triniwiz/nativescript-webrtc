import { TNSRTCMediaStreamTrackBase } from '../base/TNSRTCMediaStreamTrackBase';
export declare class TNSRTCMediaStreamTrack extends TNSRTCMediaStreamTrackBase {
    private _mediaStreamTrack;
    constructor(mediaStreamTrack: any);
    readonly id: string;
    enabled: boolean;
    readonly kind: string;
    readonly readyState: string;
    readonly mute: boolean;
    readonly ios: any;
    readonly instance: any;
    readonly mediaStreamTrack: any;
    dispose(): void;
    static fromNative(mediaStreamTrack: any): TNSRTCMediaStreamTrack;
}
