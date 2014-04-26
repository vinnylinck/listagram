/*global m */
(function CardController(n) {
    'use strict';
    
    // declaring controller
    n.controller = function (id, transition) {
        this.card = new window.listagram.xCard.model(id, transition);
    };
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));