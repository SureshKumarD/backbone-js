/*global backboneApp, $*/


window.backboneApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';    
    backboneApp.init();
    Backbone.history.start();
    
});
