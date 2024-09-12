var swiper = new Swiper(".banner_slide", {
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".service_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var masonry = new MiniMasonry({
  container: document.querySelector(".mason_gallery"),
  gutter: 30,
  baseWidth: 300,
});

lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});


$(".header-logo img").on("dragstart", function (event) {
  event.preventDefault();
});

$(".menuToggle, .overlay-header").on("click", function () {
  $("header .header-nav").toggleClass("active");
  $(".header-flex").toggleClass("active");

  setTimeout(() => {
      if ($(".header-flex").hasClass("active")) {
          $(".header-flex input").prop("checked", true);
          $(".out-check").css("opacity", "0");
          $(".out-check").hide(250);
          $(".inner-check").css("opacity", "1");
          $(".inner-check").show(250);
          $("body").css("overflow-y", "hidden")
      } else {
          $(".header-flex input").prop("checked", false);
          $(".out-check").css("opacity", "1");
          $(".out-check").show(250);
          $(".inner-check").css("opacity", "0");
          $(".inner-check").hide(250);
          $("body").css("overflow-y", "auto")
      }
  },
      1);
});

$(".header-nav > ul.navigation-list > li:last-child > a").on(
  "click",
  function () {
      $(this).closest("li").toggleClass("active");
  }
);