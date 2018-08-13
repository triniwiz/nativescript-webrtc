import { Observable } from 'tns-core-modules/data/observable';
import { SocketIO } from 'nativescript-socketio';
import { SocketService } from '~/socket-server';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class LoginViewModel extends Observable {
  socket: SocketIO;
  username: string;
  constructor() {
    super();
    this.socket = SocketService.getInstance();
    this.socket.on('login', data => {
      topmost().navigate('main-page');
    });
    this.socket.connect();
  }

  login() {
    this.socket.emit('add user', {
      username: this.username
    });
    SocketService.me = this.username;
  }
}
