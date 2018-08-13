import * as application from 'tns-core-modules/application';
import { WebRTC } from 'nativescript-webrtc';
import * as settings from 'tns-core-modules/application-settings';
settings.clear();
WebRTC.init();
application.start({ moduleName: 'login' });
