/*global m */
(function DeckView(n) {
    'use strict';

    // handling view rendering
    var draw = function (element) {
        element.setAttribute('selected-index', 0);
    };

    // declaring view
    n.view = function (ctrl) {
        return m('x-deck#' + ctrl.deck.id(), {config: draw}, [
            
            // splash screen
            new window.listagram.xCard.view(
                new window.listagram.xCard.controller(0, 'splash-card', 'fade-scale'),
                [
                    new window.listagram.splash.view(new window.listagram.splash.controller())
                ]
            ),
            
            // home screen
            new window.listagram.xCard.view(new window.listagram.xCard.controller(1, 'home-card')),
            
            // debug screen
            new window.listagram.xCard.view(new window.listagram.xCard.controller(2, 'debug-card')),
            
            // log screen
            new window.listagram.xCard.view(new window.listagram.xCard.controller(3, 'config-card'))
        ]);
    };


    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));