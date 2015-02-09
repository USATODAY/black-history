define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/config'
  ],
  function(jQuery, _, Backbone, config){

    return Backbone.Model.extend( {
        defaults: {
            'brightcoveid': '',
            'interviewee': '',
            'isActive': false,
            'isAvailable': true,
            'videodescription': '',
            'tags': [],
            'sharelanguage': '',
            'stillimage': ''
        },

        initialize: function() {
            if (typeof this.attributes.tags == "string"){ 
                this.attributes.tags = this.attributes.tags.split(', ');
            }


            //set sharable language and urls for each model
            this.set({
                'fbShare': this.createFbShareURL(this.get('video_clip')),
                'twitterShare': this.createTwitterShareURL(this.get('video_clip')),
                'encodedShare': encodeURIComponent(this.get('sharelanguage')),
                'fb_id': config.fb_app_id,
                'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/'
            });
            console.log(this);
            

            this.listenTo(Backbone, 'name:set', this.onUserSet);
        },

        onUserSet: function(name) {
            this.set({'userName': name})
        },

        createFbShareURL: function(videoID) {
            var baseURL = window.location.href;
            return encodeURI(baseURL + "%23video/" + videoID); 
        },

        createTwitterShareURL: function(videoID) {
            var baseURL = window.location.href;
            return encodeURIComponent(baseURL + "#video/" + videoID); 
        }
    });

});