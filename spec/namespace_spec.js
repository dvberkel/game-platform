/*globals describe:false, it:false, expect:false, platform: false*/
"use strict";

describe("platform namespace", function(){
    it("should exist", function(){
	expect(platform).toBeDefined();
    });

    it("should have a version", function(){
	expect(platform.version).toBeDefined();
    });
});