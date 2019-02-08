import Vue from 'nativescript-vue'
import App from './components/App'
import WebRTCView from 'nativescript-webrtc-plugin/vue';
import { WebRTC } from 'nativescript-webrtc-plugin';
import * as settings from 'tns-core-modules/application-settings';
settings.clear();
WebRTC.init();
Vue.use(WebRTCView)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
