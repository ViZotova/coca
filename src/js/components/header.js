export const useHeader = () => {
  const header = document.querySelector(".header");
  const heroSection = document.querySelector(".hero");
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  document.body.style.marginTop = `${headerHeight}px`;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance <= headerHeight) {
      header.classList.add("header--show");
      header.classList.add("header--background-transparent");
    } else if (
      scrollDistance > lastScrollTop &&
      scrollDistance > headerHeight
    ) {
      header.classList.remove("header--show");
      header.classList.add("header--fixed");
      header.classList.remove("header--background-transparent");
    } else if (
      scrollDistance < lastScrollTop &&
      scrollDistance > headerHeight
    ) {
      header.classList.add("header--show");
      header.classList.add("header--fixed");
      header.classList.remove("header--background-transparent");
    }

    lastScrollTop = scrollDistance;
  });
};
