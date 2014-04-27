/*global m */
(function HomeView(n) {
    'use strict';

    // declaring view
    n.view = function (ctrl) {
        return m('', 'this is home');
    };


    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));