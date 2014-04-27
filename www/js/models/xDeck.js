/*global m */
(function Deck(n) {
    'use strict';
    
    //
    n.showCard = function (index) {
        console.log('show card ', index);
    };
    
    // declaring controller
    n.model = function () {
        this.id = m.prop('listagram');
    };
    
    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));