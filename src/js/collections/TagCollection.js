define(
  [
    'jquery',
    'underscore',
    'backbone'
  ], function(jQuery, _, Backbone){

    return Backbone.Collection.extend({
        initialize: function() {
            this.activeTags= this.models 
        }
             
        
    });

});