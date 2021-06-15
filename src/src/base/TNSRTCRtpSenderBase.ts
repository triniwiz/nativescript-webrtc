import { TNSRTCDTMFSenderBase } from './TNSRTCDTMFSenderBase';
import { TNSRTCMediaStreamTrackBase } from './TNSRTCMediaStreamTrackBase';
import { TNSRTCRtpParametersBase } from './TNSRTCRtpParametersBase';

export abstract class TNSRTCRtpSenderBase {
    constructor(sender) {
    }

    public get dtmf(): TNSRTCDTMFSenderBase { return undefined; }

    public get id(): string { return undefined; } 

    public abstract dispose(): void;

    public get track(): TNSRTCMediaStreamTrackBase { return undefined; }

    public get parameters(): TNSRTCRtpParametersBase { return undefined; }

    public abstract replaceTrack(track: TNSRTCMediaStreamTrackBase): void ;
}
