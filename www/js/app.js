/*global m */
(function Listagram() {
    'use strict';
    
    window.addEventListener('DOMContentLoaded', function Boot() {
        m.module(document.body, window.listagram.root);
    });
}());