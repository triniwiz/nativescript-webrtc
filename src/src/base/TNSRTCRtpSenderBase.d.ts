import { TNSRTCDTMFSenderBase } from './TNSRTCDTMFSenderBase';
import { TNSRTCMediaStreamTrackBase } from './TNSRTCMediaStreamTrackBase';
import { TNSRTCRtpParametersBase } from './TNSRTCRtpParametersBase';
export declare abstract class TNSRTCRtpSenderBase {
    constructor(sender: any);
    dtmf: TNSRTCDTMFSenderBase;
    id: string;
    abstract dispose(): void;
    track: TNSRTCMediaStreamTrackBase;
    parameters: TNSRTCRtpParametersBase;
    abstract replaceTrack(track: TNSRTCMediaStreamTrackBase): void;
}
