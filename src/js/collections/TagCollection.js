define(
  [
    'jquery',
    'underscore',
    'backbone'
  ], function(jQuery, _, Backbone){

    return Backbone.Collection.extend({
        initialize: function() {
            // this.activeTags = this.filter(function(model) {
            //     return model.get("isAvailable");
            // });
            // console.log(this.activeTags);
            this.on('change:isActive', this.onActiveChange); 
            this.listenTo(Backbone, 'videos:filtered', this.onVideosFiltered);
        },

        onActiveChange: function() {
            var filterArray = _.map(this.where({'isActive': true}), function(model) {
                return model.get('tagName');
            });

            console.log(filterArray);

            Backbone.trigger('filters:update', filterArray);
        },

        onVideosFiltered: function(availableTags) {
            console.log(availableTags);
            this.each(function(model) {
                if (_.contains(availableTags, model.get('tagName'))) {
                    
                    model.set({'isAvailable': true});
                    
                } else {

                    model.set({'isAvailable': false});
                }
            });

            // console.log(this.where({'isAvailable': true}));
        }
             
        
    });

});