import {SocketIO} from 'nativescript-socketio';
export default {
    socket: new SocketIO('http://192.168.0.10:3001', {
        forceNew: true,
        secure: false
    }),
    getInstance(){
        return this.socket;
    }
}
