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
        const d = duration != null ? duration : 100.0;
        const i = interToneGap != null ? interToneGap : 70.0;
        this._sender.insertDTMFWithTonesDurationInterToneGap(tones, duration, interToneGap);
    }

    public get toneBuffer(): string {
        return this._sender.toneBuffer;
    }

    get ios() {
        return this._sender.sender;
    }

    get instance() {
        return this._sender;
    }
}
