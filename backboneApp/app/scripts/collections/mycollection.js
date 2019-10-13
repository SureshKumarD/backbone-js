/*global backboneApp, Backbone*/

backboneApp.Collections = backboneApp.Collections || {};

(function () {
    'use strict';

    backboneApp.Collections.MycollectionCollection = Backbone.Collection.extend({

        model: backboneApp.Models.MymodelModel

    });
    console.log("backbneApp.Models.mymodel"+backboneApp.Models.mymodel);
    backboneApp.Collections.myCollection = new backboneApp.Collections.MycollectionCollection(backboneApp.Models.mymodel);
})();
