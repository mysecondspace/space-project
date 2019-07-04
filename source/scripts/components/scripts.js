// initialize animation
new WOW().init();

$(document).ready(function() {

  // mobile main menu
  var opened = false;

  $('.header__hood--button').click(function() {
    (!opened) ? (
      $('.open').css('display', 'none'),
      $('.close').css('display', 'block'),
        $('.header__hood--menu').stop(true, true).fadeIn({
          duration: 0, queue: false
        }).slideDown(0)
    ) : (
      $('.open').css('display', 'block'),
      $('.close').css('display', 'none'),
        $('.header__hood--menu').stop(true, true).fadeOut({
          duration: 0, queue: false
        }).slideUp(0)
    );

    opened = !opened;
  });
});

$(window).scroll(function() {
  var height = window.pageYOffset,
      moon = height * 0.05,
      asteroid = height * 0.5;

  $(".article__glitch--img").parent(".moon").css({transform: "rotate(" + moon + "deg)"});
  $(".article__glitch--img").parent(".asteroid").css({transform: "rotate(" + asteroid + "deg)"});

  // image parallax
  var satellite = document.querySelector(".article__hint.satellite"),
      rocket = document.querySelector(".article__hint--scroll.rocket");

  satellite.style.transform = "translateY(" + (height) + "px)";
  rocket.style.transform = "translateY(" + (height * .975) + "px)";

  // remove jump animation of rocket on scroll
  if ($(window).scrollTop() <= 0) {
    rotateForward()
    $(".article__hint--scroll.satellite img, .article__hint--scroll.meteor--1 img").css("transform", "rotate(90deg)");
    $(".article__hint--scroll.meteor--2 img").css("transform", "rotate(180deg)");
    $(".article__hint").removeClass("none");
  } else if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
    $(".article__hint--scroll object").css("transform", "rotate(-45deg) scale(3)");
    $(".footer img, .article__hint--scroll.rocket").addClass("paused");
    $(".menu").addClass("visible");
  } else {
    $(".footer img, .article__hint--scroll").removeClass("paused");
    $(".article__hint--scroll").css("animation-name", "none");
    $(".article__hint.rocket").addClass("none");
    $(".menu").removeClass("visible");
  };

  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
    $(".article__hint--scroll").css("animation-name", "jump");
  }, 250));
});

$(window).bind("mousewheel", function(event) {

  // check scroll direction
  if (event.originalEvent.wheelDelta > 0) {
    $(".article__hint--scroll object").css("transform", "rotate(-45deg)");
  } else {
    $(window).scrollTop() + $(window).height() >= $(document).height() ? false : rotateForward();
    $(".article__hint--scroll.satellite img, .article__hint--scroll.meteor--1 img").css("transform", "rotate(-90deg)");
    $(".article__hint--scroll.meteor--2 img").css("transform", "rotate(-15deg)");
  };
});

// open form
var opened = false;

$(".article__hint--scroll.satellite").click(function() {
  if (!opened)
    $(".wrapper").css("filter", "blur(25px)"),
    $(".form").delay(500).fadeIn(1000);

  opened = !opened;
});

$(document).keyup(function(e) {
  close();
});

$(".form img").click(function() {
  close();
});

function close() {
  $(".form").fadeOut(500),
  $(".wrapper").delay(500).queue(function(next) {
    $(this).css("filter", "unset");
    next();
  });

  opened = !opened;
};

// hide navigation elements
$(".article > div:not(.container) > ul a").click(function() {
  $(".article > div:not(.container) > ul").addClass("hide");

  setTimeout(function() {
    $(".article > div:not(.container) > ul").removeClass("hide");
  }, 2000);
});

// scroll button
$(".article__hint--scroll.rocket").click(function() {
  $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 2000);
  rotateForward();
});

// disable horizontal scroll
$(function() {
  $(document).bind("scroll", function() {
    if ($(document).scrollLeft() !== 0) {
     $(document).scrollLeft(0);
    };
  });
});

function rotateForward() {
  $(".article__hint--scroll object").css("transform", "rotate(135deg)");
};

var $root = $('html, body');

// smooth scroll anchors
$('a[href^="#"]').click(function() {
  var href = $.attr(this, "href");

  $root.animate({
    scrollTop: $(href).offset().top
  }, 2000, function () {
    window.location.hash = href;
  });

  return false;
});

// toggle list
 $(document).ready(function() {
     $(".toggle").hide();

     //toggle button text
     $(".button").click(function() {
         $("span", this).toggle();
     });
     //toggle list
     $(".button").click(function() {
         $(".toggle").toggle(1000);
     });
 });
