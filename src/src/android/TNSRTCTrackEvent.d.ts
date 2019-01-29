import { TNSRTCTrackEventBase } from '../base/TNSRTCTrackEventBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCRtpTransceiver } from './TNSRTCRtpTransceiver';
import { TNSRTCRtpReceiver } from './TNSRTCRtpReceiver';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';
export declare class TNSRTCTrackEvent extends TNSRTCTrackEventBase {
    private _event;
    constructor(event: any);
    readonly mediaTrack: TNSRTCMediaStreamTrack;
    readonly transceiver: TNSRTCRtpTransceiver;
    readonly receiver: TNSRTCRtpReceiver;
    readonly streams: Array<TNSRTCMediaStream>;
    static fromNative(event: any): TNSRTCTrackEvent;
}
