define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'views/BrightcoveView',
    'views/IntroView',
    'views/TagsView',
    'collections/TagCollection',
    'views/NameView',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, BrightcoveView, IntroView, TagsView, TagCollection, NameView, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
                this.listenTo(Backbone, "name:set", this.onNameSet)
            },
            events: {
                'click .intro-next-button': 'onNextClick'
            },
            onDataReady: function() {
                this.render();
            },
            onNextClick: function() {
                Backbone.trigger("app:advance");
            },
            onNameSet: function(name) {
                dataManager.userName = name;
            },
            render: function() {
               this.$el.html(this.template({}));
               // this.addVideo();
               this.addSubViews();
               return this;
            },
            template: templates["app.html"],
            addVideo: function() {
                var brightcoveView = new BrightcoveView();
                this.$el.append(brightcoveView.render().el);
                brightcoveView.activate();


                _.delay(function() {
                  // brightcoveView.setVideo("4027676240001");
                }, 2000);
            },
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

            },
            currentSubView: 0,
            goForward: function() {
                console.log("go forward");
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

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