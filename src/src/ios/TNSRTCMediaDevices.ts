import { TNSRTCMediaStreamConstraints } from './TNSRTCMediaStreamConstraints';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';
import { TNSMediaDevicesInfo } from '../core/TNSMediaDevicesInfo';

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

    public static enumerateDevices(): Promise<TNSMediaDevicesInfo[]> {
       return new Promise((resolve,reject)=>{
        const info = FancyRTCMediaDevices.enumerateDevices();
        const size = info.count;
        const devices: TNSMediaDevicesInfo[] = [] ;
        for(let i = 0; i < size;i++){
            try{
                const device = JSON.parse(info.objectAtIndex(i));
                devices.push(
                    new TNSMediaDevicesInfo(device.deviceId, device.groupId, device.kind, device.label)
                )
            }catch(e){}
        }
        resolve(devices);
       })
    }
}
