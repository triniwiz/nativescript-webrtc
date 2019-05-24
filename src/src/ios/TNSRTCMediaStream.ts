import { TNSRTCMediaStreamBase } from '../base/TNSRTCMediaStreamBase';
import { TNSRTCVideoTrack } from './TNSRTCVideoTrack';
import { TNSRTCAudioTrack } from './TNSRTCAudioTrack';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';

export class TNSRTCMediaStream extends TNSRTCMediaStreamBase {
    private _stream;

    private constructor(stream) {
        super(stream);
        this._stream = stream;
    }

    public get id(): string {
        return this._stream ? this._stream.getId : null;
    }

    public get videoTracks(): Array<TNSRTCVideoTrack> {
        const array = [];
        const nativeArray = this._stream ? this._stream.videoTracks : [];
        const size = nativeArray.count || 0.;
        for (let i = 0; i < size; i++) {
            const track = nativeArray.objectAtIndex(i);
            array.push(TNSRTCVideoTrack.fromNative(track));

        }
        return array;
    }

    public get audioTracks(): Array<TNSRTCAudioTrack> {
        const array = [];
        const nativeArray = this._stream ? this._stream.audioTracks : [];
        const size = nativeArray.count || 0;
        for (let i = 0; i < size; i++) {
            const track = nativeArray.objectAtIndex(i);
            array.push(TNSRTCAudioTrack.fromNative(track));
        }
        return array;
    }


    public get tracks(): Array<TNSRTCMediaStreamTrack> {
        const array = [];
        const nativeArray = this._stream ? this._stream.tracks : [];
        const size = nativeArray.count || 0;
        for (let i = 0; i < size; i++) {
            const track = nativeArray.objectAtIndex(i);
            array.push(TNSRTCMediaStreamTrack.fromNative(track));
        }
        return array;
    }


    public addTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void {
        if (track instanceof TNSRTCVideoTrack) {
            this._stream.addTrackWithVideo(track.instance);
        }

        if (track instanceof TNSRTCAudioTrack) {
            this._stream.addTrackWithAudio(track.instance);
        }
    }

    public removeTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void {
        if (track instanceof TNSRTCVideoTrack) {
            this._stream.removeTrackWithVideo(track.instance);
        }

        if (track instanceof TNSRTCAudioTrack) {
            this._stream.removeTrackWithAudio(track.instance);
        }
    }

    public static fromNative(stream) {
        return new TNSRTCMediaStream(stream);
    }

    public get instance() {
        return this._stream;
    }

    public get ios() {
        return this._stream ? this._stream.stream : null;
    }

}
