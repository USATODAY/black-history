define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'views/BrightcoveView',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, BrightcoveView, templates){
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
            }
        });
});