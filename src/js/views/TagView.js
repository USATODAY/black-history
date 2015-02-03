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
            this.$el.html(this.template(this.model.toJSON()));    
            return this;
        }
    });


});