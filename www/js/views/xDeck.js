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
            new window.listagram.xCard.view(
                new window.listagram.xCard.controller(1, 'home-card', 'slide-up'),
                [
                    new window.listagram.home.view(new window.listagram.home.controller())
                ]
            ),

            // new lsit
            new window.listagram.xCard.view(
                new window.listagram.xCard.controller(2, 'new-pin', 'slide-down'), 
                [
                    m('','NEW PIN')
                ]),

            // log screen
            new window.listagram.xCard.view(new window.listagram.xCard.controller(3, 'config-card'))
        ]);
    };


    // exporting
    window.listagram.xDeck = n;
}(window.listagram.xDeck || {}));