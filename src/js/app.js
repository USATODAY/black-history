define(
  [
    'jquery',
    'underscore',
    'mobile_detect',
    'jquery_ui',
    'jquery_ui_touch_punch',
    'templates'
  ],
  function(jQuery, _, mobileDetect, jQueryUI, jQueryUITouchPunch, templates){
    var app = app || {};

    app.init = function() {
      console.log("app initialized");
      jQuery("body").append(templates["template.html"]({test: "Hello world!"}));
    };

    return app;

});