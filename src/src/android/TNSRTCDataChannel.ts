import { TNSRTCDataChannelBase } from '../base/TNSRTCDataChannelBase';

export class TNSRTCDataChannel extends TNSRTCDataChannelBase {
    private _channel;

    private constructor(channel) {
        super(channel);
    }

    public static fromNative(channel) {
        return new TNSRTCDataChannel(channel);
    }

    get android() {
        return this._channel.getDataChannel();
    }

    get instance() {
        return this._channel;
    }
}
