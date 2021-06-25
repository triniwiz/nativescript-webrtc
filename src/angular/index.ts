import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { WebRTCView } from '../';

registerElement('WebRTCView', () => WebRTCView);

@Directive({
    selector: 'WebRTCView'
})
export class WebRTCViewDirective {
}

export const NSWEBRTCVIEW_DIRECTIVES = [WebRTCViewDirective];


@NgModule({
    declarations: [NSWEBRTCVIEW_DIRECTIVES],
    exports: [NSWEBRTCVIEW_DIRECTIVES]
})
export class WebRTCModule {
}
