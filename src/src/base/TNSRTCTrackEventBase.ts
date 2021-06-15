import { TNSRTCMediaStreamTrackBase } from './TNSRTCMediaStreamTrackBase';
import { TNSRTCMediaStreamBase } from './TNSRTCMediaStreamBase';
import { TNSRTCRtpReceiverBase } from './TNSRTCRtpReceiverBase';
import { TNSRTCRtpTransceiverBase } from './TNSRTCRtpTransceiverBase';

export class TNSRTCTrackEventBase {
    public get mediaTrack(): TNSRTCMediaStreamTrackBase { return undefined; }
    public get transceiver(): TNSRTCRtpTransceiverBase { return undefined; }
    public get receiver(): TNSRTCRtpReceiverBase { return undefined; }
    public get streams(): Array<TNSRTCMediaStreamBase> { return undefined; }

    constructor(event) {
    }
}
