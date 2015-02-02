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