import { TNSRTCConfigurationBase } from '../base/TNSRTCConfigurationBase';
import { TNSRTCConfigurationOptions } from '../core/TNSRTCConfigurationOptions';
export declare class TNSRTCConfiguration extends TNSRTCConfigurationBase {
    private _configuration;
    constructor(options?: TNSRTCConfigurationOptions);
    readonly instance: any;
    readonly ios: any;
}
