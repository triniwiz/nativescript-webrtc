import { TNSRTCDataChannelBase } from '../base/TNSRTCDataChannelBase';
export declare class TNSRTCDataChannel extends TNSRTCDataChannelBase {
    channel: any;
    private constructor();
    static fromNative(channel: any): TNSRTCDataChannel;
    readonly ios: any;
    readonly instance: any;
}
