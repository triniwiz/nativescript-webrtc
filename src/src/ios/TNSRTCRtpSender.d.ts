import { TNSRTCRtpSenderBase } from '../base/TNSRTCRtpSenderBase';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCDTMFSender } from './TNSRTCDTMFSender';
import { TNSRTCRtpParameters } from './TNSRTCRtpParameters';
export declare class TNSRTCRtpSender extends TNSRTCRtpSenderBase {
    private _sender;
    private constructor();
    static fromNative(sender: any): TNSRTCRtpSender;
    readonly instance: any;
    readonly ios: any;
    dispose(): void;
    replaceTrack(track: TNSRTCMediaStreamTrack): void;
    readonly dtmf: TNSRTCDTMFSender;
    readonly id: string;
    readonly track: TNSRTCMediaStreamTrack;
    readonly parameters: TNSRTCRtpParameters;
}
