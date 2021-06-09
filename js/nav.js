$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $(".nav").addClass("sticky");
    $(".nav").removeClass("position-absolute");
  } else {
    $(".nav").removeClass("sticky");
    $(".nav").addClass("position-absolute");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".mobile-navigation-bar").addClass("sticky");
  } else {
    $(".mobile-navigation-bar").removeClass("sticky");
  }
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("cross");
  });
};

navSlide();
