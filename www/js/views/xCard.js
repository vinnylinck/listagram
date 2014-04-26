/*global m */
(function DeckView(n) {
    'use strict';
        
    // declaring view
    n.view = function (ctrl) {
        return m('x-card#' + ctrl.card.id() + '[transition-type=' + ctrl.card.transitionType() + ']', []);
    };
    
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));