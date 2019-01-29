import { TNSRTCConfigurationBase } from '../base/TNSRTCConfigurationBase';
import { TNSRTCConfigurationOptions } from '../core/TNSRTCConfigurationOptions';
import { TNSRTCIceServer } from './TNSRTCIceServer';
import { TNSRTCBundlePolicy } from '../core/TNSRTCBundlePolicy';
import { TNSRTCRtcpMuxPolicy } from '../core/TNSRTCRtcpMuxPolicy';
import { TNSRTCIceTransportPolicy } from '../core/TNSRTCIceTransportPolicy';
import { TNSRTCSdpSemantics } from '../core/TNSRTCSdpSemantics';

export class TNSRTCConfiguration extends TNSRTCConfigurationBase {
    private _configuration;

    constructor(options?: TNSRTCConfigurationOptions) {
        super(options);
        if (options != null) {
            if (options.iceServers != null) {
                let count = options.iceServers.length;
                let nativeArray = NSArray.arrayWithArray([] as any);
                for (let i = 0; i < count; i++) {
                    const server = options.iceServers[i] as TNSRTCIceServer;
                    nativeArray.arrayByAddingObject(server.instance);
                }
                this._configuration = FancyRTCConfiguration.alloc().initWithIceServers(nativeArray as any);
            } else {
                this._configuration = FancyRTCConfiguration.alloc();
            }

            if (options.bundlePolicy != null) {
                switch (options.bundlePolicy) {
                    case TNSRTCBundlePolicy.BALANCED:
                        this._configuration.bundlePolicy = FancyRTCBundlePolicy.BALANCED;
                        break;
                    case TNSRTCBundlePolicy.MAX_BUNDLE:
                        this._configuration.bundlePolicy = FancyRTCBundlePolicy.MAX_BUNDLE;
                        break;
                    case TNSRTCBundlePolicy.MAX_COMPAT:
                        this._configuration.bundlePolicy = FancyRTCBundlePolicy.MAX_COMPAT;
                        break;
                }
            }

            if (options.iceCandidatePoolSize != null) {
                this._configuration.iceCandidatePoolSize = options.iceCandidatePoolSize;
            }

            if (options.rtcpMuxPolicy != null) {
                switch (options.rtcpMuxPolicy) {
                    case TNSRTCRtcpMuxPolicy.NEGOTIATE:
                        this._configuration.rtcpMuxPolicy = FancyRTCRtcpMuxPolicy.NEGOTIATE;
                        break;
                    case TNSRTCRtcpMuxPolicy.REQUIRE:
                        this._configuration.rtcpMuxPolicy = FancyRTCRtcpMuxPolicy.REQUIRE;
                        break;
                }
            }

            if (options.iceTransportPolicy != null) {
                switch (options.iceTransportPolicy) {
                    case TNSRTCIceTransportPolicy.ALL:
                        this._configuration.iceTransportPolicy = FancyRTCIceTransportPolicy.ALL;
                        break;
                    case TNSRTCIceTransportPolicy.PUBLIC:
                        this._configuration.iceTransportPolicy = FancyRTCIceTransportPolicy.PUBLIC;
                        break;
                    case TNSRTCIceTransportPolicy.RELAY:
                        this._configuration.iceTransportPolicy = FancyRTCIceTransportPolicy.RELAY;
                        break;
                }
            }

            if (options.sdpSemantics != null) {
                switch (options.sdpSemantics) {
                    case TNSRTCSdpSemantics.PLAN_B:
                        this._configuration.sdpSemantics = FancyRTCSdpSemantics.PLAN_B;
                        break;
                    case TNSRTCSdpSemantics.UNIFIED_PLAN:
                        this._configuration.sdpSemantics = FancyRTCSdpSemantics.UNIFIED_PLAN;
                        break;
                }
            }
            if (options.peerIdentity) {

            }
        } else {
            this._configuration = FancyRTCConfiguration.new();
        }
    }

    public get instance() {
        return this._configuration;
    }

    public get ios() {
        return this._configuration.configuration;
    }
}
