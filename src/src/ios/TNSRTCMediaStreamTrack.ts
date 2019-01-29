import { TNSRTCMediaStreamTrackBase } from '../base/TNSRTCMediaStreamTrackBase';

export class TNSRTCMediaStreamTrack extends TNSRTCMediaStreamTrackBase {
    private _mediaStreamTrack;

    constructor(mediaStreamTrack: any) {
        super(mediaStreamTrack);
        this._mediaStreamTrack = mediaStreamTrack;
    }

    get id(): string {
        return this._mediaStreamTrack.id;
    }

    get enabled(): boolean {
        return this._mediaStreamTrack.enabled;
    }

    set enabled(enabled: boolean) {
        this._mediaStreamTrack.enabled = enabled;
    }

    get kind(): string {
        return this._mediaStreamTrack.kind;
    }

    get readyState(): string {
        return this._mediaStreamTrack.readyState;
    }

    get mute(): boolean {
        return this._mediaStreamTrack.mute;
    }

    get ios() {
        return this._mediaStreamTrack.mediaStreamTrack;
    }

    get instance() {
        return this._mediaStreamTrack;
    }

    get mediaStreamTrack() {
        return this._mediaStreamTrack;
    }

    dispose(): void {
        this._mediaStreamTrack.dispose();
    }

    static fromNative(mediaStreamTrack: any): TNSRTCMediaStreamTrack {
        return new TNSRTCMediaStreamTrack(mediaStreamTrack);
    }
}
