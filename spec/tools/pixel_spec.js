/*jshint strict: true, globalstrict:true*/
/*global describe:false, it:false, expect:false, platform: false*/
"use strict";

describe("platform tools namespace", function(){
    it("should exist", function(){
        expect(platform.tools).toBeDefined();
    });
});

describe("platform.tools.PixelViewer", function(){
    it("should exist", function(){
        expect(platform.tools.PixelViewer).toBeDefined();
    });

    it("should be a constructor", function(){
        expect(platform.tools.PixelViewer instanceof Function).toBeTruthy();
    });
});