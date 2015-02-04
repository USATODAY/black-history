define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/BrightcoveView'
  ],
  function(jQuery, _, Backbone, BrightcoveView) {
    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(Backbone, "render:video", this.renderVideo); 
           this.listenTo(Backbone, "video:ready", this.onVideoReady);
           // this.collection.getAvailableTags();
        },
        events: {
            "click .video-next-button": "onNextClick"
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function() {
            // console.log(this.collection);
            this.$el.html(this.template());



            
            return this;
        },
        renderVideo: function() {
            //get random video based on sellected tags from the collection
            var selectedVideo = this.collection.pickVideo()

            this.brightcoveView = new BrightcoveView();
            this.$el.append(this.brightcoveView.render().el);
            this.brightcoveView.activate();

            // console.log(brightcoveView);
            var currentVideo = this.collection.find(function(video) {
                video.isActive == true;
            });

            
        },
        onNextClick: function() {
            if (this.brightcoveView.bcPlayer) {
                this.brightcoveView.pauseVideo();
            }
            
            
            // Backbone.trigger("app:advance");
        },
        onVideoReady: function() {

        }
    });


});