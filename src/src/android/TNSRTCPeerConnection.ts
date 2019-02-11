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
    TNSRTCTrackEvent
} from './';
import * as app from 'tns-core-modules/application';
import { TNSRTCPeerConnectionState } from '../core/TNSRTCPeerConnectionState';

declare var co;

export class TNSRTCPeerConnection {
    android;

    constructor(config?: TNSRTCConfiguration) {
        const configuration = config  && config instanceof TNSRTCConfiguration ? config : new TNSRTCConfiguration();
        this.android = new co.fitcom.fancywebrtc.FancyRTCPeerConnection(app.android.context, configuration.instance);
    }

    public get localDescription(): TNSRTCSessionDescription {
        const localDescription = this.android.getLocalDescription();
        if (localDescription) {
            return TNSRTCSessionDescription.fromNative(localDescription);
        }
        return null;
    }

    public get remoteDescription(): TNSRTCSessionDescription {
        const remoteDescription = this.android.getRemoteDescription();
        if (remoteDescription) {
            return TNSRTCSessionDescription.fromNative(remoteDescription);
        }
        return null;
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
        const ids = new java.util.ArrayList();
        for (let id of streamIds) {
            ids.add(id);
        }
        this.android.addTrack(track.mediaStreamTrack, ids);
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
                    setTimeout(() => { // TODO check why this is needed to fix the freezing when getting local SDP
                        resolve(TNSRTCSessionDescription.fromNative(sdp));
                    });
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
                    setTimeout(() => {
                        resolve(TNSRTCSessionDescription.fromNative(sdp));
                    });
                }
            }));
        });
    }

    public setLocalDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            this.android.setLocalDescription(sdp.instance, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener({
                onSuccess(): void {
                    setTimeout(() => {
                        resolve();
                    });
                }, onError(error: string): void {
                    reject(error);
                }
            }));
        });
    }

    public setRemoteDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            this.android.setRemoteDescription(sdp.instance, new co.fitcom.fancywebrtc.FancyRTCPeerConnection.SdpSetListener({
                onSuccess(): void {
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
}
