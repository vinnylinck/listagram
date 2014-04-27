/*global m */
(function SplashView(n) {
    'use strict';

    // declaring view
    n.view = function (ctrl) {
        return m('.full .aligner', {config: ctrl.init}, [
            m('.item', [
                m('.spinner')
            ]),
            m('.item', [
                m('.spinner-text', 'loading')
            ])
        ]);
    };


    // exporting
    window.listagram.splash = n;
}(window.listagram.splash || {}));