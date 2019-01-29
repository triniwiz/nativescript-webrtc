import { TNSRTCSessionDescription } from './TNSRTCSessionDescription';
import { TNSRTCSdpType } from './TNSRTCSdpType';
import { TNSRTCPeerConnectionState } from './TNSRTCPeerConnectionState';
import { TNSRTCIceServer } from './TNSRTCIceServer';
import { TNSRTCIceCandidate } from './TNSRTCIceCandidate';
import { TNSRTCMediaStreamTrack } from './TNSRTCMediaStreamTrack';
import { TNSRTCDataChannelInit } from '../core/TNSRTCDataChannelInit';
import { TNSRTCDataChannel } from './TNSRTCDataChannel';
import { TNSRTCMediaConstraints } from '../core/TNSRTCMediaConstraints';
import { TNSRTCDataChannelEvent, TNSRTCMediaStream, TNSRTCTrackEvent } from './';
import { TNSRTCConfiguration } from './TNSRTCConfiguration';

declare var FancyRTCPeerConnection, FancyRTCSdpType, FancyRTCPeerConnectionState,
    FancyRTCIceCandidate, FancyRTCMediaConstraints, FancyRTCDataChannelInit,
    FancyRTCKeyValue;

export class TNSRTCPeerConnection {
    ios: FancyRTCPeerConnection;

    constructor(config?: TNSRTCConfiguration) {
        const configuration = config ? config : new TNSRTCConfiguration();
        this.ios = FancyRTCPeerConnection.alloc().initWithConfig(configuration.instance);
    }

    public get localDescription(): TNSRTCSessionDescription {
        const localDescription = this.ios.localDescription;
        if (localDescription) {
            let type: TNSRTCSdpType;
            switch (localDescription.type) {
                case FancyRTCSdpType.ANSWER:
                    type = TNSRTCSdpType.ANSWER;
                    break;
                case FancyRTCSdpType.OFFER:
                    type = TNSRTCSdpType.OFFER;
                    break;
                case FancyRTCSdpType.PRANSWER:
                    type = TNSRTCSdpType.PRANSWER;
                    break;
                case FancyRTCSdpType.ROLLBACK:
                    type = TNSRTCSdpType.ROLLBACK;
                    break;
            }
            return new TNSRTCSessionDescription(type, localDescription.sdp);
        }
        return null;
    }

    public get remoteDescription(): TNSRTCSessionDescription {
        const remoteDescription = this.ios.remoteDescription;
        if (remoteDescription) {
            let type: TNSRTCSdpType;
            switch (remoteDescription.type) {
                case FancyRTCSdpType.ANSWER:
                    type = TNSRTCSdpType.ANSWER;
                    break;
                case FancyRTCSdpType.OFFER:
                    type = TNSRTCSdpType.OFFER;
                    break;
                case FancyRTCSdpType.PRANSWER:
                    type = TNSRTCSdpType.PRANSWER;
                    break;
                case FancyRTCSdpType.ROLLBACK:
                    type = TNSRTCSdpType.ROLLBACK;
                    break;
            }
            return new TNSRTCSessionDescription(type, remoteDescription.sdp);
        }
        return null;
    }

    public get connectionState(): TNSRTCPeerConnectionState {
        switch (this.ios.connectionState) {
            case FancyRTCPeerConnectionState.NEW:
                return TNSRTCPeerConnectionState.NEW;
            case FancyRTCPeerConnectionState.CONNECTING:
                return TNSRTCPeerConnectionState.CONNECTING;
            case FancyRTCPeerConnectionState.CONNECTED:
                return TNSRTCPeerConnectionState.CONNECTED;
            case FancyRTCPeerConnectionState.DISCONNECTED:
                return TNSRTCPeerConnectionState.DISCONNECTED;
            case FancyRTCPeerConnectionState.CLOSED:
                return TNSRTCPeerConnectionState.CLOSED;
            case FancyRTCPeerConnectionState.FAILED:
                return TNSRTCPeerConnectionState.FAILED;
            default:
                return TNSRTCPeerConnectionState.NEW;
        }
    }

    public onConnectionStateChange(callback: () => void): void {
        this.ios.onConnectionStateChange = () => {
            callback();
        };
    }

    public onTrack(callback: (track: TNSRTCTrackEvent) => void): void {
        this.ios.onTrack = (track) => {
            callback(TNSRTCTrackEvent.fromNative(track));
        };
    }

    public onRemoveTrackListener(callback: () => void): void {
        this.ios.onRemoveTrack = () => {
            callback();
        };
    }

    public onRemoveStream(callback: (stream: TNSRTCMediaStream) => void): void {
        this.ios.onRemoveStream = (nativeStream) => {
            callback(TNSRTCMediaStream.fromNative(nativeStream));
        };
    }

    public onIceGatheringStateChange(callback: any): void {
        this.ios.onIceGatheringStateChange = () => {
            callback();
        };
    }

    public onAddStream(callback: any): void {
        this.ios.onAddStream = (nativeStream) => {
            callback(TNSRTCMediaStream.fromNative(nativeStream));
        };
    }

