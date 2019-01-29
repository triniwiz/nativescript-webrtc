export abstract class TNSRTCIceServerBase {

    server: any;

    protected constructor(urls: Array<string>, username?: string, credential?: string) {
    }


    public abstract toWebRtc(): void;

    public iceServer;

    public credentialType;

    public urls: Array<String>;

    public username: string;

}
