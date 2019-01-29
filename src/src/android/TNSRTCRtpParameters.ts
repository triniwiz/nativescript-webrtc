import { TNSRTCRtpParametersBase } from '../base/TNSRTCRtpParametersBase';

export class TNSRTCRtpParameters extends TNSRTCRtpParametersBase {
    private _parameters;

    private constructor(parameters) {
        super(parameters);
        this._parameters = parameters;
    }

    public static fromNative(parameters) {
        return new TNSRTCRtpParameters(parameters);
    }

    get android() {
        return this._parameters.getParameters();
    }

    get instance() {
        return this._parameters;
    }


}
