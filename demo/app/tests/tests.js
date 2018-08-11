var Webrtc = require("nativescript-webrtc").Webrtc;
var webrtc = new Webrtc();

describe("greet function", function() {
    it("exists", function() {
        expect(webrtc.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(webrtc.greet()).toEqual("Hello, NS");
    });
});