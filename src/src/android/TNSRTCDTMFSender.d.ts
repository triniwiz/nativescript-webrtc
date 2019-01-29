import { TNSRTCDTMFSenderBase } from '../base/TNSRTCDTMFSenderBase';
export declare class TNSRTCDTMFSender extends TNSRTCDTMFSenderBase {
    private _sender;
    private constructor();
    static fromNative(sender: any): TNSRTCDTMFSender;
    dispose(): void;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    readonly toneBuffer: string;
    readonly android: any;
    readonly instance: any;
}
