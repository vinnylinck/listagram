/*global m */
(function Deck(n) {
    'use strict';
    
    //
    n.showCard = function (index) {
        var deck = document.getElementById('listagram');
        deck.showCard(index);
    };
    
    // declaring controller
    n.model = function () {
        this.id = m.prop('listagram');
    };
    
    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));