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
    $('.toggle-image').css({ 'height' : size});
    $('#title-text').css({ 'margin-top' : '10%'});
    $('#title-text').css({ 'font-size' : '7vmax'});
    $('#signup-box *').css({ 'font-size' : '3.5vmax'});
    $('#signup-box').css({ 'width' : '70vw'});
    $('#logo').css({ 'width' : '20%'});
    $('#mobile-screen').css({ 'max-width' : '100%'});
    $('.section').css({ 'height' : size});
    $('.section-facts').css({ 'top' : size});
    $('.section-facts').css({ 'height' : 0.75 * size});
    $('.section-mobile').css({ 'top' : 1.75 * size});
    $('.section-mobile').css({ 'height' : size});
    $('.section-social').css({ 'top' : 2.75 * size});
    $('.section-social').css({ 'height' : 0.6 * size});
    $('.wrapper-social img').css({ 'max-height' : '60%'});
  } else {
    // PORTRAIT
    $('.toggle-image').css({ 'height' : size});
    $('#logo').css({ 'width' : '50%'});
    $('#title-text').css({ 'margin-top' : '40%'});
    $('#title-text').css({ 'font-size' : '7vmax'});
    $('#signup-box *').css({ 'font-size' : '3.5vmax'});
    $('#signup-box').css({ 'width' : '80vw'});
    $('#mobile-screen').css({ 'max-width' : '95%'});
    $('.section').css({ 'height' : size});
    $('.section-facts').css({ 'top' : size});
    $('.section-facts').css({ 'height' : 0.5 * size});
    $('.section-mobile').css({ 'top' : 1.5 * size});
    $('.section-mobile').css({ 'height' : size});
    $('.section-social').css({ 'top' : 2.5 * size});
    $('.section-social').css({ 'height' : 0.3 * size});
    $('.wrapper-social img').css({ 'max-height' : '50%'});
  }
}
