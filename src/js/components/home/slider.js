import Swiper from "swiper";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export const useSlider = () => {
  new Swiper(".insight__slider", {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      577: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        centeredSlides: false,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};

export const usePartnersSlider = () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 992px)", ".partners__slider", {
    modules: [Autoplay],
    speed: 3000,
    loop: true,
    slidesPerView: 2.8,
    spaceBetween: 100,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      380: {
        slidesPerView: 3,
      },

      576: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 4,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper(".testimonials__sliders", {
    modules: [EffectFade, Navigation],
    slidesPerView: "auto",
    spaceBetween: 22,
    effect: "fade",
    navigation: {
      nextEl: ".testimonials__btn--next",
      prevEl: ".testimonials__btn--prev",
    },
  });
};
