import { TNSRTCIceServerBase } from '../base/TNSRTCIceServerBase';
export declare class TNSRTCIceServer extends TNSRTCIceServerBase {
    constructor(urls: Array<string>, username?: string, credential?: string);
    credential: string;
    toWebRtc(): any;
    readonly iceServer: any;
    readonly ios: any;
    readonly instance: any;
    credentialType: any;
    urls: Array<String>;
    username: string;
}
