define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/VideoModel'
  ], function(jQuery, _, Backbone, VideoModel){

    return Backbone.Collection.extend({
        model: VideoModel,
        
    });

});