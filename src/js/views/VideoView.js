define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/BrightcoveView',
    'views/ShareView',
    'templates'
  ],
  function(jQuery, _, Backbone, BrightcoveView, ShareView, templates) {
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
            'click .iapp-video-more-button': 'onMoreClick',
            'click .iapp-video-discuss-button': 'onShareClick'
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function() {
            // console.log(this.collection);
            this.selectedVideoModel = this.collection.pickVideo()
            this.$el.html(this.template(this.selectedVideoModel.toJSON()));
            // this.renderVideo();

            this.addShare();

            
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
        //this method can probably be removed
        onNextClick: function() {
            if (this.brightcoveView.bcPlayer) {
                this.brightcoveView.pauseVideo();
            }
            
            
            // Backbone.trigger("app:advance");
        },
        onMoreClick: function() {
            Backbone.trigger('index:show');
        },
        onVideoReady: function() {

        },
        updateView: function(newVideoModel) {



            this.selectedVideoModel = newVideoModel;


            var newData = newVideoModel.toJSON();



            this.brightcoveView.setVideo(this.selectedVideoModel.get('brightcoveid'));
            this.addShare();

            //add dom updating for other video info

            this.$('.iapp-video-greeting').html(newData.userName + ' ' + newData.intro);

            this.$('.iapp-video-description').html(newData.videodescription);
        },
        onGetVideo: function() {
            //get random video based on sellected tags from the collection
            // this.selectedVideoModel = this.collection.pickVideo()
            // this.renderVideo();
        },
        onShareClick: function() {
            this.$('.iapp-share-panel').addClass('active').removeClass('upcoming');
        },
        addShare: function() {
            if (this.shareView == undefined) {
                this.shareView = new ShareView({model:  this.selectedVideoModel});
                this.$el.append(this.shareView.render().el);
            } else {
                this.shareView.remove();
                this.shareView = new ShareView({model:  this.selectedVideoModel});
                this.$el.append(this.shareView.render().el);
            }
            
        }
    });


});