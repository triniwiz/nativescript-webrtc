import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';
import { TNSRTCRtpReceiverBase } from './TNSRTCRtpReceiverBase';
import { TNSRTCRtpSenderBase } from './TNSRTCRtpSenderBase';
export declare abstract class TNSRTCRtpTransceiverBase {
    constructor(transceiver: any);
    direction: TNSRTCRtpTransceiverDirection;
    currentDirection: TNSRTCRtpTransceiverDirection;
    mid: string;
    receiver: TNSRTCRtpReceiverBase;
    sender: TNSRTCRtpSenderBase;
    stopped: boolean;
    abstract stop(): void;
}
