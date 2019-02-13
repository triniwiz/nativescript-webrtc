import { TNSRTCIceServerBase } from '../base/TNSRTCIceServerBase';

export class TNSRTCIceServer extends TNSRTCIceServerBase {

    constructor(urls: Array<string>, username?: string, credential?: string) {
        super(urls, username, credential);
        if (urls && !username && !credential) {
            this.server = new co.fitcom.fancywebrtc.FancyRTCIceServer(urls as any);
        } else {
            this.server = new co.fitcom.fancywebrtc.FancyRTCIceServer(urls as any, username, credential);
        }

    }

    public get credential(): string {
        return this.server.getCredential();
    }

    public set credential(value: string) {
        this.server.setCredential(value);
    }


    public toWebRtc() {
        return this.server.toWebRtc();
    }

    public get iceServer() {
        return this.server.getIceServer();
    }

    public get android() {
        return this.iceServer();
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
        this.server.setUrls(urls as any);
    }

    public get urls() {
        return this.server.getUrls() as any;
    }

    public get username() {
        return this.server.getUsername();
    }

    public set username(username: string) {
        this.server.setUsername(username);
    }

}
