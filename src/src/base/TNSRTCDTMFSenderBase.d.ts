export declare abstract class TNSRTCDTMFSenderBase {
    constructor(sender: any);
    toneBuffer: string;
    abstract dispose(): void;
    abstract insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}
