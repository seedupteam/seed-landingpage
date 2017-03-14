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

var animating = false;
$(window).scroll(function() {
  if(!animating && $(window).scrollTop() + $(window).height() > $(document).height() - 5) {
    animating = true;
    var div = $(".wrapper-4");
    div.animate({height: '+=40%', opacity: '1'}, 500);
    div.animate({height: '-=40%', opacity: '1'}, 600);
    setTimeout(function(){
      animating = false;
    },6000);
  }
});

// $(document).ready(function($){ //wait for the DOM to load
//   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { //check if screen width is less than 640px (i.e. mobile)
//     //updateScreen();
//     window.onresize = function(){
//       //updateScreen();
//     }
//     console.log("tjoho");
//   }
// });
