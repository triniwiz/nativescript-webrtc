import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';
import { TNSRTCRtpReceiverBase } from './TNSRTCRtpReceiverBase';
import { TNSRTCRtpSenderBase } from './TNSRTCRtpSenderBase';

export abstract class TNSRTCRtpTransceiverBase {
    constructor(transceiver) {
    }

    public get direction(): TNSRTCRtpTransceiverDirection { return undefined; }

    public get currentDirection(): TNSRTCRtpTransceiverDirection { return undefined; }

    public get mid(): string { return undefined; }

    public get receiver(): TNSRTCRtpReceiverBase { return undefined; }

    public get sender(): TNSRTCRtpSenderBase { return undefined; }

    public get stopped(): boolean { return undefined; }

    public abstract stop(): void;
}
