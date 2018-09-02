import { Component } from '@angular/core';
import { SocketIO } from 'nativescript-socketio';
import { Router } from '@angular/router';
@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private socket: SocketIO, private router: Router) {}

  ngOnInit() {
    this.socket.on('disconnect', () => {
      this.router.navigate(['login']);
    });
    this.socket.connect();
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
