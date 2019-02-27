import { StandardViewModel } from './standard-vm';
import { Page } from 'tns-core-modules/ui/page';


let vm: StandardViewModel;
let page: Page;

export function pageLoaded(event) {
    page = event.object;
    if (!vm) {
        vm = new StandardViewModel();
    }
    page.bindingContext = vm;
}

export function videoLoaded(event) {
    if (!vm) {
        vm = new StandardViewModel();
    }
    const view = event.object;
    if (view && view.id === 'localVideoView') {
        vm.localView = view;
        vm.localView.mirror = true;
        vm.init();
    }
    if (view && view.id === 'remoteVideoView') {
        console.log(vm);
        vm.remoteView = view;
    }
}

export function makeCall(event) {
    vm.makeCall(event.object);
}

export function endCall(event) {
    vm.endCall(event.object);
}

export function switchCamera(event) {
    vm.switchCamera(event.object);
}

export function shareScreen(event) {
    vm.shareScreen(event.object);
}
