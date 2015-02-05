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
           this.listenTo(this.collection, 'change:isActive', this.filter);
        },
        events: {
            "click .tags-next-button": "onNextClick"
        },
        className: 'iapp-panel upcoming',
        template: templates['tags.html'],
        render: function(data) {

            //temp remove once config is in place
            var config = { isMobile: false};

            var _this = this;
            this.$el.html(this.template());
            
            this.collection.each(function(tagModel) {
                 var tagView = new TagView({model: tagModel})
                 _this.$('.iapp-tag-container').append(tagView.render().el);
            });

            _.defer(function() {
                    this.$('.iapp-tag-container').isotope({
                        itemSelector: '.iapp-tag-item',
                        transitionDuration: (!config.isMobile) ? '0.4s' : 0,
                        layoutMode: 'fitRows'

                });
            });
            
            return this;
        },
        onNextClick: function() {
            Backbone.trigger("app:advance");
        },
        filter: function() {
            this.$('.iapp-tag-container').isotope({filter: ':not(.unavailable)'});
            if (this.collection.where({'isActive': true}).length > 0) {
                this.showNext(true);
            } else {
                this.showNext(false);
            }
        },
        showNext: function(blnShow) {
            if(blnShow == true) {
               $('.tags-next-button').removeClass('hide'); 
            } else {
                $('.tags-next-button').addClass('hide');
            }
            
        }
    });


});