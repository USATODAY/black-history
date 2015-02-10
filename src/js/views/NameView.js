define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager'
  ],
  function(jQuery, _, Backbone, dataManager) {
    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(Backbone, 'name:set', this.onUserSet); 

        },
        events: {
            "click .name-next-button": "onNextClick",
            "click .iapp-name-skip-button": "onNextClick",
            'keyup .iapp-name-input': "onKeyPress"
        },
        className: 'iapp-panel iapp-name-panel upcoming',
        template: templates['name.html'],
        render: function() {
            this.$el.html(this.template({userName: this.userName, name_text: dataManager.data.name_text, greeting: this.getGreeting()}));
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
                // Backbone.trigger("get:video");
            }, this.addDelay);
        },
        goToNext: function() {
            this.userName = this.$('.iapp-name-input').val();
            Backbone.trigger("name:set", this.userName);
        },
        getGreeting: function() {
            var greetings = ['Good morning.', 'Good afternoon.', 'Good evening.'];
            var date = new Date();
            var hour = date.getHours();
            var result;

            if (hour < 12) {
                result = greetings[0];
            } else if (hour < 18){
                result = greetings[1];
            } else {
                result = greetings[2];
            }
            return result;
        },
        addDelay: 4000

    });


});