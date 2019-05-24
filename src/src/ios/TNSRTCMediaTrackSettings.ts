export class TNSRTCMediaTrackSettings {
    private _mediaTrackSettings;

    protected constructor(settings) {
        this._mediaTrackSettings = settings;
    }

    public static fromNative(settings) {
        return new TNSRTCMediaTrackSettings(settings);
    }


    public get width(): number {
        return this._mediaTrackSettings.width;
    }

    public get height(): number {
        return this._mediaTrackSettings.height;
    }

    public get frameRate(): number {
        return this._mediaTrackSettings.frameRate;
    }

    public get aspectRatio(): number {
        return this._mediaTrackSettings.aspectRatio;
    }

    public get facingMode(): string {
        return this._mediaTrackSettings.facingMode;
    }
}
