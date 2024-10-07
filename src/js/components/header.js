export const useHeader = () => {
  window.onscroll = function () {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };
};
