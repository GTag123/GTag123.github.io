$(document).ready(function () {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  // ===== Scroll to Top ==== 
  let element = $('#return-to-top');
  $(window).scroll(function () {
    let scrollBottom =  document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;

    if (document.documentElement.scrollTop >= document.documentElement.clientHeight) {        // If page is scrolled more than 50px
      element.fadeIn({
        duration: "fast",
        start: function () {
          $(this).css({
            display: "flex"
          });
        }
      });    // Fade in the arrow
    } else {
      element.fadeOut(500);   // Else fade out the arrow
    }
    if (scrollBottom <= $('.footer').outerHeight()) {
      element.addClass('to-top-dark');
    } else {
      if ( element.hasClass('to-top-dark') ) element.removeClass('to-top-dark');
    }
  });

  element.click(scrollToTop);
  element.on('touchstart mouseenter', function (e) {
    $(this).addClass('to-top-hover');
  });
  element.on('touchend mouseleave click', function(e) {
    $(this).removeClass('to-top-hover');
  });
});

function scrollToTop(event) {      // When arrow is clicked
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
}