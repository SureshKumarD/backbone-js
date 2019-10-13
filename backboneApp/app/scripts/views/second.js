/*global backboneApp, Backbone, JST*/

backboneApp.Views = backboneApp.Views || {};

(function () {
    'use strict';

    backboneApp.Views.SecondView = Backbone.View.extend({

//        template: JST['app/scripts/templates/second.ejs']
        
        

    events:{
        "click #goBack" : "goBack"
    },
    
    render: function(){
        var that = this;        
        $.get("scripts/templates/second.html", function(data){           
            this.template = _.template(data);
            that.$el.html(this.template());
        });
    },
    
    goBack: function()
    {       
        window.history.back();
    }

    });

})();
