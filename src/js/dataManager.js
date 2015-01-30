define(
  [
    'jquery',
    'backbone'
  ],
  function(jQuery, Backbone){

    return {
        data: null,
        getData: function(url) {
            var _this = this;
            jQuery.getJSON(url, function(data) {            
                _this.data = data;
                Backbone.trigger("dataReady");
            });
        }
    }


});