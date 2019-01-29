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

    get ios() {
        return this._parameters.parameters;
    }

    get instance() {
        return this._parameters;
    }


}
