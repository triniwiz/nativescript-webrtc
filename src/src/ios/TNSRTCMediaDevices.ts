import { TNSRTCMediaStreamConstraints } from './TNSRTCMediaStreamConstraints';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';

export class TNSRTCMediaDevices {
    public static getUserMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream> {
        return new Promise((resolve, reject) => {
            FancyRTCMediaDevices.getUserMediaWithConstraintsListener(constraints.instance, (stream: FancyRTCMediaStream, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(TNSRTCMediaStream.fromNative(stream));
                }
            });
        });
    }

    public static getDisplayMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream> {
        return new Promise((resolve, reject) => {
            FancyRTCMediaDevices.getDisplayMediaWithConstraintsListener(constraints.instance, (stream: FancyRTCMediaStream, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(TNSRTCMediaStream.fromNative(stream));
                }
            });
        });
    }
}
