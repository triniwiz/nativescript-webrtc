import { TNSRTCMediaStreamConstraintsBase } from '../base/TNSRTCMediaStreamConstraintsBase';

declare var FancyRTCMediaStreamConstraints;

export class TNSRTCMediaStreamConstraints extends TNSRTCMediaStreamConstraintsBase {
    private _mediaStreamConstraints;

    constructor(audio: any, video: any) {
        super(audio, video);
        if (typeof audio === 'boolean' && typeof video === 'boolean') {
            this._mediaStreamConstraints = FancyRTCMediaStreamConstraints.alloc().initWithAudioVideo(audio, video);
        } else if (typeof audio === 'boolean' && typeof video === 'object') {
            this._mediaStreamConstraints = FancyRTCMediaStreamConstraints.alloc().initWithVideoDictVideo(audio, video as any);
        } else if (typeof audio === 'object' && typeof video === 'boolean') {
            this._mediaStreamConstraints = FancyRTCMediaStreamConstraints.alloc().initWithAudioDictVideo(audio as any, video);
        } else if (typeof audio === 'object' && typeof video === 'object') {
            this._mediaStreamConstraints = FancyRTCMediaStreamConstraints.alloc().initWithAudioDictVideoDict(audio as any, video as any);
        } else {
            this._mediaStreamConstraints = FancyRTCMediaStreamConstraints.alloc().initWithAudioVideo(false, true);
        }

    }

    public get instance() {
        return this._mediaStreamConstraints;
    }

    public get android() {
        return null;
    }
}
