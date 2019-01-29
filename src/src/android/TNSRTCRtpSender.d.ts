import { TNSRTCDTMFSender } from './TNSRTCDTMFSender';
import { TNSRTCRtpParameters } from './TNSRTCRtpParameters';
import { TNSRTCRtpSenderBase } from '../base/TNSRTCRtpSenderBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
export declare class TNSRTCRtpSender extends TNSRTCRtpSenderBase {
    private _sender;
    private constructor();
    static fromNative(sender: any): TNSRTCRtpSender;
    readonly instance: any;
    readonly android: any;
    dispose(): void;
    replaceTrack(track: TNSRTCMediaStreamTrack): void;
    readonly dtmf: TNSRTCDTMFSender;
    readonly id: string;
    readonly track: TNSRTCMediaStreamTrack;
    readonly parameters: TNSRTCRtpParameters;
}
