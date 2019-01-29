import { topmost } from 'tns-core-modules/ui/frame';

export function toBasic(event) {
    topmost().navigate('login-page');
}

export function toStandard(event) {
    topmost().navigate('standard/standard');
}
