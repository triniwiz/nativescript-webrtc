import { TNSRTCMediaStreamConstraintsBase } from '../base/TNSRTCMediaStreamConstraintsBase';

declare var com, co;

export class TNSRTCMediaStreamConstraints extends TNSRTCMediaStreamConstraintsBase {

    private _mediaStreamConstraints;

    constructor(audio: any, video: any) {
        super(audio, video);
        const gson = new com.google.gson.Gson();
        if (typeof audio === 'boolean' && typeof video === 'boolean') {
            this._mediaStreamConstraints = new co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints(audio, video);
        } else if (typeof audio === 'boolean' && typeof video === 'object') {
            this._mediaStreamConstraints = new co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints(audio, gson.fromJson(JSON.stringify(video), java.util.Map.class));
        } else if (typeof audio === 'object' && typeof video === 'boolean') {
            this._mediaStreamConstraints = new co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints(gson.fromJson(JSON.stringify(audio), java.util.Map.class), video);
        } else if (typeof audio === 'object' && typeof video === 'object') {
            this._mediaStreamConstraints = new co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints(gson.fromJson(JSON.stringify(audio), java.util.Map.class), gson.fromJson(JSON.stringify(video), java.util.Map.class));
        } else {
            this._mediaStreamConstraints = new co.fitcom.fancywebrtc.FancyRTCMediaStreamConstraints(false, true);
        }
    }

    public get instance() {
        return this._mediaStreamConstraints;
    }

    public get android() {
        return null;
    }
}
