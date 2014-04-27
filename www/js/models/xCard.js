/*global m */
(function Card(n) {
    'use strict';
    
    // declaring controller
    n.model = function (cardIndex, domId, transition) {
        this.index = m.prop(cardIndex);
        this.id = m.prop(domId);
        this.transitionType = m.prop(transition || 'slide-left');
    };
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));