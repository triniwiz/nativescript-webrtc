import { Observable } from 'tns-core-modules/data/observable';
import * as frame from 'tns-core-modules/ui/frame';
import { SocketIO } from 'nativescript-socketio';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { SocketService } from '~/socket-server';
import * as settings from 'tns-core-modules/application-settings';
export class HelloWorldModel extends Observable {
  socketIO: SocketIO;
  items: ObservableArray<any>;
  constructor() {
    super();
    this.items = new ObservableArray([]);

    this.socketIO = SocketService.getInstance();
    this.socketIO.on('call:incoming', data => {
      frame.topmost().navigate({
        moduleName: 'call',
        context: {
          to: data.to,
          from: data.from,
          sdp: data.sdp,
          type: data.type
        }
      });
    });

    this.socketIO.on('user joined', data => {
      this.items.push(data);
    });

    this.socketIO.on('getUsers', data => {
      this.items.push(data);
    });

    this.socketIO.emit('getUsers', {});
  }

  callUser(event: ItemEventData) {
    const user = this.items.getItem(event.index);
    frame.topmost().navigate({
      moduleName: 'call',
      context: {
        to: user.username,
        from: settings.getString('me')
      }
    });
  }
}
