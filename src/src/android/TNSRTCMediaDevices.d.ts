import { TNSRTCMediaStreamConstraints } from './TNSRTCMediaStreamConstraints';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';
export declare class TNSRTCMediaDevices {
    static getUserMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream>;
}
