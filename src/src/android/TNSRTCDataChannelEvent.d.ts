import { TNSRTCDataChannelEventBase } from '../base/TNSRTCDataChannelEventBase';
import { TNSRTCDataChannel } from './TNSRTCDataChannel';
export declare class TNSRTCDataChannelEvent extends TNSRTCDataChannelEventBase {
    private _event;
    constructor(event: any);
    readonly channel: TNSRTCDataChannel;
    static fromNative(event: any): TNSRTCDataChannelEvent;
}
