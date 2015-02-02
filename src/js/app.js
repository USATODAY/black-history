define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'views/AppView',
    'templates' 
  ],
  function(jQuery, _, Backbone, dataManager, AppView, templates){
    return {
      init: function() {

        //Initialize main appView
        var appView = new AppView({el: ".iapp-wrap"});

        //Make data request
        dataManager.getData("http://reqr.es/api/users?page=2");

        jQuery(window).resize(function() {
            Backbone.trigger("window:resize");
          });

        //set global callback for Brightcove videos to use
         window.onTemplateReady = function(evt) {
          var APIModules = brightcove.api.modules.APIModules;
          var player = brightcove.api.getExperience(evt.target.experience.id);
          var videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
          var experience = player.getModule(APIModules.EXPERIENCE);

          Backbone.trigger("video:ready", {player: videoPlayer, experience: experience});

          //trigger Backbone event and pass object with Brightcove player and experience objects as arguments
          videoPlayer.addEventListener( brightcove.api.events.MediaEvent.COMPLETE, function(e) {
            Backbone.trigger("video:ended", {player: videoPlayer, experience: experience});
          });          
         };         
      }         
    }; 
});