export abstract class TNSRTCMediaStreamTrackBase {
    public id: string;

    public enabled: boolean;

    public kind: string;

    public mute: boolean;

    public abstract dispose(): void;

    public readyState: string;

    constructor(mediaStreamTrack: any) {
    }
}
