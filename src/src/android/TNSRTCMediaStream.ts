import { TNSRTCVideoTrack } from './TNSRTCVideoTrack';
import { TNSRTCAudioTrack } from './TNSRTCAudioTrack';
import { TNSRTCMediaStreamBase } from '../base/TNSRTCMediaStreamBase';

export class TNSRTCMediaStream extends TNSRTCMediaStreamBase {
    private _stream;

    private constructor(stream) {
        super(stream);
        this._stream = stream;
    }

    public get id(): string {
        return this._stream.getId();
    }

    public get videoTracks(): Array<TNSRTCVideoTrack> {
        const array = [];
        const nativeArray = this._stream.getVideoTracks();
        const size = nativeArray.size();
        for (let i = 0; i < size; i++) {
            const track = nativeArray.get(i);
            array.push(TNSRTCVideoTrack.fromNative(track));

        }
        return array;
    }

    public get audioTracks(): Array<TNSRTCAudioTrack> {
        const array = [];
        const nativeArray = this._stream.getAudioTracks();
        const size = nativeArray.size();
        for (let i = 0; i < size; i++) {
            const track = nativeArray.get(i);
            array.push(TNSRTCAudioTrack.fromNative(track));
        }
        return array;
    }

    public addTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void {
        if (track instanceof TNSRTCVideoTrack) {
            this._stream.addTrack(track.instance);
        }

        if (track instanceof TNSRTCAudioTrack) {
            this._stream.addTrack(track.instance);
        }
    }

    public removeTrack(track: TNSRTCVideoTrack | TNSRTCAudioTrack): void {
        if (track instanceof TNSRTCVideoTrack) {
            this._stream.removeTrack(track.instance);
        }

        if (track instanceof TNSRTCAudioTrack) {
            this._stream.removeTrack(track.instance);
        }
    }

    public static fromNative(stream) {
        return new TNSRTCMediaStream(stream);
    }

    public get instance() {
        return this._stream;
    }

    public get android() {
        return this._stream.getStream();
    }

}
