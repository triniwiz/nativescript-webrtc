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

    public get ios() {
        return this._videoTrack.videoTrack;
    }

    public get instance() {
        return this._videoTrack;
    }

    public applyConstraints(constraints: TNSMediaTrackConstraints): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const obj = {};
            if (constraints.facingMode) {
                obj['facingMode'] = constraints.facingMode;
            }
            const nativeConstraints = FancyRTCMediaTrackConstraints.alloc().initWithConstraints(obj as any);
            this._videoTrack.applyConstraintsWithConstraintsListener(nativeConstraints, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}
