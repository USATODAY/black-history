define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'views/BrightcoveView',
    'views/IntroView',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, BrightcoveView, IntroView, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
            },
            onDataReady: function() {
                this.render();
            },
            render: function() {
               this.$el.html(this.template({}));
               // this.addVideo();
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
               var introView = new IntroView();
               this.$el.append(introView.render(dataManager.data).el);
               this.subViews.push(introView);
            }
        });
});