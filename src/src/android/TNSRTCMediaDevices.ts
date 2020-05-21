import * as app from 'tns-core-modules/application';
import { TNSRTCMediaStreamConstraints } from './TNSRTCMediaStreamConstraints';
import { TNSRTCMediaStream } from './TNSRTCMediaStream';
import { TNSMediaDevicesInfo } from '../core/TNSMediaDevicesInfo';

export class TNSRTCMediaDevices {
    public static getUserMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream> {
        return new Promise((resolve, reject) => {
            co.fitcom.fancywebrtc.FancyRTCMediaDevices.getUserMedia(app.android.context, constraints.instance, new co.fitcom.fancywebrtc.FancyRTCMediaDevices.GetUserMediaListener({
                onError(error: string): void {
                    reject(error);
                }, onSuccess(stream: co.fitcom.fancywebrtc.FancyRTCMediaStream): void {
                    resolve(TNSRTCMediaStream.fromNative(stream));
                }
            }));
        });
    }

    public static getDisplayMedia(constraints: TNSRTCMediaStreamConstraints): Promise<TNSRTCMediaStream> {
        return new Promise((resolve, reject) => {
            co.fitcom.fancywebrtc.FancyRTCMediaDevices.getDisplayMedia(app.android.foregroundActivity, constraints.instance, new co.fitcom.fancywebrtc.FancyRTCMediaDevices.GetUserMediaListener({
                onError(error: string): void {
                    reject(error);
                }, onSuccess(stream: co.fitcom.fancywebrtc.FancyRTCMediaStream): void {
                    resolve(TNSRTCMediaStream.fromNative(stream));
                }
            }));
        });
    }

    public static enumerateDevices(): Promise<TNSMediaDevicesInfo[]> {
        return new Promise((resolve,reject)=>{
         const info = co.fitcom.fancywebrtc.FancyRTCMediaDevices.enumerateDevices(app.android.foregroundActivity);
         const size = info.size();
         const devices: TNSMediaDevicesInfo[] = [] ;
         for(let i = 0; i < size;i++){
             try{
                 const device = JSON.parse(info.get(i));
                 devices.push(
                     new TNSMediaDevicesInfo(device.deviceId, device.groupId, device.kind, device.label)
                 )
             }catch(e){}
         }
         resolve(devices);
        })
     }
}
