// import Swiper JS
import Swiper from "swiper";
// import Swiper JS Modules
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";

export const useAboutSlider = () => {
  new Swiper(".hero__slider", {
    // Swiper to use modules
    modules: [Navigation],
    // Configure Swiper
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },

      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: "auto",
        spaceBetween: 32,
        loop: true,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".about__btn--next",
      prevEl: ".about__btn--prev",
    },
  });
};

export const useTeamSlider = () => {
  new Swiper(".team__slider", {
    // Swiper to use modules
    modules: [Navigation],
    // Configure Swiper
    slidesPerView: 1.2,
    spaceBetween: 15,
    // loop: true,
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      577: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".team__btn--next",
      prevEl: ".team__btn--prev",
    },
  });
};
