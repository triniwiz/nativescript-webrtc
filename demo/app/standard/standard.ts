import { StandardViewModel } from './standard-vm';
import { Page } from 'tns-core-modules/ui/page';


let vm: StandardViewModel;
let page: Page;

export function pageLoaded(event) {
    page = event.object;
    vm = new StandardViewModel();
    vm.localView = page.getViewById('localVideoView');
    vm.localView.mirror = true;
    vm.remoteView = page.getViewById('remoteVideoView');
    vm.init();
    page.bindingContext = vm;
}


export function makeCall(event) {
    vm.makeCall(event.object);
}

export function endCall(event) {
    vm.endCall(event.object);
}
