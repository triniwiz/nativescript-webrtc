import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';
import { TNSRTCRtpReceiverBase } from './TNSRTCRtpReceiverBase';
import { TNSRTCRtpSenderBase } from './TNSRTCRtpSenderBase';

export abstract class TNSRTCRtpTransceiverBase {
    constructor(transceiver) {
    }

    public direction: TNSRTCRtpTransceiverDirection;

    public currentDirection: TNSRTCRtpTransceiverDirection;

    public mid: string;

    public receiver: TNSRTCRtpReceiverBase;

    public sender: TNSRTCRtpSenderBase;


    public stopped: boolean;

    public abstract stop(): void;
}
