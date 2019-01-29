import { TNSRTCRtpSenderBase } from '../base/TNSRTCRtpSenderBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCDTMFSender } from './TNSRTCDTMFSender';
import { TNSRTCRtpParameters } from './TNSRTCRtpParameters';

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

    get ios() {
        return this._sender.sender;
    }

    dispose(): void {
        this._sender.dispose();
    }

    replaceTrack(track: TNSRTCMediaStreamTrack): void {
        this._sender.replaceTrackWithTrack(track.instance);
    }

    public get dtmf(): TNSRTCDTMFSender {
        return TNSRTCDTMFSender.fromNative(this._sender.dtmf);
    }

    public get id(): string {
        return this._sender.id;
    }


    public get track(): TNSRTCMediaStreamTrack {
        return TNSRTCMediaStreamTrack.fromNative(this._sender.track);
    }

    public get parameters(): TNSRTCRtpParameters {
        return TNSRTCRtpParameters.fromNative(this._sender.parameters);
    }
}
