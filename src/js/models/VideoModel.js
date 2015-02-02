define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager'
  ],
  function(jQuery, _, Backbone, dataManager){

    return Backbone.Model.extend( {
        defaults: {
            'videoID': '',
            'isActive': false,
            'videoInfo': '',
            'tags': []
        }
    });

});