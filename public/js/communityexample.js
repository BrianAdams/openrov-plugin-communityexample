(function (window, $, undefined) {
    'use strict';

    var CommunityExample;

    Example = function Example(cockpit) {
        console.log("Loading community example plugin in the browser.");

        // Instance variables
        this.cockpit = cockpit;

        alert('Community Example Plugin Loaded');
    };

    window.Cockpit.plugins.push(Example);

}(window, jQuery));
