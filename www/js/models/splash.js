/*global m */
(function Splash(n) {
    'use strict';
    
    // declaring controller
    n.model = function () {
        
        this.launch = function () {
            console.log('launch');
        };
        
    };
    
    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));