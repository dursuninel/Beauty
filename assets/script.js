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
