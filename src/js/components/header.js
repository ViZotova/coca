export const useHeader = () => {
  const header = document.querySelector(".header");

  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  document.body.style.marginTop = `${headerHeight}px`;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance <= headerHeight) {
      header.classList.add("header--show");
      header.classList.remove("header--fixed");
      header.classList.add("header--background-transparent");
    } else {
      header.classList.add("header--fixed");
      header.classList.remove("header--background-transparent");

      if (scrollDistance > lastScrollTop) {
        header.classList.remove("header--show");
      } else {
        header.classList.add("header--show");
      }
    }

    lastScrollTop = scrollDistance <= 0 ? 0 : scrollDistance;
  });
};
