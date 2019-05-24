export class TNSRTCMediaTrackSettings {
    private _mediaTrackSettings;

    protected constructor(settings) {
        this._mediaTrackSettings = settings;
    }

    public static fromNative(settings) {
        return new TNSRTCMediaTrackSettings(settings);
    }

    public get width(): number {
        return this._mediaTrackSettings.getWidth();
    }

    public get height(): number {
        return this._mediaTrackSettings.getHeight();
    }

    public get frameRate(): number {
        return this._mediaTrackSettings.getFrameRate();
    }

    public get aspectRatio(): number {
        return this._mediaTrackSettings.getAspectRatio();
    }

    public get facingMode(): string {
        return this._mediaTrackSettings.facingMode();
    }
}
