import { TNSRTCDataChannelBase } from '../base/TNSRTCDataChannelBase';
export declare class TNSRTCDataChannel extends TNSRTCDataChannelBase {
    private _channel;
    private constructor();
    static fromNative(channel: any): TNSRTCDataChannel;
    readonly android: any;
    readonly instance: any;
}
