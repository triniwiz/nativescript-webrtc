import { TNSRTCRtpReceiverBase } from '../base/TNSRTCRtpReceiverBase';

export class TNSRTCRtpReceiver extends TNSRTCRtpReceiverBase {
    private _receiver;

    private constructor(receiver) {
        super(receiver);
    }

    public static fromNative(receiver) {
        return new TNSRTCRtpReceiver(receiver);
    }

    get instance() {
        return this._receiver;
    }

    get android() {
        return this._receiver.getRtpReceiver();
    }
}
