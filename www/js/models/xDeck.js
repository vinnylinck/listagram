/*global m */
(function Deck(n) {
    'use strict';
    
    // declaring controller
    n.model = function () {
        this.id = m.prop('listagram');
    };
    
    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));