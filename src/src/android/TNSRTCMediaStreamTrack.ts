import { TNSRTCMediaStreamTrackBase } from '../base/TNSRTCMediaStreamTrackBase';

export class TNSRTCMediaStreamTrack extends TNSRTCMediaStreamTrackBase {
    private _mediaStreamTrack;

    constructor(mediaStreamTrack: any) {
        super(mediaStreamTrack);
        this._mediaStreamTrack = mediaStreamTrack;
    }

    get id(): string {
        return this._mediaStreamTrack.getId();
    }

    get enabled(): boolean {
        return this._mediaStreamTrack.getEnabled();
    }

    set enabled(enabled: boolean) {
        this._mediaStreamTrack.setEnabled(enabled);
    }

    get kind(): string {
        const track = this._mediaStreamTrack.getMediaStreamTrack();
        if (!track) return '';
        let name = track.getClass().getName();
        if (name === 'org.webrtc.VideoTrack') {
            return 'video';
        } else if (name === 'org.webrtc.AudioTrack') {
            return 'audio';
        }
        return '';
    }

    get readyState(): string {
        return this._mediaStreamTrack.getReadyState();
    }

    get mute(): boolean {
        return this._mediaStreamTrack.getMute();
    }

    get android() {
        return this._mediaStreamTrack.getMediaStreamTrack();
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
