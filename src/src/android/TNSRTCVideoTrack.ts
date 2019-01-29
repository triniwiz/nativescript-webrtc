import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';

export class TNSRTCVideoTrack extends TNSRTCMediaStreamTrack {
    private _videoTrack;

    constructor(track) {
        super(track);
        this._videoTrack = track;
    }

    public static fromNative(track) {
        return new TNSRTCVideoTrack(track);
    }

    public get android() {
        return this._videoTrack.getVideoTrack();
    }

    public get instance() {
        return this._videoTrack;
    }
}
