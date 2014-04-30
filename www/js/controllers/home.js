/*global m */
(function HomeController(n) {
    'use strict';

    // declaring controller
    n.controller = function () {
        this.home = new window.listagram.home.model();
        this.showForm = function () {
            setTimeout(function () {
                listagram.xDeck.showCard(2);
            });
        };
    };

    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));