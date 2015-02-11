define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/data/data.json";

    }

    return {
        data: null,
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data = data[0];
                _this.organizeTags();
                
                

                

                _.each(_this.data.videos, function(videoObj) {
                    

                    videoObj.video_clip = videoObj.video_clip.toLowerCase();

                    videoObj.stillimage = _this.data.base_url + videoObj.stillimage;
                });

                _.each(_this.data.people, function(personObj) {
                   personObj.person_still = _this.data.base_url + personObj.person_still;
                });

                Backbone.trigger("dataReady", this);

            });
        },
        organizeTags: function() {
            var _this = this;
            var tags = [];
            _.each(_this.data.videos, function(video) {
                    
                //split tags string into array
                if (video.tags !== "") {
                    video.tags = video.tags.toLowerCase();
                    video.tags = video.tags.split(", ");
                    video.tags = _.without(video.tags, "");
                }

                _.each(video.tags, function(tag) {
                    //add each tag to master tags array
                    
                    var tagObj = {
                        tagName: tag
                    };

                    tags.push(tagObj);
                });

            });

            //remove duplacate tags from array
            var uniqueTags = _.uniq(tags, function(tag) {
                return tag.tagName;
            });
            
            this.data.tags = uniqueTags;
        },
        userName: ''
    }


});