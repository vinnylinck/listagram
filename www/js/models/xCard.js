/*global m */
(function Card(n) {
    'use strict';
    
    // declaring controller
    n.model = function (domId, transition) {
        this.id = m.prop(domId);
        this.transitionType = m.prop(transition || 'slide-left');
    };
    
    // exporting
    window.listagram.xCard = n;
}(window.listagram.xCard || {}));