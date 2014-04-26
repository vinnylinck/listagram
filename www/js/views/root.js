/*global m */
(function RootController(n) {
    'use strict';
    
    // handling view rendering
    var render = function (element) {
        element.setAttribute('selected-index', 0);
    };
    
    // declaring view
    n.view = function () {
        return m('x-deck', {config: render}, [
            m('x-card[transition-type=fade-scale]', [
                m('.full .aligner', [
                    m('.item', [
                        m('.spinner')
                    ]),
                    m('.item', [
                        m('.spinner-text', 'loading')
                    ])
                ])
            ])
        ]);
    };
    
    
    // exporting
    window.listagram.root = n;
}(window.listagram.root || {}));