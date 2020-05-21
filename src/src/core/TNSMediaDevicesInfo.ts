export class TNSMediaDevicesInfo {
  public readonly deviceId: string;
  public readonly groupId: string;
  public readonly kind: string;
  public readonly label: string;
  constructor(deviceId: string, groupId: string, kind: string, label: string) {
    this.deviceId = deviceId;
    this.groupId = groupId;
    this.kind = kind;
    this.label = label;
  }
}
