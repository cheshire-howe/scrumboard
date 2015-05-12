var app = (function($) {
  var config = $('#config'),
      app = JSON.parse(config.text());

  $(function() {
      var router = new app.router();
  });

  return app;
})(jQuery);
