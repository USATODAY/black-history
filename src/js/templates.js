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
'" />\n  <param name="templateReadyHandler" value="onTemplateReady" />\n</object>\n\n\n<!-- End of Brightcove Player -->';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-intro-content-wrap iapp-content-wrap">\n    <h2 class="iapp-intro-header">' +
((__t = (head)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-intro-chatter">' +
((__t = (chatter)) == null ? '' : __t) +
'</p>\n    \n    <div class="intro-next-button button">Next</div>\n</div>';

}
return __p
};

this["templates"]["name.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-name-input-panel active">\n    <div class="iapp-content-wrap">\n        <h3 class="iapp-name-info">Let\'s have a conversation</h3>\n        <h3 class="iapp-name-info">First, what\'s your name?</h3>\n        <input type="text" class="iapp-name-input">\n        <div class="name-next-button button">Next</div>\n    </div>\n</div>\n\n<div class="iapp-panel iapp-name-thankyou-panel upcoming">\n    <div class="iapp-content-wrap">\n        <h3 class="iapp-name-info">Thank you, ' +
((__t = (userName)) == null ? '' : __t) +
'. We\'re getting someone for you.</h3>\n    </div>\n</div>';

}
return __p
};

this["templates"]["tag.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = (tagName)) == null ? '' : __t);

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header">What would you like to discuss?</h2>\n    <div class="iapp-tag-container">\n        \n    </div>\n\n    <div class="tags-next-button button">Next</div>\n\n</div>';

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

this["templates"]["video.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-video-info">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis architecto totam expedita quas quae cupiditate fuga incidunt omnis harum, minus unde ipsam perspiciatis odio ducimus praesentium molestias dignissimos reiciendis dicta.</p>\n    <div class="video-next-button button">Next</div>\n</div>\n';

}
return __p
};

  return this["templates"];

});