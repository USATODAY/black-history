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
            'videoDescription': '',
            'tags': [],
            'shareLanguage': '',
            'stillImage': ''
        },

        initialize: function() {
            if (typeof this.attributes.tags == "string"){
        
                this.attributes.tags = this.attributes.tags.split(', ');
                console.log(this.get('tags'));
            }
        }
    });

});