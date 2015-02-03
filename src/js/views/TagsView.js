define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/TagView'
  ],
  function(jQuery, _, Backbone, TagView) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            "click .tags-next-button": "onNextClick"
        },
        className: 'iapp-panel upcoming',
        template: templates['tags.html'],
        render: function(data) {
            var _this = this;
            this.$el.html(this.template());
            this.collection.each(function(tagModel) {
                 var tagView = new TagView({model: tagModel})
                 _this.$('.iapp-tag-container').append(tagView.render().el);
            });
            
            return this;
        },
        onNextClick: function() {
            Backbone.trigger("app:advance");
        }
    });


});