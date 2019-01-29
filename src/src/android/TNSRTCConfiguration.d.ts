import { TNSRTCConfigurationOptions } from '../core/TNSRTCConfigurationOptions';
import { TNSRTCConfigurationBase } from '../base/TNSRTCConfigurationBase';
export declare class TNSRTCConfiguration extends TNSRTCConfigurationBase {
    private _configuration;
    constructor(options?: TNSRTCConfigurationOptions);
    readonly instance: any;
    readonly android: any;
}
