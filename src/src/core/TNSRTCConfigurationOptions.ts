import { TNSRTCBundlePolicy } from './TNSRTCBundlePolicy';
import { TNSRTCSdpSemantics } from './TNSRTCSdpSemantics';
import { TNSRTCIceTransportPolicy } from './TNSRTCIceTransportPolicy';
import { TNSRTCRtcpMuxPolicy } from './TNSRTCRtcpMuxPolicy';
import { TNSRTCIceServerBase } from '../base/TNSRTCIceServerBase';


export interface TNSRTCConfigurationOptions {
    bundlePolicy?: TNSRTCBundlePolicy;
    sdpSemantics?: TNSRTCSdpSemantics;
    iceCandidatePoolSize?: number;
    iceTransportPolicy?: TNSRTCIceTransportPolicy;
    rtcpMuxPolicy?: TNSRTCRtcpMuxPolicy;
    iceServers?: Array<TNSRTCIceServerBase>;
    peerIdentity?: string;
}
