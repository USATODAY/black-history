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
                console.log("person view render")
                this.$el.html(this.template(this.model.toJSON()));

                console.log(this.el);

                return this;
            },
            template: templates['person.html'],
            className: 'iapp-person-item'
        });
});