module.exports = function install(Vue) {
	Vue.registerElement('WebRTCView', () => require('../').WebRTCView);
}
