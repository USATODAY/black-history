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
        className: 'iapp-tag-item available',
        template: templates['tag.html'],
        render: function(data) {
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));    
            return this;
        }
    });


});