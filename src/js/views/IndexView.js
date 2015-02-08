define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/PersonView',
        'views/ClipView',
        'templates'
    ],
    function(jQuery, _, Backbone, PersonView, ClipView, templates) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, 'index:show', this.onIndexShow);
                this.listenTo(Backbone, 'person:selected', this.onPersonSelected);
                this.videoCollection = this.options.videoCollection;
            },
            render: function() {
                this.$el.html(this.template());
              
                this.renderPeople();
                this.renderClips();
  
                return this;
            },
            renderPeople: function() {
                var _this = this;

                this.collection.each(function(personModel) {
                    var personView = new PersonView({model: personModel});
                    
                    _this.$('.iapp-people-index').append(personView.render().el);
                });
            },
            renderClips: function() {
                var _this = this;
                this.videoCollection.each(function(videoModel) {
                    var clipView = new ClipView({model: videoModel});
                    _this.$('.iapp-clip-container').append(clipView.render().el);
                });

                 _.defer(function() {
                    this.$('.iapp-clip-container').isotope({
                        itemSelector: '.iapp-clip-index-item',
                        transitionDuration: 0,
                        layoutMode: 'fitRows'

                });
            });
            },

            events: {
                'click .iapp-index-back-close': 'onBackCloseClick'
            },
            template: templates['indextab.html'],
            className: 'iapp-panel upcoming iapp-index-panel iapp-flip-container',
            onIndexShow: function() {
                this.$el.addClass('active').removeClass('upcoming');
            },
            onIndexHide: function() {
                this.$el.removeClass('active').addClass('upcoming');
            },
            onPersonSelected: function(personModel) {
                this.$('.iapp-flip-item').addClass('iapp-flipped');
                var personFirstName = personModel.get('first_name');
                this.filterClips(personFirstName);

            },
            onBackCloseClick: function() {
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            },
            filterClips: function(filterParam) {
                console.log("filter by " + filterParam);
                this.$('.iapp-clip-container').isotope({
                    filter: "." + filterParam
                });
            }
        });

});