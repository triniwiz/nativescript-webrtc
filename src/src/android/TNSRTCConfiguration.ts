import { TNSRTCConfigurationOptions } from '../core/TNSRTCConfigurationOptions';
import { TNSRTCIceServer } from './TNSRTCIceServer';
import { TNSRTCBundlePolicy } from '../core/TNSRTCBundlePolicy';
import { TNSRTCRtcpMuxPolicy } from '../core/TNSRTCRtcpMuxPolicy';
import { TNSRTCConfigurationBase } from '../base/TNSRTCConfigurationBase';
import { TNSRTCIceTransportPolicy } from '../core/TNSRTCIceTransportPolicy';
import { TNSRTCSdpSemantics } from '../core/TNSRTCSdpSemantics';

export class TNSRTCConfiguration extends TNSRTCConfigurationBase {
    private _configuration;

    constructor(options?: TNSRTCConfigurationOptions) {
        super(options);
        if (Array.isArray(options)) {
            if (options.iceServers != null) {
                let count = options.iceServers.length;
                let nativeArray = new java.util.ArrayList();
                for (let i = 0; i < count; i++) {
                    const server = options.iceServers[i] as TNSRTCIceServer;
                    nativeArray.add(server.instance);
                }
                this._configuration = new co.fitcom.fancywebrtc.FancyRTCConfiguration(nativeArray);
            } else {
                this._configuration = new co.fitcom.fancywebrtc.FancyRTCConfiguration();
            }

            if (options.bundlePolicy != null) {
                switch (options.bundlePolicy) {
                    case TNSRTCBundlePolicy.BALANCED:
                        this._configuration.setBundlePolicy(co.fitcom.fancywebrtc.FancyRTCBundlePolicy.BALANCED);
                        break;
                    case TNSRTCBundlePolicy.MAX_BUNDLE:
                        this._configuration.setBundlePolicy(co.fitcom.fancywebrtc.FancyRTCBundlePolicy.MAX_BUNDLE);
                        break;
                    case TNSRTCBundlePolicy.MAX_COMPAT:
                        this._configuration.setBundlePolicy(co.fitcom.fancywebrtc.FancyRTCBundlePolicy.MAX_COMPAT);
                        break;
                }
            }

            if (options.iceCandidatePoolSize != null) {
                this._configuration.setIceCandidatePoolSize(options.iceCandidatePoolSize);
            }

            if (options.rtcpMuxPolicy != null) {
                switch (options.rtcpMuxPolicy) {
                    case TNSRTCRtcpMuxPolicy.NEGOTIATE:
                        this._configuration.setIceTransportPolicy(co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy.NEGOTIATE);
                        break;
                    case TNSRTCRtcpMuxPolicy.REQUIRE:
                        this._configuration.setIceTransportPolicy(co.fitcom.fancywebrtc.FancyRTCRtcpMuxPolicy.REQUIRE);
                        break;
                }
            }

            if (options.iceTransportPolicy != null) {
                switch (options.iceTransportPolicy) {
                    case TNSRTCIceTransportPolicy.ALL:
                        this._configuration.setIceTransportPolicy(co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy.ALL);
                        break;
                    case TNSRTCIceTransportPolicy.PUBLIC:
                        this._configuration.setIceTransportPolicy(co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy.PUBLIC);
                        break;
                    case TNSRTCIceTransportPolicy.RELAY:
                        this._configuration.setIceTransportPolicy(co.fitcom.fancywebrtc.FancyRTCIceTransportPolicy.RELAY);
                        break;
                }
            }

            if (options.sdpSemantics != null) {
                switch (options.sdpSemantics) {
                    case TNSRTCSdpSemantics.PLAN_B:
                        this._configuration.setSdpSemantics(co.fitcom.fancywebrtc.FancyRTCSdpSemantics.PLAN_B);
                        break;
                    case TNSRTCSdpSemantics.UNIFIED_PLAN:
                        this._configuration.setSdpSemantics(co.fitcom.fancywebrtc.FancyRTCSdpSemantics.UNIFIED_PLAN);
                        break;
                }
            }
            if (options.peerIdentity) {
                this._configuration.setPeerIdentity(options.peerIdentity);
            }
        } else {
            this._configuration = new co.fitcom.fancywebrtc.FancyRTCConfiguration();
        }
    }

    public get instance() {
        return this._configuration;
    }

    public get android() {
        return this._configuration.getConfiguration();
    }
}
