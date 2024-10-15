import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const useArticlesSlider = () => {
  new Swiper(".articles__slider", {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      1201: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: ".articles__btn--next",
      prevEl: ".articles__btn--prev",
    },
  });
};
