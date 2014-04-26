/*global m */
(function DeckController(n) {
    'use strict';
    
    // declaring controller
    n.controller = function () {
        this.deck = new window.listagram.xDeck.model();
    };
    
    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));