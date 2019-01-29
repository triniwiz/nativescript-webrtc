export interface TNSRTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    protocol?: string;
    negotiate?: boolean;
    ordered?: boolean;
}
