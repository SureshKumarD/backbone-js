/*global backboneApp, Backbone*/

backboneApp.Models = backboneApp.Models || {};

(function () {
    'use strict';

    backboneApp.Models.MymodelModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    backboneApp.Models.mymodel = new backboneApp.Models.MymodelModel({"name":"Suresh Kumar"});

})();
