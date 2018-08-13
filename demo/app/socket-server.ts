import { SocketIO } from 'nativescript-socketio';

export class SocketService {
  private static socketIO: SocketIO;
  public static me: string;
  public static getInstance() {
    if (!this.socketIO) {
      SocketService.socketIO = new SocketIO('http://192.168.1.115:3001', {});
    }
    return SocketService.socketIO;
  }
}
