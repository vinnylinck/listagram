/*global m */
(function HomeView(n) {
    'use strict';

    var drawHeader = function (element) {
        element.firstElementChild.innerHTML = "Listagram";
    },
        
        drawWall = function (element) {
        };

    // declaring view
    n.view = function (ctrl) {
        return m('', [
            m('x-appbar#homeBar.redbar', {config: drawHeader}),
            m('','content')
        ]);
    };


    // exporting
    window.listagram.home = n;
}(window.listagram.home || {}));

// loader
// http://codepen.io/NeekGerd/pen/jnkGy
//http://damien.antipa.at/2012/10/16/ios-pull-to-refresh-in-mobile-safari-with-native-scrolling/
/*
   m('', {config: drawWall}, [
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})]),
                m('', [m('img', {src: 'http://placehold.it/100x100'})])
            ])*/