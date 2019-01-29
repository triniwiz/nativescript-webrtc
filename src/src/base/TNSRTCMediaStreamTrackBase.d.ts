export declare abstract class TNSRTCMediaStreamTrackBase {
    id: string;
    enabled: boolean;
    kind: string;
    mute: boolean;
    abstract dispose(): void;
    readyState: string;
    constructor(mediaStreamTrack: any);
}
