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
            "click .name-next-button": "onNextClick",
            'keyup .iapp-name-input': "onKeyPress"
        },
        className: 'iapp-panel upcoming',
        template: templates['name.html'],
        render: function() {
            this.$el.html(this.template({userName: this.userName}));
            return this;
        },
        onNextClick: function() {
            this.goToNext();
        },
        onKeyPress: function(e) {
            if(e.keyCode == 13) {
                this.goToNext();
            }
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
        goToNext: function() {
            this.userName = this.$('.iapp-name-input').val();
            Backbone.trigger("name:set", this.userName);
        },
        addDelay: 2000
    });


});