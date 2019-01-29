import { TNSRTCDTMFSenderBase } from '../base/TNSRTCDTMFSenderBase';

export class TNSRTCDTMFSender extends TNSRTCDTMFSenderBase {
    private _sender;

    private constructor(sender) {
        super(sender);
        this._sender = sender;
    }

    public static fromNative(sender) {
        return new TNSRTCDTMFSender(sender);
    }

    dispose(): void {
        this._sender.dispose();
    }

    insertDTMF(tones: string, duration?: number, interToneGap?: number): void {
        this._sender.insertDTMF(tones, duration as any, interToneGap as any);
    }

    public get toneBuffer(): string {
        return this._sender.getToneBuffer();
    }

    get android() {
        return this._sender.getSender();
    }

    get instance() {
        return this._sender;
    }
}
