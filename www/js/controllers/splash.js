/*global m */
(function SplashController(n) {
    'use strict';
    
    // declaring controller
    n.controller = function () {
        this.splash = new window.listagram.splash.model();
    };
    
    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));