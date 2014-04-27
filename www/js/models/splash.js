/*global m */
(function Splash(n) {
    'use strict';
    
    // declaring controller
    n.model = function () {
        
        this.launch = function () {
            setTimeout(function () {
                window.listagram.xDeck.showCard(1);
            }, 3500);
        };
        
    };
    
    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));