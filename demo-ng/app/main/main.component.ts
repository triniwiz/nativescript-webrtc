import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { CallService } from '~/call.service';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterExtensions } from 'nativescript-angular/router';
import { SocketIO } from 'nativescript-socketio';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {
  users: any[];
  constructor(
    public callService: CallService,
    private zone: NgZone,
    private router: RouterExtensions,
    private socket: SocketIO
  ) {}

  ngOnInit() {
    this.users = [];

    this.socket.on('user joined', data => {
      this.zone.run(() => {
        this.users.push(data);
      });
    });

    this.socket.on('call:incoming', data => {
      this.zone.run(() => {
        this.callService.isInitiator = false;
        this.callService.callData = {
          to: data.to,
          from: data.from,
          sdp: data.sdp,
          type: data.type
        };
        this.router.navigate(['call']);
      });
    });

    this.socket.on('getUsers', data => {
      this.users = [...data];
    });
    this.callService.getUsers();
  }

  callUser(event: ItemEventData) {
    const user = this.users[event.index];
    this.callService.isInitiator = true;
    this.callService.callData = {
      to: user.username,
      from: this.callService.currentUser
    };
    this.router.navigate(['call']);
  }
}