    public onNegotiationNeeded(callback: () => void): void {
        this.ios.onNegotiationNeeded = () => {
            callback();
        };
    }

    public onSignalingStateChange(callback: () => void): void {
        this.ios.onSignalingStateChange = () => {
            callback();
        };
    }

    public onIceCandidate(callback: (candidate: TNSRTCIceCandidate) => void): void {
        this.ios.onIceCandidate = (nativeCandidate) => {
            callback(TNSRTCIceCandidate.fromNative(nativeCandidate));
        };
    }

    public onDataChannel(callback: (channel: TNSRTCDataChannelEvent) => void): any {
        this.ios.onDataChannel = (event) => {
            callback(TNSRTCDataChannelEvent.fromNative(event));
        };
    }


    public defaultIceServers(): Array<TNSRTCIceServer> {
        const nativeServers = this.ios.defaultIceServers;
        const size = nativeServers.count;
        const servers: Array<TNSRTCIceServer> = [];
        for (let i = 0; i < size; i++) {
            const nativeServer = nativeServers.objectAtIndex(i);
            servers.push(new TNSRTCIceServer(nativeServer.urls as any, nativeServer.username, nativeServer.credential));
        }
        return servers;
    }

    public addIceCandidate(candidate: TNSRTCIceCandidate) {
        this.ios.addIceCandidateWithCandidate(FancyRTCIceCandidate.alloc().initWithSdpSdpMidSdpMLineIndex(candidate.sdp, candidate.sdpMid, candidate.sdpMLineIndex));
    }

    public addTrack(track: TNSRTCMediaStreamTrack, streamIds: Array<string>) {
        this.ios.addTrackWithTrackStreamIds(track.mediaStreamTrack, streamIds as any);
    }

    public close() {
        this.ios.close();
    }

    public createDataChannel(label: string, channelInit: TNSRTCDataChannelInit): TNSRTCDataChannel {
        const init = FancyRTCDataChannelInit.new();
        if (channelInit.id != null) {
            init.channelInit.channelId = channelInit.id;
        }

        if (channelInit.maxPacketLifeTime != null) {
            init.channelInit.maxPacketLifeTime = channelInit.maxPacketLifeTime;
        }

        if (channelInit.maxRetransmits != null) {
            init.channelInit.maxRetransmits = channelInit.maxRetransmits;
        }

        if (channelInit.negotiate != null) {
            init.channelInit.isNegotiated = channelInit.negotiate;
        }

        if (channelInit.protocol != null) {
            init.channelInit.protocol = channelInit.protocol;
        }

        if (channelInit.ordered != null) {
            init.channelInit.isOrdered = channelInit.ordered;
        }

        return TNSRTCDataChannel.fromNative(this.ios.createDataChannelWithLabelChannelInit(label, init));
    }

    public createAnswer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription> {
        return new Promise((resolve, reject) => {
            const constraints = FancyRTCMediaConstraints.new();
            if (mediaConstraints.mandatory) {
                for (let constraint of mediaConstraints.mandatory) {
                    const keyValue = FancyRTCKeyValue.alloc().initWithKeyValue(constraint.key, constraint.value);
                    constraints.mandatory.arrayByAddingObject(keyValue);
                }
            }

            if (mediaConstraints.optional) {
                for (let constraint of mediaConstraints.optional) {
                    const keyValue = FancyRTCKeyValue.alloc().initWithKeyValue(constraint.key, constraint.value);
                    constraints.mandatory.arrayByAddingObject(keyValue);
                }
            }
            this.ios.createAnswerWithMediaConstraintsListener(constraints, (sdp, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(TNSRTCSessionDescription.fromNative(sdp));
                }
            });
        });
    }

    public createOffer(mediaConstraints: TNSRTCMediaConstraints): Promise<TNSRTCSessionDescription> {
        const constraints = FancyRTCMediaConstraints.new();
        if (mediaConstraints.mandatory) {
            for (let constraint of mediaConstraints.mandatory) {
                const keyValue = FancyRTCKeyValue.alloc().initWithKeyValue(constraint.key, constraint.value);
                constraints.mandatory.arrayByAddingObject(keyValue);
            }
        }

        if (mediaConstraints.optional) {
            for (let constraint of mediaConstraints.optional) {
                const keyValue = FancyRTCKeyValue.alloc().initWithKeyValue(constraint.key, constraint.value);
                constraints.mandatory.arrayByAddingObject(keyValue);
            }
        }

        return new Promise((resolve, reject) => {
            this.ios.createOfferWithMediaConstraintsListener(constraints, (sdp, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(TNSRTCSessionDescription.fromNative(sdp));
                }
            });
        });
    }

    public setLocalDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            this.ios.localDescriptionWithSdpListener(sdp.instance, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    public setRemoteDescription(sdp: TNSRTCSessionDescription): Promise<any> {
        return new Promise((resolve, reject) => {
            this.ios.remoteDescriptionWithSdpListener(sdp.instance, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    public dispose() {
        this.ios.dispose();
    }

}
