import { TNSRTCDTMFSender } from './TNSRTCDTMFSender';
import { TNSRTCRtpParameters } from './TNSRTCRtpParameters';
import { TNSRTCRtpSenderBase } from '../base/TNSRTCRtpSenderBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';

export class TNSRTCRtpSender extends TNSRTCRtpSenderBase {
    private _sender;

    private constructor(sender) {
        super(sender);
    }

    public static fromNative(sender) {
        return new TNSRTCRtpSender(sender);
    }

    get instance() {
        return this._sender;
    }

    get android() {
        return this._sender.getSender();
    }

    dispose(): void {
        this._sender.dispose();
    }

    replaceTrack(track: TNSRTCMediaStreamTrack): void {
        this._sender.replaceTrack(track.instance);
    }

    public get dtmf(): TNSRTCDTMFSender {
        return TNSRTCDTMFSender.fromNative(this._sender.getDtmf());
    }

    public get id(): string {
        return this._sender.getId();
    }


    public get track(): TNSRTCMediaStreamTrack {
        return TNSRTCMediaStreamTrack.fromNative(this._sender.getTrack());
    }

    public get parameters(): TNSRTCRtpParameters {
        return TNSRTCRtpParameters.fromNative(this._sender.getParameters());
    }
}
