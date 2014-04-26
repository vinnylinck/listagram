/*global m */
(function Listagram() {
    'use strict';
    
    // creating main namespace
    window.listagram = window.listagram || {};
    
    // adding listener to start app
    window.addEventListener('DOMContentLoaded', function Boot() {
        m.module(document.body, window.listagram.xDeck);
    });
}());