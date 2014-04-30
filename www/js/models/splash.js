/*global m */
(function Splash(n) {
    'use strict';

    // setting launched flag
    listagram.xDeck.launched = false;
    
    // declaring model
    n.model = function () {
        
        this.launch = function () {
            
            // checking if it was launched
            if (!listagram.xDeck.launched) {
                
                // changing flag
                listagram.xDeck.launched = true;
                
                // launching app
                setTimeout(function () {
                    listagram.xDeck.showCard(1);
                }, 3500);
            }
        };

    };

    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));