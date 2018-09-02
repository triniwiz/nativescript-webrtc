import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { NSWEBRTCVIEW_DIRECTIVES } from './nativescript-webrtc-directives';
import { WebRTCView } from '../';

@NgModule({
  declarations: [NSWEBRTCVIEW_DIRECTIVES],
  exports: [NSWEBRTCVIEW_DIRECTIVES]
})
export class WebRTCModule {}

registerElement('WebRTCView', () => WebRTCView);
