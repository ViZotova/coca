import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export const useInsightSlider = () => {
  new Swiper(".insight__slider", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper(".testimonials__slider", {
    modules: [Navigation, EffectFade],
    slidesPerView: "auto",
    spaceBetween: 22,
    loop: true,
    effect: "fade",
    navigation: {
      prevEl: ".testimonials__btn--prev",
      nextEl: ".testimonials__btn--next",
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  useTestimonialsSlider();
});
