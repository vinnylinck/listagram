/*global m */
(function SplashView(n) {
    'use strict';

    // declaring view
    n.view = function (ctrl) {
        return m('x-card[transition-type=fade-scale]', {config: ctrl.init}, [
            m('.full .aligner', [
                m('.item', [
                    m('.spinner')
                ]),
                m('.item', [
                    m('.spinner-text', 'loading')
                ])
            ])
        ]);
    };


    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));