import { TNSRTCDataChannelEventBase } from '../base/TNSRTCDataChannelEventBase';
import { TNSRTCDataChannel } from './TNSRTCDataChannel';

export class TNSRTCDataChannelEvent extends TNSRTCDataChannelEventBase {
    private _event;

    constructor(event) {
        super(event);
        this._event = event;
    }

    public get channel(): TNSRTCDataChannel {
        return TNSRTCDataChannel.fromNative(this._event.channel);
    }

    public static fromNative(event) {
        return new TNSRTCDataChannelEvent(event);
    }
}
