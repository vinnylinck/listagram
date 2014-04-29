/*global m */
(function HomeView(n) {
    'use strict';

    var drawHeader = function (element) {
        element.firstElementChild.innerHTML = "Listagram";
    };

    // declaring view
    n.view = function (ctrl) {
        return m('', [
            m('x-appbar#homeBar.redbar', {config: drawHeader}),
            m('', 'content')
        ]);
    };


    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));