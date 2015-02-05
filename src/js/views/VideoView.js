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
           this.listenTo(Backbone, "get:video", this.onGetVideo);
           this.listenTo(Backbone, "update:video", this.updateView);
           // this.collection.getAvailableTags();
           console.log(this.collection);
        },
        events: {
            "click .video-next-button": "onNextClick"
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function() {
            // console.log(this.collection);
            this.selectedVideoModel = this.collection.pickVideo()
            this.$el.html(this.template(this.selectedVideoModel.toJSON()));
            // this.renderVideo();



            
            return this;
        },
        renderVideo: function() {
            //get random video based on sellected tags from the collection
            // var selectedVideoModel = this.collection.pickVideo()
            console.log("render video");

            this.brightcoveView = new BrightcoveView({model: this.selectedVideoModel});
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

        },
        updateView: function(newVideoModel) {
            this.selectedVideoModel = newVideoModel;

            var newData = newVideoModel.toJSON();



            this.brightcoveView.setVideo(this.selectedVideoModel.get('brightcoveid'));

            //add dom updating for other video info

            this.$('.iapp-video-greeting').html(newData.userName + ', meet ' + newData.interviewee.split(" ")[0]);

            this.$('.iapp-video-description').html(newData.videodescription);
        },
        onGetVideo: function() {
            //get random video based on sellected tags from the collection
            // this.selectedVideoModel = this.collection.pickVideo()
            // this.renderVideo();
        }
    });


});