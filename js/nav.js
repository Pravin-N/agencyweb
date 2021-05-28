$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".nav").addClass("sticky");
    $(".nav").removeClass("position-absolute");
  } else {
    $(".nav").removeClass("sticky");
    $(".nav").addClass("position-absolute");
  }
});
