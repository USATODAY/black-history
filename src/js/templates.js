define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-header">\n    <img class=\'iapp-usat-logo-image\' src="' +
((__t = (logo)) == null ? '' : __t) +
'" alt="USA TODAY">\n    <div class="iapp-project-title">' +
((__t = (title)) == null ? '' : __t) +
'</div>\n</div>\n\n\n';

}
return __p
};

this["templates"]["brightcove.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Start of Brightcove Player -->\n\n<div style="display:none">\nInteractives video player with single clip \n</div>\n\n\n<object id="myExperience' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n  <param name="bgcolor" value="#FFFFFF" />\n  <param name="width" value="640" />\n  <param name="height" value="390" />\n  <param name="playerID" value="1797379879001" />\n  <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6FnzwGj3ZkG57q5Cei-R6yZca" />\n  <param name="isSlim" value="true" />\n  <param name="dynamicStreaming" value="true" />\n  <param name="includeAPI" value="true" />\n    \n  <param name="@videoPlayer" value="' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" />\n  <param name="templateReadyHandler" value="onTemplateReady" />\n</object>\n\n\n<!-- End of Brightcove Player -->';

}
return __p
};

this["templates"]["clip.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = (stillimage)) == null ? '' : __t) +
'" alt="' +
((__t = (interviewee)) == null ? '' : __t) +
'" class="iapp-index-clip-img">\n<div class="iapp-clip-quote-containter">\n    <h2>"This is a clip quote"</h2>\n</div>';

}
return __p
};

this["templates"]["indextab.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-flip-item">\n    <div class="iapp-people-index iapp-flip-front"></div>\n    <div class="iapp-clip-index iapp-flip-back"><div class="iapp-index-back-close button">BACK</div><div class="iapp-clip-container"></div></div>\n</div>';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-intro-content-wrap iapp-content-wrap">\n    <div class="iapp-content-card">\n        <h2 class="iapp-intro-header">' +
((__t = (head)) == null ? '' : __t) +
'</h2>\n        <div class="intro-next-button button">Next</div>\n    </div>  \n</div>';

}
return __p
};

this["templates"]["name.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-panel iapp-name-input-panel active">\n    <div class="iapp-content-wrap">\n        <h3 class="iapp-name-greeting">' +
((__t = (greeting)) == null ? '' : __t) +
'</h3>\n        <h3 class="iapp-name-info">' +
((__t = (name_text)) == null ? '' : __t) +
'</h3>\n        <input type="text" class="iapp-name-input" placeholder="Your name here">\n        <div class="iapp-name-skip-button">Skip</div>\n        <div class="name-next-button button">Next</div>\n    </div>\n</div>\n\n<div class="iapp-panel iapp-name-thankyou-panel upcoming">\n    <div class="iapp-content-wrap">\n        ';
 if (userName != "") { ;
__p += '\n        <h3 class="iapp-name-info">Thank you, ' +
((__t = (userName)) == null ? '' : __t) +
'. We\'re getting someone for you.</h3>\n        ';
} else { ;
__p += '\n        <h3 class="iapp-name-info">Thank you. We\'re getting someone for you.</h3>\n        ';
};
__p += '\n    </div>\n</div>';

}
return __p
};

this["templates"]["person.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <img src="' +
((__t = (person_still)) == null ? '' : __t) +
'" alt="' +
((__t = (person_name)) == null ? '' : __t) +
'" class="iapp-person-item-img">\n    <h3 class="iapp-person-name">' +
((__t = (person_name)) == null ? '' : __t) +
'</h3>\n    <p class="iapp-person-bio">' +
((__t = (person_bio)) == null ? '' : __t) +
'</p>\n\n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<h3 class="iapp-share-intro">Your turn, ' +
((__t = (userName)) == null ? '' : __t) +
'. Continue this conversation by sharing this video.</h3>\n\n<p class="iapp-share-preview">' +
((__t = (sharelanguage)) == null ? '' : __t) +
'</p>\n\n<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/twitter.svg" alt="Twitter share"></a>\n    <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/facebook.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/email.svg" alt="Email share"></a>\n</div>';

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
__p += '<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header">' +
((__t = (tag_text)) == null ? '' : __t) +
'</h2>\n    <div class="iapp-tag-container">\n        \n    </div>\n\n    <div class="tags-next-button button hide">Next</div>\n\n</div>';

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
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-video-info">\n     ';
 if (userName != "") { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (userName)) == null ? '' : __t) +
', ' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
} else { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
};
__p += '\n    <div class="iapp-video-more-button button">More</div>\n    <div class="iapp-video-discuss-button button">Discuss</div>\n</div>\n';

}
return __p
};

  return this["templates"];

});