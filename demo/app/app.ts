import * as application from 'tns-core-modules/application';
import { WebRTC } from 'nativescript-webrtc';
WebRTC.init();
application.start({ moduleName: 'main-page' });
