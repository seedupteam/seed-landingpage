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


$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
    var div = $(".innner");
    div.animate({height: '+=4vh', opacity: '1'}, 500);
    div.animate({height: '-=4vh', opacity: '1'}, 600);
    // div.animate({width: '300px', opacity: '0.8'}, "slow");
    // div.animate({height: '100px', opacity: '0.4'}, "slow");
    // div.animate({width: '100px', opacity: '0.8'}, "slow");
  }
});

$(document).ready(function($){ //wait for the DOM to load
    if($(window).width() < 640) { //check if screen width is less than 640px (i.e. mobile)
        $('.toggle-image').css({ 'height' : $(window).height()});
    }
    console.log("beep");
});
