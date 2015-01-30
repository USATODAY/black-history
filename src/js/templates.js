define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- <h1>Hello World</h1> -->\n';

}
return __p
};

this["templates"]["brightcove.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Start of Brightcove Player -->\n\n<div style="display:none">\nInteractives video player with single clip \n</div>\n\n<!--\nBy use of this code snippet, I agree to the Brightcove Publisher T and C \nfound at https://accounts.brightcove.com/en/terms-and-conditions/. \n-->\n\n\n\n<object id="myExperience' +
((__t = (video_id)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n  <param name="bgcolor" value="#FFFFFF" />\n  <param name="width" value="640" />\n  <param name="height" value="390" />\n  <param name="playerID" value="1797379879001" />\n  <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6FnzwGj3ZkG57q5Cei-R6yZca" />\n  <param name="isSlim" value="true" />\n  <param name="dynamicStreaming" value="true" />\n  <param name="includeAPI" value="true" />\n    \n  <param name="@videoPlayer" value="' +
((__t = (video_id)) == null ? '' : __t) +
'" />\n  <param name="templateReadyHandler" value="onTemplateReady" />\n</object>\n\n  <!-- <script>\n  var onTemplateLoad = function(experienceID) {\n          console.log(experienceID);\n          //console.log("onTemplateLoad");\n          // get a reference to the first player and API Modules\n          player = brightcove.api.getExperience(experienceID);\n          APIModules = brightcove.api.modules.APIModules;\n        };\n          \n        var onTemplateReady = function(evt) {\n          //console.log("onTemplateReady");\n          // get references to modules for the first player\n          videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);\n          // add a listener for when the video finishes playing\n          videoPlayer.addEventListener( brightcove.api.events.MediaEvent.COMPLETE, onComplete);\n          // get the URL link from the video meta data\n          videoPlayer.getCurrentVideo( function (videoDTO) {\n            redirectURL = videoDTO.linkURL;\n          });\n        };\n  </script> -->\n\n\n<!-- End of Brightcove Player -->';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});