$(document).ready(function () {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= document.documentElement.clientHeight) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn({
        duration: "fast",
        start: function () {
          $(this).css({
            display: "flex"
          });
        }
      });    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(500);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function (event) {      // When arrow is clicked
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });
  $('#return-to-top').on('touchstart touchend', function (e) {
    e.preventDefault();
    $(this).toggleClass('to-top-hover');
  });
});