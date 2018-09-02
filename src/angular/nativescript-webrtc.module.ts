import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { NSWEBRTCVIEW_DIRECTIVES } from './nativescript-webrtc-directives';
import { WebRTCView } from '../';

registerElement('WebRTCView', () => WebRTCView);

@NgModule({
    declarations: [NSWEBRTCVIEW_DIRECTIVES],
    exports: [NSWEBRTCVIEW_DIRECTIVES]
})
export class WebRTCModule {
}
