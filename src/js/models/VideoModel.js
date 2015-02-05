define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone){

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
        }
    });

});