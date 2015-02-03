define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates'
  ],
  function(jQuery, _, Backbone, templates) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        className: 'iapp-panel upcoming',
        template: templates['tags.html'],
        render: function(data) {
            console.log(this.collection.activeTags);
            this.$el.html(this.template({tags: this.collection.toJSON()}));    
            return this;
        }
    });


});