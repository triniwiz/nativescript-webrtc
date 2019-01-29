import { TNSRTCIceServerBase } from '../base/TNSRTCIceServerBase';

export class TNSRTCIceServer extends TNSRTCIceServerBase {

    constructor(urls: Array<string>, username?: string, credential?: string) {
        super(urls, username, credential);
        this.server = FancyRTCIceServer.alloc().initWithUrlsUsernameCredential(urls as any, username, credential);
    }

    public get credential(): string {
        return (this.server as FancyRTCIceServer).credential;
    }

    public set credential(value: string) {
        (this.server as FancyRTCIceServer).credential = value;
    }


    public toWebRtc() {
        return this.server.toWebRtc();
    }

    public get iceServer() {
        return this.server.iceServer();
    }

    public get ios() {
        return this.iceServer;
    }

    public get instance() {
        return this.server;
    }

    public set credentialType(credentialType: any) {
    }

    public get credentialType() {
        return null;
    }

    public set urls(urls: Array<String>) {
        this.server.setUrlsWithUrls(urls as any);
    }

    public get urls() {
        return this.server.getUrls() as any;
    }

    public get username() {
        return this.server.getUsername();
    }

    public set username(username: string) {
        this.server.setUsernameWithUsername(username);
    }

}
