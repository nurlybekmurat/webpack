import Swiper from "./swiper";

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    450: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
    1150: {
      slidesPerView: 6,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "d986683f7dce2a6e6a1a4cc7b7bda3ef",
  {},
  function (response) {
      console.log(response);
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiper.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);