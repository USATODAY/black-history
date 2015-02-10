define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'views/BrightcoveView',
    'views/IntroView',
    'views/TagsView',
    'collections/TagCollection',
    'views/NameView',
    'views/VideoView',
    'views/IndexView',
    'collections/VideoCollection',
    'collections/PeopleCollection',
    'router',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, BrightcoveView, IntroView, TagsView, TagCollection, NameView, VideoView, IndexView, VideoCollection, PeopleCollection, router, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
                this.listenTo(Backbone, "name:set", this.onNameSet);
                this.listenTo(Backbone, "router:video", this.onVideoRoute);
                this.logoURL = $('.site-nav-logo-img').attr('src');
                
            },
            events: {
                'click .intro-next-button': 'onNextClick'
            },
            onDataReady: function() {
                this.render();
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);
                
            },
            onNextClick: function() {
                Backbone.trigger("app:advance");
            },
            onNameSet: function(name) {
                dataManager.userName = name;
            },
            onVideoRoute: function(clip_name) {
                

                
                this.goToVideo(this.videoCollection.findWhere({'video_clip': clip_name}));
            },
            render: function() {
               this.$el.append(this.template({logo: this.logoURL}));
               this.addSubViews();
               return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
                // console.log(dataManager);
               var introView = new IntroView();
               this.$el.append(introView.render(dataManager.data).el);
               this.subViews.push(introView);

               var tagsView = new TagsView({collection: new TagCollection(dataManager.data.tags)});
               this.$el.append(tagsView.render().el);
               this.subViews.push(tagsView);

               var nameView = new NameView();
               this.$el.append(nameView.render().el);
               this.subViews.push(nameView);

               var videoCollection = new VideoCollection(dataManager.data.videos);
               this.videoCollection = videoCollection;

               var videoView = new VideoView({collection: videoCollection});
               
               this.subViews.push(videoView);

               var peopleCollection = new PeopleCollection(dataManager.data.people);
               var indexView = new IndexView({collection: peopleCollection, videoCollection: videoCollection});

               this.subViews.push(indexView);
            },
            currentSubView: 0,
            goForward: function() {
                
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

                if (this.currentSubView == 3) {
                    this.$el.append(this.subViews[3].render().el);
                    this.subViews[3].renderVideo();

                    this.$el.append(this.subViews[4].render().el);
                }

                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goToVideo: function(videoModel) {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView = 3;
                var newSub = this.subViews[this.currentSubView];
                this.$el.append(this.subViews[3].render(videoModel).el);
                this.subViews[3].renderVideo();

                this.$el.append(this.subViews[4].render().el);
                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView--;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            }
        });
});