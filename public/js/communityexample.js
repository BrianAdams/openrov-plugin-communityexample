(function (window, $, undefined) {
    'use strict';

    var CommunityExample;

    CommunityExample = function Example(cockpit) {
        console.log("Loading community example plugin in the browser.");

        // Instance variables
        this.cockpit = cockpit;

        alert('Community Example Plugin Loaded');
    };

    window.Cockpit.plugins.push(CommunityExample);

}(window, jQuery));
