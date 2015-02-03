define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            "click .video-next-button": "onNextClick"
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function() {

            this.$el.html(this.template());

            var brightcoveView = new BrightcoveView();
            this.$el.append(brightcoveView.render().el);
            brightcoveView.activate();
            var currentVideo = this.collection.find(function(video) {
                video.isActive == true;
            });
            brightcoveView.setVideo(currentVideo.brightcoveID);
            
            return this;
        },
        onNextClick: function() {
            Backbone.trigger("app:advance");
        }
    });


});