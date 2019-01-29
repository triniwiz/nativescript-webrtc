import { TNSRTCRtpReceiver } from './TNSRTCRtpReceiver';
import { TNSRTCRtpSender } from './TNSRTCRtpSender';
import { TNSRTCRtpTransceiverBase } from '../base/TNSRTCRtpTransceiverBase';
import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';

export class TNSRTCRtpTransceiver extends TNSRTCRtpTransceiverBase {
    private _transceiver;

    private constructor(transceiver) {
        super(transceiver);
        this._transceiver = transceiver;
    }

    public static fromNative(transceiver) {
        return new TNSRTCRtpTransceiver(transceiver);
    }

    stop(): void {
        this._transceiver.stop();
    }

    public get direction(): TNSRTCRtpTransceiverDirection {
        switch (this._transceiver.getDirection()) {
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.INACTIVE:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.RECV_ONLY:
                return TNSRTCRtpTransceiverDirection.RECV_ONLY;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.SEND_ONLY:
                return TNSRTCRtpTransceiverDirection.SEND_ONLY;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.SEND_RECV:
                return TNSRTCRtpTransceiverDirection.SEND_RECV;
            default:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
        }
    }


    public get currentDirection(): TNSRTCRtpTransceiverDirection {
        switch (this._transceiver.getCurrentDirection()) {
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.INACTIVE:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.RECV_ONLY:
                return TNSRTCRtpTransceiverDirection.RECV_ONLY;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.SEND_ONLY:
                return TNSRTCRtpTransceiverDirection.SEND_ONLY;
            case co.fitcom.fancywebrtc.FancyRTCRtpTransceiverDirection.SEND_RECV:
                return TNSRTCRtpTransceiverDirection.SEND_RECV;
            default:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
        }
    }

    public get mid(): string {
        return this._transceiver.getMid();
    }

    public get receiver(): TNSRTCRtpReceiver {
        return TNSRTCRtpReceiver.fromNative(this._transceiver.getReceiver());
    }

    public get sender(): TNSRTCRtpSender {
        return TNSRTCRtpSender.fromNative(this._transceiver.getSender());
    }


    public get stopped(): boolean {
        return this._transceiver.getStopped();
    }

    public get instance() {
        return this._transceiver;
    }

    public get android() {
        return this._transceiver.getRtpTransceiver();
    }
}
