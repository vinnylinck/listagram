/*global m */
(function CardController(n) {
    'use strict';
    
    // declaring controller
    n.controller = function (index, id, transition) {
        this.card = new window.listagram.xCard.model(index, id, transition);
    };
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));