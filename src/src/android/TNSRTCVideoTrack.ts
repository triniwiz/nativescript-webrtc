import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSMediaTrackConstraints } from '../core/TNSMediaTrackConstraints';

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

    public applyConstraints(constraints: TNSMediaTrackConstraints): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const nativeMap = new java.util.HashMap();
            if (constraints.facingMode) {
                nativeMap.put('facingMode', constraints.facingMode);
            }
            this._videoTrack.applyConstraints(new co.fitcom.fancywebrtc.FancyRTCMediaTrackConstraints(nativeMap), new co.fitcom.fancywebrtc.FancyRTCMediaStreamTrack.FancyRTCMediaStreamTrackListener({
                onSuccess(): void {
                    resolve();
                },
                onError(error: string): void {
                    reject(error);
                }
            }));
        });
    }
}
