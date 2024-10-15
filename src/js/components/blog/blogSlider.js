import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

let swiperInstance;

export const useBlogSlider = () => {
  swiperInstance = new Swiper(".hero__slider", {
    modules: [Navigation],
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      381: {
        slidesPerView: 2.9,
        spaceBetween: 15,
        loop: true,
      },

      577: {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: "auto",
        spaceBetween: 32,
        loop: true,
      },
    },
    navigation: {
      nextEl: ".blog__btn--next",
      prevEl: ".blog__btn--prev",
    },
  });
};

export const useTabFilter = () => {
  const tabs = document.querySelectorAll(".hero__tabs-item button");
  const slides = document.querySelectorAll(".hero__slide");
  const tabList = document.querySelectorAll(".hero__tabs-item");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const parentLi = tab.parentElement;

      if (parentLi.classList.contains("hero__tabs-item--active")) {
        return;
      }

      tabList.forEach((item) => {
        item.classList.remove("hero__tabs-item--active");
      });

      parentLi.classList.add("hero__tabs-item--active");
      const tabValue = tab.getAttribute("data-tab");

      if (tabValue) {
        slides.forEach((slide) => {
          if (slide.getAttribute("data-rubric") !== tabValue) {
            slide.classList.add("none");
          } else {
            slide.classList.remove("none");
          }
        });
      } else {
        slides.forEach((slide) => {
          slide.classList.remove("none");
        });
      }
      swiperInstance.update();
    });
  });
};
