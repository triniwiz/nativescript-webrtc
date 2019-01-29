import { TNSRTCSdpType } from './TNSRTCSdpType';

export class TNSRTCSessionDescription {

    private _sessionDescription;

    constructor(...args) {
        if (args.length === 1) {
            this._sessionDescription = args[0];
        } else {
            let type: TNSRTCSdpType = args[0];
            let sdp: string = args[1];
            let nativeType;
            switch (type) {
                case TNSRTCSdpType.ANSWER:
                    nativeType = co.fitcom.fancywebrtc.FancyRTCSdpType.ANSWER;
                    break;
                case TNSRTCSdpType.OFFER:
                    nativeType = co.fitcom.fancywebrtc.FancyRTCSdpType.OFFER;
                    break;
                case TNSRTCSdpType.PRANSWER:
                    nativeType = co.fitcom.fancywebrtc.FancyRTCSdpType.PRANSWER;
                    break;
                case TNSRTCSdpType.ROLLBACK:
                    nativeType = co.fitcom.fancywebrtc.FancyRTCSdpType.ROLLBACK;
                    break;
            }
            this._sessionDescription = new co.fitcom.fancywebrtc.FancyRTCSessionDescription(nativeType, sdp);
        }
    }

    public static fromNative(sdp) {
        return new TNSRTCSessionDescription(sdp);
    }

    public get type(): TNSRTCSdpType {
        switch (this._sessionDescription.getType()) {
            case co.fitcom.fancywebrtc.FancyRTCSdpType.ANSWER:
                return TNSRTCSdpType.ANSWER;
            case co.fitcom.fancywebrtc.FancyRTCSdpType.OFFER:
                return TNSRTCSdpType.OFFER;
            case co.fitcom.fancywebrtc.FancyRTCSdpType.PRANSWER:
                return TNSRTCSdpType.PRANSWER;
            case co.fitcom.fancywebrtc.FancyRTCSdpType.ROLLBACK:
                return TNSRTCSdpType.ROLLBACK;
            default:
                return null;
        }
    }

    public get sdp(): string {
        return this._sessionDescription.getSDP();
    }

    public toJSON(): string {
        return this._sessionDescription.toJSON();
    }

    public get instance() {
        return this._sessionDescription;
    }

    public get android() {
        return this._sessionDescription.getSessionDescription();
    }

}
