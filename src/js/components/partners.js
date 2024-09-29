// export const usePartnerItems = () => {
//   const partnerItems = document.querySelectorAll(".partners__item");
//   const itemCount = partnerItems.length;
//   const itemWidth = partnerItems[0].offsetWidth;
//   const partnersList = document.querySelector(".partners__list");

//   partnersList.style.width = `${itemCount * itemWidth}px`;

//   let currentIndex = 0;
//   function autoSlide() {
//     if (window.innerWidth < 576) {
//       currentIndex = (currentIndex + 1) % itemCount;
//     } else {
//       currentIndex++;
//       if (currentIndex >= itemCount) {
//         currentIndex = 0;
//     }
//     }
//     partnersList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//   }

//   let interval = setInterval(autoSlide, 3000);

//   window.addEventListener("resize", () => {
//     if (window.innerWidth < 576) {
//       clearInterval(interval);
//     } else {
//       interval = setInterval(autoSlide, 3000);
//     }
//   });
// };
