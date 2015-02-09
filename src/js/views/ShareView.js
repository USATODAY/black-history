define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates'
    ],
    function(jQuery, _, Backbone, templates) {
        return Backbone.View.extend({
            render: function() {
                console.log("share rendered");
                this.$el.html(this.template(this.model.toJSON()));



                return this;
            },
            events: {
                'click .iapp-share-close': 'onClickClose'
            },
            template: templates['share.html'],
            className: 'iapp-share-panel iapp-panel upcoming',
            onClickClose: function() {
                this.$el.addClass('upcoming').removeClass('active');
                Backbone.trigger('share:close');
            }
        });
});