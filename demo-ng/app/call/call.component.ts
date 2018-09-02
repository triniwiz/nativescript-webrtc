import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CallService } from '~/call.service';
import { Page } from 'tns-core-modules/ui/page';
import { SocketIO } from 'nativescript-socketio';

@Component({
  moduleId: module.id,
  selector: 'call',
  templateUrl: 'call.component.html'
})
export class CallComponent implements AfterViewInit {
  currentUser: string;

  constructor(private callService: CallService, private page: Page) {}

  ngAfterViewInit() {
    this.callService.localVideoView = this.page.getViewById('localVideoView');
    this.callService.remoteVideoView = this.page.getViewById('remoteVideoView');

    const from = this.callService.callData.from;
    const to = this.callService.callData.to;
    const sdp = this.callService.callData.sdp;
    const type = this.callService.callData.type;

    if (this.callService.isInitiator) {
      this.callService.call(to);
    } else {
      this.callService.answer(from, to, sdp, type);
    }
  }
}
