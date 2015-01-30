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
                this.listenTo(Backbone, "dataReady", this.onDataReady);
            },
            onDataReady: function() {
                console.log(dataManager.data);
                _.each(dataManager.data.data, function(datum) {
                    console.log(datum);
                });
            }
        });
});