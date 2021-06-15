export abstract class TNSRTCMediaStreamTrackBase {
    public get id(): string { return undefined; }

    public get enabled(): boolean { return undefined; }

    public get kind(): string { return undefined; }

    public get mute(): boolean { return undefined; }

    public abstract dispose(): void;

    public get readyState(): string { return undefined; }

    constructor(mediaStreamTrack: any) {
    }
}
