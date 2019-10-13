/*global backboneApp, Backbone*/

backboneApp.Routers = backboneApp.Routers || {};

(function () {
    'use strict';

    backboneApp.Routers.MyrouteRouter = Backbone.Router.extend({
        
        //1
        routes: {
            "" : "goToHome",
            "second" : "goToSecond"
        },
        
        //2
        initialize: function()
        {
            console.log("hello");
            this.$content = $("#contentHolder");
        },
        
        //3
        goToHome: function()
        {
            console.log("inside go to home ()");
            this.homeView = new backboneApp.Views.HomeView();
            this.homeView.render();
            this.$content.html(this.homeView.el);
        },
        
        //4
        goToSecond: function()
        {
            this.secondView = new backboneApp.Views.SecondView();
            this.secondView.render();
            this.$content.html(this.secondView.el);
        }
    });
   
   backboneApp.Routers.myroute = new backboneApp.Routers.MyrouteRouter();

})();
