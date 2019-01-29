import { TNSRTCRtpTransceiverBase } from '../base/TNSRTCRtpTransceiverBase';
import { TNSRTCRtpTransceiverDirection } from '../core/TNSRTCRtpTransceiverDirection';
import { TNSRTCRtpReceiver } from './TNSRTCRtpReceiver';
import { TNSRTCRtpSender } from './TNSRTCRtpSender';

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
        switch (this._transceiver.direction) {
            case FancyRTCRtpTransceiverDirection.INACTIVE:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
            case FancyRTCRtpTransceiverDirection.RECV_ONLY:
                return TNSRTCRtpTransceiverDirection.RECV_ONLY;
            case FancyRTCRtpTransceiverDirection.SEND_ONLY:
                return TNSRTCRtpTransceiverDirection.SEND_ONLY;
            case FancyRTCRtpTransceiverDirection.SEND_RECV:
                return TNSRTCRtpTransceiverDirection.SEND_RECV;
            default:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
        }
    }


    public get currentDirection(): TNSRTCRtpTransceiverDirection {
        switch (this._transceiver.currentDirection) {
            case FancyRTCRtpTransceiverDirection.INACTIVE:
                return TNSRTCRtpTransceiverDirection.INACTIVE;
            case FancyRTCRtpTransceiverDirection.RECV_ONLY:
                return TNSRTCRtpTransceiverDirection.RECV_ONLY;
            case FancyRTCRtpTransceiverDirection.SEND_ONLY:
                return TNSRTCRtpTransceiverDirection.SEND_ONLY;
            case FancyRTCRtpTransceiverDirection.SEND_RECV:
                return TNSRTCRtpTransceiverDirection.SEND_RECV;
            default:
                return null;
        }
    }

    public get mid(): string {
        return this._transceiver.mid;
    }

    public get receiver(): TNSRTCRtpReceiver {
        return TNSRTCRtpReceiver.fromNative(this._transceiver.receiver);
    }

    public get sender(): TNSRTCRtpSender {
        return TNSRTCRtpSender.fromNative(this._transceiver.sender);
    }


    public get stopped(): boolean {
        return this._transceiver.stopped;
    }

    public get instance() {
        return this._transceiver;
    }

    public get ios() {
        return this._transceiver.rtpTransceiver;
    }
}
