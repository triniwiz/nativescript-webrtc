import { TNSRTCDataChannelBase } from '../base/TNSRTCDataChannelBase';

export class TNSRTCDataChannel extends TNSRTCDataChannelBase {
    channel;

    private constructor(channel) {
        super(channel);
    }

    public static fromNative(channel) {
        return new TNSRTCDataChannel(channel);
    }

    get ios() {
        return null;
    }

    get instance() {
        return this.channel;
    }
}
