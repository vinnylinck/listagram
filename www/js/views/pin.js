/*global m */
(function PinView(n) {
    'use strict';

    var drawHeader = function (element) {
        element.firstElementChild.innerHTML = "New Pin";
    };

    // declaring view
    n.view = function (ctrl) {
        return m('.full .scrollable', [
            m('x-appbar#homeBar.redbar', {config: drawHeader}),
            m('.snapped', [
               m('','NEW PIN')
            ]),
            m('.bt-pin', {onclick: ctrl.hideForm}, [
                m('i', {class: 'fa fa-eject'}, [])
            ])
        ]);
    };


    // exporting
    window.listagram.pin = n;
}(window.listagram.pin || {}));