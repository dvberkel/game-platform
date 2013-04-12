/*global document: false, platform:true*/
(function(document, platform, undefined){
    "use strict";
    platform.tools = platform.tools || {};

    var PixelViewer = function(){
        var container = document.createElement("div");
        container.setAttribute("class", "pixel container");
        document.body.appendChild(container);
    };

    var tools = platform.tools;
    tools.PixelViewer = PixelViewer;
})(document, platform);