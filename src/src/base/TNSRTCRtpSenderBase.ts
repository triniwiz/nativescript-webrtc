import { TNSRTCDTMFSenderBase } from './TNSRTCDTMFSenderBase';
import { TNSRTCMediaStreamTrackBase } from './TNSRTCMediaStreamTrackBase';
import { TNSRTCRtpParametersBase } from './TNSRTCRtpParametersBase';

export abstract class TNSRTCRtpSenderBase {
    constructor(sender) {
    }

    public dtmf: TNSRTCDTMFSenderBase;

    public id: string;

    public abstract dispose(): void;

    public track: TNSRTCMediaStreamTrackBase;

    public parameters: TNSRTCRtpParametersBase;

    public abstract replaceTrack(track: TNSRTCMediaStreamTrackBase): void ;
}
