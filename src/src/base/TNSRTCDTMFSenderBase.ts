export abstract class TNSRTCDTMFSenderBase {

    constructor(sender) {
    }

    public toneBuffer: string;


    public abstract dispose(): void;


    public abstract insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}
