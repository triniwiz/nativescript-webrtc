import { Directive } from '@angular/core';

@Directive({
  selector: 'WebRTCView'
})
export class WebRTCViewDirective {
  constructor() {}
}
export const NSWEBRTCVIEW_DIRECTIVES = [WebRTCViewDirective];
