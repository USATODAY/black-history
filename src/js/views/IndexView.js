define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/PersonView',
        'templates'
    ],
    function(jQuery, _, Backbone, PersonView, templates) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, 'index:show', this.onIndexShow);
                this.listenTo(Backbone, 'person:selected', this.onPersonSelected);
            },
            render: function() {
                this.$el.html(this.template());

                var _this = this;

                this.collection.each(function(personModel) {
                    var personView = new PersonView({model: personModel});
                    // console.log(this);
                    console.log(_this.$('.iapp-people-index'))
                    _this.$('.iapp-people-index').append(personView.render().el);
                });

                return this;
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
            onPersonSelected: function() {
                this.$('.iapp-flip-item').addClass('iapp-flipped');
            },
            onBackCloseClick: function() {
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            }
        });

});