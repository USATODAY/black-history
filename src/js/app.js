define(
  [
    'jquery',
    'underscore',
    'mobile_detect',
    'jquery_ui',
    'jquery_ui_touch_punch',
    'templates'
  ],
  function(jQuery, _, mobileDetect, jQueryUI, jQueryUITouchPunch, templates){
    return {
      init: function() {
        console.log("app initialized");
        var _this = this;

        window.onTemplateLoad = function(experienceID) {
          console.log(_this);
          _this.player = brightcove.api.getExperience(experienceID);
          console.log(_this.player.id);
          _this.APIModules = brightcove.api.modules.APIModules;

         };

         window.onTemplateReady = function(evt) {
          
          _this.videoPlayer = _this.player.getModule(_this.APIModules.VIDEO_PLAYER);
          _this.$player = $(".BrightcoveExperience");
          _this.reformatVideos(_this);
          _this.videoPlayer.addEventListener( brightcove.api.events.MediaEvent.COMPLETE, function(e) {
            _this.onComplete(e);

          });
          
         };
        jQuery(".iap-brightcove-wrap").append(templates["brightcove.html"]({video_id: "4018865801001"}));
         brightcove.createExperiences();

         $(window).on("resize", function() {
          _this.reformatVideos(_this);
        });

       

         
      },

      onComplete: function(event) {
        console.log(event.target.experience.id);
        var domID = "#" + event.target.experience.id;
        // brightcove.removeExperience(event.target.experience.id)
        $(domID).fadeOut(250);
        _.delay(function() {
          $(domID).remove();
        }, 250);

        jQuery(".iap-brightcove-wrap").append(templates["brightcove.html"]({video_id: "4020958826001"}));
         brightcove.createExperiences();
      },

      $player: $(".BrightcoveExperience"),
      reformatVideos: function(_this) {
        console.log(_this.$player);
        var numWindowWidth = window.innerWidth;
        if (window.innerWidth / window.innerHeight < 1920 / 1080) {
          var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));

          $(".iap-brightcove-wrap").css({"top": "0%", "left" : ((100 - numWidth) / 2).toString() + "%", "width": numWidth.toString() + "%", "height": "100%"});

        } else {
          var numHeight = 100 * ((1080/ 1920) / (window.innerHeight/window.innerWidth));
          $(".iap-brightcove-wrap").css({"left" : "0%"});
          $(".iap-brightcove-wrap").css({"top" : ((100 - numHeight) / 2).toString() + "%", "height": numHeight.toString() + "%", "width": "100%"});
        }
    
      }
    
    }; 

});