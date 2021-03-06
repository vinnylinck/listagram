/*global m */
(function HomeView(n) {
    'use strict';

    var drawHeader = function (element) {
        element.firstElementChild.innerHTML = "Listagram";
    };

    // declaring view
    n.view = function (ctrl) {
        return m('.full .scrollable', [
            m('x-appbar#homeBar.redbar', {config: drawHeader}),
            m('.snapped', [
                m('#wall', [
                    m('#columns', [
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 1')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 2')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 3')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 4')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 5')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 6')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 7')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 8')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 9')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 10')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 11')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 12')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 13')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 14')]),
                        m('.pin', [m('img', {src: 'http://placehold.it/78x78'}), m('p', 'legenda 15')])
                    ])
                ]) 
            ]),
            m('.bt-pin', {onclick: ctrl.showForm}, [
                m('i', {class: 'fa fa-camera'}, [])
            ])
        ]);
    };


    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));

// loader
// http://codepen.io/NeekGerd/pen/jnkGy
//http://damien.antipa.at/2012/10/16/ios-pull-to-refresh-in-mobile-safari-with-native-scrolling/