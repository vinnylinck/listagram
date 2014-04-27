/*global m */
(function CardView(n) {
    'use strict';
        
    // declaring view
    n.view = function (ctrl, children) {
        return m('x-card#' + ctrl.card.id() + '[transition-type=' + ctrl.card.transitionType() + ']', children);
    };
    
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));