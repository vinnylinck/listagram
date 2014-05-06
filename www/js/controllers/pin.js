/*global m */
(function PinController(n) {
    'use strict';

    // declaring controller
    n.controller = function () {
        this.pin = new window.listagram.pin.model();
        this.hideForm = function () {
            setTimeout(function () {
                listagram.xDeck.showCard(1);
            });
        };
    };

    // exporting
    window.listagram.pin = n;
}(window.listagram.pin || {}));