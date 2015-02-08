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
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click': 'onClick'
            },
            template: templates['clip.html'],
            className: function() {
                return 'iapp-clip-index-item ' + this.model.get('clippersonfirstname');
            },
            onClick: function() {
                Backbone.trigger("update:video", this.model);
            }
        })


});