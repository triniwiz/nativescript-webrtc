import { TNSRTCSessionDescription } from './TNSRTCSessionDescription';
import {
    TNSRTCConfiguration,
    TNSRTCDataChannel,
    TNSRTCDataChannelEvent,
    TNSRTCDataChannelInit,
    TNSRTCIceCandidate,
    TNSRTCIceServer,
    TNSRTCMediaConstraints,
    TNSRTCMediaStream,
    TNSRTCMediaStreamTrack,
    TNSRTCRtpSender,
    TNSRTCTrackEvent
} from './';
import { TNSRTCPeerConnectionState } from '../core/TNSRTCPeerConnectionState';
import * as utils from 'tns-core-modules/utils/utils';

declare var co;

export class TNSRTCPeerConnection {
    android;
    private _remoteDescription: TNSRTCSessionDescription = null;
    private _localDescription: TNSRTCSessionDescription = null;

    constructor(config?: TNSRTCConfiguration) {
        const configuration = config && config instanceof TNSRTCConfiguration ? config : new TNSRTCConfiguration();
        this.android = new co.fitcom.fancywebrtc.FancyRTCPeerConnection(utils.ad.getApplicationContext(), configuration.instance);
    }

    public get localDescription(): TNSRTCSessionDescription {
        return this._localDescription;
    }

    public get remoteDescription(): TNSRTCSessionDescription {
        return this._remoteDescription;
    }

    public get connectionState(): TNSRTCPeerConnectionState {
        switch (this.android.getConnectionState()) {
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.NEW:
                return TNSRTCPeerConnectionState.NEW;
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.CONNECTING:
                return TNSRTCPeerConnectionState.CONNECTING;
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.CONNECTED:
                return TNSRTCPeerConnectionState.CONNECTED;
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.DISCONNECTED:
                return TNSRTCPeerConnectionState.DISCONNECTED;
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.CLOSED:
                return TNSRTCPeerConnectionState.CLOSED;
            case co.fitcom.fancywebrtc.FancyRTCPeerConnectionState.FAILED:
                return TNSRTCPeerConnectionState.FAILED;
            default:
                return TNSRTCPeerConnectionState.NEW;
        }
    }

    public onConnectionStateChange(callback: () => void): void {
        this.android.setOnConnectionStateChange(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnConnectionStateChangeListener({
            onChange(): void {
                callback();
            }
        }));
    }

