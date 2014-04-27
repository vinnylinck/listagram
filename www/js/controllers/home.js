/*global m */
(function HomeController(n) {
    'use strict';
    
    // declaring controller
    n.controller = function () {
        this.home = new window.listagram.home.model();
    };
    
    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));