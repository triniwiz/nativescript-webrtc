import { TNSRTCTrackEventBase } from '../base/TNSRTCTrackEventBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCRtpTransceiver } from './TNSRTCRtpTransceiver';
import { TNSRTCRtpReceiver } from './TNSRTCRtpReceiver';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';

export class TNSRTCTrackEvent extends TNSRTCTrackEventBase {
    private _event;

    constructor(event) {
        super(event);
        this._event = event;

    }

    public get mediaTrack(): TNSRTCMediaStreamTrack {
        return TNSRTCMediaStreamTrack.fromNative(this._event.getMediaTrack());
    }

    public get transceiver(): TNSRTCRtpTransceiver {
        return TNSRTCRtpTransceiver.fromNative(this._event.getTransceiver());
    }

    public get receiver(): TNSRTCRtpReceiver {
        return TNSRTCRtpReceiver.fromNative(this._event.getReceiver());
    }

    public get streams(): Array<TNSRTCMediaStream> {
        const array = [];
        const nativeArray = this._event.getStreams();
        const size = nativeArray.size();
        for (let i = 0; i < size; i++) {
            const stream = nativeArray.get(i);
            array.push(TNSRTCMediaStream.fromNative(stream));
        }
        return array;

    }

    public static fromNative(event) {
        return new TNSRTCTrackEvent(event);
    }
}
