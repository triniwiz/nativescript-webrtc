import { TNSRTCRtpParametersBase } from '../base/TNSRTCRtpParametersBase';
export declare class TNSRTCRtpParameters extends TNSRTCRtpParametersBase {
    private _parameters;
    private constructor();
    static fromNative(parameters: any): TNSRTCRtpParameters;
    readonly android: any;
    readonly instance: any;
}
