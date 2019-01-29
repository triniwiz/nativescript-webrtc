import { TNSRTCMediaStreamTrackBase } from './TNSRTCMediaStreamTrackBase';
import { TNSRTCMediaStreamBase } from './TNSRTCMediaStreamBase';
import { TNSRTCRtpReceiverBase } from './TNSRTCRtpReceiverBase';
import { TNSRTCRtpTransceiverBase } from './TNSRTCRtpTransceiverBase';

export class TNSRTCTrackEventBase {
    mediaTrack: TNSRTCMediaStreamTrackBase;
    transceiver: TNSRTCRtpTransceiverBase;
    receiver: TNSRTCRtpReceiverBase;
    streams: Array<TNSRTCMediaStreamBase>;

    constructor(event) {
    }
}
