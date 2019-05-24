import { TNSRTCMediaStreamTrackBase } from '../base/TNSRTCMediaStreamTrackBase';
import { TNSRTCMediaTrackSettings } from './TNSRTCMediaTrackSettings';

export class TNSRTCMediaStreamTrack extends TNSRTCMediaStreamTrackBase {
    private _mediaStreamTrack;
    private _mediaStreamTrackSettings;

    constructor(mediaStreamTrack: any) {
        super(mediaStreamTrack);
        this._mediaStreamTrack = mediaStreamTrack;
        this._mediaStreamTrackSettings = TNSRTCMediaTrackSettings.fromNative(mediaStreamTrack.settings);
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

    stop(): void {
        this._mediaStreamTrack.stop();
    }

    get settings(): TNSRTCMediaTrackSettings {
        return this._mediaStreamTrackSettings;
    }

    static fromNative(mediaStreamTrack: any): TNSRTCMediaStreamTrack {
        return new TNSRTCMediaStreamTrack(mediaStreamTrack);
    }
}
