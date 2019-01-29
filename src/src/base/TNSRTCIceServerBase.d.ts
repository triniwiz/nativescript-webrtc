export declare abstract class TNSRTCIceServerBase {
    server: any;
    protected constructor(urls: Array<string>, username?: string, credential?: string);
    abstract toWebRtc(): void;
    iceServer: any;
    credentialType: any;
    urls: Array<String>;
    username: string;
}
