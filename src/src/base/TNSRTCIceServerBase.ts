export abstract class TNSRTCIceServerBase {

    server: any;

    protected constructor(urls: Array<string>, username?: string, credential?: string) {
    }


    public abstract toWebRtc(): void;

    public get iceServer() { return undefined; }

    public get credentialType() { return undefined; }

    public get urls(): Array<String> { return undefined; }

    public get username(): string { return undefined; }

}
