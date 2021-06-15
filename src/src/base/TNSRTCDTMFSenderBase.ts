export abstract class TNSRTCDTMFSenderBase {

    constructor(sender) {
    }

    public get toneBuffer(): string { return undefined; }


    public abstract dispose(): void;


    public abstract insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}
