export const usePartnerItems = () => {
  const slider = document.querySelector(".partners__list");
  const items = document.querySelectorAll(".partners__item");
  let currentIndex = 0;
  let slideInterval;

  const startSlider = () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }, 3000);
  };

  const stopSlider = () => {
    clearInterval(slideInterval);
  };

  const checkScreenWidth = () => {
    if (window.innerWidth < 576) {
      startSlider();
    } else {
      stopSlider();
      currentIndex = 0;
      slider.style.transform = `translateX(0)`;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    slider.addEventListener("mouseover", stopSlider);
    slider.addEventListener("mouseout", startSlider);
  });
};
