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
                    nativeType = FancyRTCSdpType.ANSWER;
                    break;
                case TNSRTCSdpType.OFFER:
                    nativeType = FancyRTCSdpType.OFFER;
                    break;
                case TNSRTCSdpType.PRANSWER:
                    nativeType = FancyRTCSdpType.PRANSWER;
                    break;
                case TNSRTCSdpType.ROLLBACK:
                    nativeType = FancyRTCSdpType.ROLLBACK;
                    break;
            }
            this._sessionDescription = FancyRTCSessionDescription.alloc().initWithTypeDescription(nativeType, sdp);
        }
    }


    public get type(): TNSRTCSdpType {
        switch (this._sessionDescription.type) {
            case FancyRTCSdpType.ANSWER:
                return TNSRTCSdpType.ANSWER;
            case FancyRTCSdpType.OFFER:
                return TNSRTCSdpType.OFFER;
            case FancyRTCSdpType.PRANSWER:
                return TNSRTCSdpType.PRANSWER;
            default:
                return null;
        }
    }

    public static fromNative(sdp) {
        return new TNSRTCSessionDescription(sdp);
    }

    public get sdp(): string {
        return this._sessionDescription.sdp;
    }

    public toJSON(): string {
        return this._sessionDescription.toJSON();
    }

    public get instance() {
        return this._sessionDescription;
    }

    public get ios() {
        return this._sessionDescription.sessionDescription;
    }

}
