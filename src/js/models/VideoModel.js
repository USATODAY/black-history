define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone){

    return Backbone.Model.extend( {
        defaults: {
            'brightcoveID': '',
            'interviewee': '',
            'isActive': false,
            'isAvailable': true,
            'videoDescription': '',
            'tags': [],
            'shareLanguage': '',
            'stillImage': ''
        },

        initialize: function() {
            if (typeof this.attributes.tags == "string"){ 
                this.attributes.tags = this.attributes.tags.split(', ');
            }
        }
    });

});