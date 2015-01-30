define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'templates',
    'jquery_ui_touch_punch'
  ],
  function(jQuery, _, Backbone, dataManager, templates, jQueryUITouchPunch){
        return Backbone.View.extend({
            initialize: function() {
              this.listenTo(Backbone, "window:resize", this.reformatVideos);
              this.listenTo(Backbone, "video:ended", this.removeVideo);
            },
            template: templates['brightcove.html'],
            className: 'iapp-brightcove-wrap',
            render: function() {
              //currently hard coding video_id until i get video collections/models up and running
              this.$el.html(this.template({video_id: "4018865801001"}));
              return this;
            },
            activate: function() {
              brightcove.createExperiences();
              this.reformatVideos();
            },
            reformatVideos: function() {
                console.log(this);
                var numWindowWidth = window.innerWidth;
                if (window.innerWidth / window.innerHeight < 1920 / 1080) {
                  var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));

                  this.$el.css({"top": "0%", "left" : ((100 - numWidth) / 2).toString() + "%", "width": numWidth.toString() + "%", "height": "100%"});

                } else {
                  var numHeight = 100 * ((1080/ 1920) / (window.innerHeight/window.innerWidth));
                  this.$el.css({"left" : "0%"});
                  this.$el.css({"top" : ((100 - numHeight) / 2).toString() + "%", "height": numHeight.toString() + "%", "width": "100%"});
                }
            
              },
              removeVideo: function(bcObj) {
                console.log(bcObj.experience);
                bcObj.experience.unload();
                console.log("remove");
                this.remove();
              } 
        });
});