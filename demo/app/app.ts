import * as application from 'tns-core-modules/application';
import './async-await';
import { WebRTC } from 'nativescript-webrtc';
import * as settings from 'tns-core-modules/application-settings';

settings.clear();
WebRTC.init();
application.run({moduleName: 'app-root'});