    public onTrack(callback: (track: TNSRTCTrackEvent) => void): void {
        this.android.setOnTrackListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnTrackListener({
            onTrack(trackEvent): void {
                callback(TNSRTCTrackEvent.fromNative(trackEvent));
            }
        }));
    }

    public onRemoveTrackListener(callback: () => void): void {
        this.android.setOnRemoveTrackListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveTrackListener({
            onRemoveTrack(): void {
                callback();
            }
        }));
    }

    public onRemoveStream(callback: (stream: TNSRTCMediaStream) => void): void {
        this.android.setOnRemoveStreamListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnRemoveStreamListener({
            onRemoveStream(nativeStream): void {
                callback(TNSRTCMediaStream.fromNative(nativeStream));
            }
        }));
    }

    public onIceGatheringStateChange(callback: any): void {
        this.android.setOnIceGatheringStateChangeListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceGatheringStateChangeListener({
            onIceGatheringStateChange(): void {
                callback();
            }
        }));
    }

    public onAddStream(callback: (stream: TNSRTCMediaStream) => void): void {
        this.android.setOnAddStreamListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnAddStreamListener({
            onAddStream(nativeStream): void {
                callback(TNSRTCMediaStream.fromNative(nativeStream));
            }
        }));
    }

    public onNegotiationNeeded(callback: () => void): void {
        this.android.setOnNegotiationNeededListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnNegotiationNeededListener({
            onNegotiationNeeded(): void {
                callback();
            }
        }));
    }

    public onSignalingStateChange(callback: () => void): void {
        this.android.setOnSignalingStateChangeListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnSignalingStateChangeListener({
            onSignalingStateChange(): void {
                callback();
            }
        }));
    }

    public onIceCandidate(callback: (candidate: TNSRTCIceCandidate) => void): void {
        this.android.setOnIceCandidateListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnIceCandidateListener({
            onIceCandidate(nativeCandidate): void {
                callback(TNSRTCIceCandidate.fromNative(nativeCandidate));
            }
        }));
    }

    public onDataChannel(callback: (channel: TNSRTCDataChannelEvent) => void): any {
        this.android.setOnDataChannelListener(new co.fitcom.fancywebrtc.FancyRTCPeerConnection.FancyOnDataChannelListener({
            onDataChannel(event): void {
                callback(TNSRTCDataChannelEvent.fromNative(event));
            }
        }));
    }


    public defaultIceServers(): Array<TNSRTCIceServer> {
        const nativeServers = this.android.getDefaultIceServers();
        const size = nativeServers.size();
        const servers: Array<TNSRTCIceServer> = [];
        for (let i = 0; i < size; i++) {
            const nativeServer = nativeServers.get(i);
            servers.push(new TNSRTCIceServer(nativeServer.getUrls() as any, nativeServer.getUsername(), nativeServer.getCredential()));
        }
        return servers;
    }

    public addIceCandidate(candidate: TNSRTCIceCandidate) {
        this.android.addIceCandidate(new co.fitcom.fancywebrtc.FancyRTCIceCandidate(candidate.sdp, candidate.sdpMid, candidate.sdpMLineIndex));
    }

    public addTrack(track: TNSRTCMediaStreamTrack, streamIds: Array<string>) {
        if (streamIds) {
            const ids = new java.util.ArrayList();
            for (let id of streamIds) {
                ids.add(id);
            }
            this.android.addTrack(track.mediaStreamTrack, ids);
        }
    }

    public close() {
        this.android.close();
    }

    public createDataChannel(label: string, channelInit: TNSRTCDataChannelInit): TNSRTCDataChannel {
        const init = new co.fitcom.fancywebrtc.FancyRTCDataChannelInit();
        if (channelInit.id != null) {
            init.getInit().id = channelInit.id;
        }

        if (channelInit.maxPacketLifeTime != null) {
            init.getInit().maxRetransmitTimeMs = channelInit.maxPacketLifeTime;
        }

        if (channelInit.maxRetransmits != null) {
            init.getInit().maxRetransmits = channelInit.maxRetransmits;
        }

        if (channelInit.negotiate != null) {
            init.getInit().negotiated = channelInit.negotiate;
        }

        if (channelInit.protocol != null) {
            init.getInit().protocol = channelInit.protocol;
        }

        if (channelInit.ordered != null) {
            init.getInit().ordered = channelInit.ordered;
        }

        return TNSRTCDataChannel.fromNative(this.android.createDataChannel(label, init));
    }

    public createAnswer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription> {
        return new Promise((resolve, reject) => {
            const constraints = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints();
            if (mediaConstraints.mandatory) {
                for (let constraint of mediaConstraints.mandatory) {
                    const keyValue = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue(constraint.key, constraint.value);
                    constraints.mandatory.add(keyValue);
                }
            }

            if (mediaConstraints.optional) {
                for (let constraint of mediaConstraints.optional) {
                    const keyValue = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue(constraint.key, constraint.value);
                    constraints.mandatory.add(keyValue);
                }
            }
            this.android.createAnswer(constraints, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpCreateListener({
                onError(error: string): void {
                    reject(error);
                },
                onSuccess(sdp): void {
                    resolve(TNSRTCSessionDescription.fromNative(sdp));
                }
            }));
        });
    }

    public createOffer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription> {
        return new Promise((resolve, reject) => {
            const constraints = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints();
            if (mediaConstraints.mandatory) {
                for (let constraint of mediaConstraints.mandatory) {
                    const keyValue = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue(constraint.key, constraint.value);
                    constraints.mandatory.add(keyValue);
                }
            }

            if (mediaConstraints.optional) {
                for (let constraint of mediaConstraints.optional) {
                    const keyValue = new co.fitcom.fancywebrtc.FancyRTCMediaConstraints.KeyValue(constraint.key, constraint.value);
                    constraints.mandatory.add(keyValue);
                }
            }
            this.android.createOffer(constraints, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpCreateListener({
                onError(error: string): void {
                    reject(error);
                },
                onSuccess(sdp): void {
                    resolve(TNSRTCSessionDescription.fromNative(sdp));
                }
            }));
        });
    }

    public setLocalDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            const ref = new WeakRef(this);
            this.android.setLocalDescription(sdp.instance, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener({
                onSuccess(): void {
                    const owner = ref.get();
                    if (owner) {
                        owner._localDescription = sdp;
                    }
                    resolve();
                }, onError(error: string): void {
                    reject(error);
                }
            }));
        });
    }

    public setRemoteDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            const ref = new WeakRef(this);
            this.android.setRemoteDescription(sdp.instance, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener({
                onSuccess(): void {
                    const owner = ref.get();
                    if (owner) {
                        owner._remoteDescription = sdp;
                    }
                    resolve();
                }, onError(error: string): void {
                    reject(error);
                }
            }));
        });
    }

    public dispose() {
        this.android.dispose();
    }

    public getSenders() {
        let senders: TNSRTCRtpSender[] = [];
        const nativeSenders = this.android.getSenders();
        if (nativeSenders) {
            const count = nativeSenders.size();
            for (let i = 0; i < count; i++) {
                senders.push(TNSRTCRtpSender.fromNative(nativeSenders.get(i)));
            }
        }
        return senders;
    }
}
