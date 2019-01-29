import { TNSRTCRtpTransceiverBase } from '../base/TNSRTCRtpTransceiverBase';
import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';
import { TNSRTCRtpReceiver } from './TNSRTCRtpReceiver';
import { TNSRTCRtpSender } from './TNSRTCRtpSender';
export declare class TNSRTCRtpTransceiver extends TNSRTCRtpTransceiverBase {
    private _transceiver;
    private constructor();
    static fromNative(transceiver: any): TNSRTCRtpTransceiver;
    stop(): void;
    readonly direction: TNSRTCRtpTransceiverDirection;
    readonly currentDirection: TNSRTCRtpTransceiverDirection;
    readonly mid: string;
    readonly receiver: TNSRTCRtpReceiver;
    readonly sender: TNSRTCRtpSender;
    readonly stopped: boolean;
    readonly instance: any;
    readonly ios: any;
}
