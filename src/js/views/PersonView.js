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
            template: templates['person.html'],
            className: 'iapp-person-item iapp-clickable',
            onClick: function() {
                Backbone.trigger("person:selected", this.model);
            }
        });
});