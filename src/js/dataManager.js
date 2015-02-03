define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone){

    return {
        data: null,
        getData: function(url) {
            var _this = this;
            jQuery.getJSON(url, function(data) {        
                _this.data = data[0];
                _this.organizeTags();
                Backbone.trigger("dataReady", this);
            });
        },
        organizeTags: function() {
            var _this = this;
            var tags = [];
            _.each(_this.data.videos, function(video) {
                    
                //split tags string into array
                if (video.tags !== "") {
                    video.tags = video.tags.split(", ");
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
            tags = _.uniq(tags);
            this.data.tags = tags;
        },
        userName: ''
    }


});