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
        className: 'iapp-panel active',
        template: templates['intro.html'],
        render: function(data) {
            this.$el.html(this.template({head: data.head, chatter: data.chatter}));
            return this;
        }
    });


});