import { TNSRTCVideoTrack } from './TNSRTCVideoTrack';
import { TNSRTCAudioTrack } from './TNSRTCAudioTrack';
import { TNSRTCMediaStreamBase } from '../base/TNSRTCMediaStreamBase';
export declare class TNSRTCMediaStream extends TNSRTCMediaStreamBase {
    private _stream;
    private constructor();
    readonly id: string;
    readonly videoTracks: Array<TNSRTCVideoTrack>;
    readonly audioTracks: Array<TNSRTCAudioTrack>;
    addTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void;
    removeTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void;
    static fromNative(stream: any): TNSRTCMediaStream;
    readonly instance: any;
    readonly android: any;
}
