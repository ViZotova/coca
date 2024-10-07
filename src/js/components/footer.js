export const useFooterAcc = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".footer__item-title");

    items.forEach((item) => {
      item.addEventListener("click", function () {
        const footerItem = item.parentElement; // Получаем родительский элемент li
        const sublist = footerItem.querySelector(".footer__sublist"); // Получаем подсписок

        footerItem.classList.toggle("active"); // Переключаем класс active на родителе
        sublist.classList.toggle("active"); // Переключаем класс active на подсписке

        // Закрываем другие открытые элементы
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherFooterItem = otherItem.parentElement;
            const otherSublist =
              otherFooterItem.querySelector(".footer__sublist");
            otherFooterItem.classList.remove("active"); // Убираем класс active у других
            otherSublist.classList.remove("active"); // Убираем класс active на подсписке других
          }
        });
      });
    });
  });
};
