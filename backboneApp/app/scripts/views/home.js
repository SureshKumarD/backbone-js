/*global backboneApp, Backbone, JST*/

backboneApp.Views = backboneApp.Views || {};

(function () {
    'use strict';

    backboneApp.Views.HomeView = Backbone.View.extend({

//        template: JST['app/scripts/templates/home.ejs']

        events:{
          "click #add" : "addNewName"  
        },
        initialize: function(){
        backboneApp.Collections.myCollection.on("add",this.render,this);
        },
        render: function(){        
          
            var that = this;
            $.get("scripts/templates/home.html", function(data){
                console.log("_.template(data)"+_.template(data));
               that.$el.html(_.template(data)); 
            });
        }, 
        addNewName: function(){
            var temp = {};
            temp.name = $("#name").val();
            var tempModel = new backboneApp.Models.MymodelModel(temp);
            backboneApp.Collections.myCollection.add(tempModel);
        }

    });

})();
