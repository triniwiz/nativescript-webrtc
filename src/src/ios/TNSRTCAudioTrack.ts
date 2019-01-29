import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';

export class TNSRTCAudioTrack extends TNSRTCMediaStreamTrack {

    private _audioTrack;

    constructor(track) {
        super(track);
        this._audioTrack = track;
    }

    public static fromNative(track) {
        return new TNSRTCAudioTrack(track);
    }

    public get ios() {
        return this._audioTrack.audioTrack;
    }

    public get instance() {
        return this._audioTrack;
    }

    public set volume(volume: number) {
        this._audioTrack.volume = volume;
    }
}
