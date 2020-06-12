import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular/modal-dialog';

import { WebRTCPeer } from './webrtc.model';


@Component({
  moduleId: module.id,
  template: `
    <StackLayout>
      <ListView [items]="peers">
        <ng-template let-item="item">
          <StackLayout (tap)="onItemTap(item.clientId)">
            <Label [text]="item.displayName"></Label>
          </StackLayout>
        </ng-template>
      </ListView>
    </StackLayout>
  `,
  styles: [`
    ListView { margin: 20 0; }
    Label { font-size: 22; }
  `],
})
export class PeerSelectModal implements OnInit {
  public peers: Array<WebRTCPeer>;
 
  constructor(
    public modalParams: ModalDialogParams,
  ) {}

  public ngOnInit() {
    this.peers = Array.isArray(this.modalParams.context) ? this.modalParams.context : [];
  }

  public onItemTap(peerId) {
    this.modalParams.closeCallback(peerId);
  }
}
