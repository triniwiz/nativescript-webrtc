import { TNSRTCRtpReceiverBase } from '../base/TNSRTCRtpReceiverBase';
export declare class TNSRTCRtpReceiver extends TNSRTCRtpReceiverBase {
    private _receiver;
    private constructor();
    static fromNative(receiver: any): TNSRTCRtpReceiver;
    readonly instance: any;
    readonly android: any;
}
