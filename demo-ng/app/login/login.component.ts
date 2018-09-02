import { Component, OnInit } from '@angular/core';
import { SocketIO } from 'nativescript-socketio';
import { CallService } from '~/call.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username: string = '';

  constructor(
    private callService: CallService,
    private socket: SocketIO,
    private router: RouterExtensions
  ) {
    this.socket.on('login', data => {
      router.navigate(['/main']);
    });
  }

  login(event) {
    this.callService.currentUser = this.username;
    this.socket.emit('add user', {
      username: this.username
    });
  }
}
