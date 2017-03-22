// Function that cycle the backgrounds
function cycleBackgrounds() {
  var index = 0;

  $imageEls = $('.toggle-image'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next image.
    $imageEls.eq(index).addClass('show');
    // Hide the previous image.
    $imageEls.eq(index - 1).removeClass('show');

  }, 8000);
};

// Document Ready.
$(function () {
  cycleBackgrounds();
});


var alreadyShowed = false;
$(window).scroll(function() {
  if(!alreadyShowed && $(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    alreadyShowed = true;
    var div = $(".wrapper-social");
    var trans = '15%';
    var speed = 400;
    div.animate({height: '+=' + trans, opacity: '1'}, speed);
    div.animate({height: '-=' + trans, opacity: '1'}, speed);
    div.animate({height: '+=' + trans, opacity: '1'}, speed);
    div.animate({height: '-=' + trans, opacity: '1'}, speed);
  }
});

$(document).ready(function($){ //wait for the DOM to load
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    updateScreen();
    window.onresize = function(){
      updateScreen();
    }
  }
});

var updateScreen = function(){
  var size = $(window).height();

  if(window.innerWidth > window.innerHeight){
    // LANDSCAPE
    $('.full').css({ 'height' : size});
    $('.toggle-image').css({ 'height' : size});
  } else {
    // PORTRAIT
    $('.full').css({ 'height' : size});
    $('.toggle-image').css({ 'height' : size});
  }
}
