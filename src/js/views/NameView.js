define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {
    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(Backbone, 'name:set', this.onUserSet); 
        },
        events: {
            "click .name-next-button": "onNextClick"
        },
        className: 'iapp-panel upcoming',
        template: templates['name.html'],
        render: function() {
            this.$el.html(this.template({userName: this.userName}));
            return this;
        },
        onNextClick: function() {
            this.userName = this.$('.iapp-name-input').val();
            Backbone.trigger("name:set", this.userName);
            // Backbone.trigger("app:advance");
        },
        userName: '',
        onUserSet: function() {
            console.log("on user set");
            this.render();
            _.defer(function() {
                this.$('.iapp-name-input-panel').removeClass('active').addClass('done');
                this.$('.iapp-name-thankyou-panel').removeClass('upcoming').addClass('active');
            }, this);
            _.delay(function() {
                Backbone.trigger("app:advance");
            }, this.addDelay);
        },
        addDelay: 2000
    });


});