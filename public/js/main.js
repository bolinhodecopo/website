$(function() {
  // logo parallax and fixed nav
  
  var $window = $(window);
  var $body = $('body');
  var $logo = $('#app-header .logo');
  var $nav = $('#app-nav');
  var navLimit = $nav.position().top;

  $(window).scroll(function() {
    var windowHeight = $window.scrollTop();
    var yPos = (windowHeight / 3);

    if (windowHeight >= navLimit) {
      $logo.fadeOut();
      $body.addClass("fixed");
    } else {
      $logo.fadeIn();
      $logo.css({ top: yPos });
      $body.removeClass("fixed");
    }
  });
});