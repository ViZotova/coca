export const useAccordion = () => {
  const accordionItems = document.querySelectorAll("[data-accordion]");

  // Добавляем обработчик события на каждый заголовок
  // accordionItems.forEach(function (item)
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Проверяем ширину экрана через window.matchMedia
      const mediaQuery = window.matchMedia("(max-width: 576px)");

      // Проверяем, соответствует ли текущая ширина экрана условию mediaQuery методом .matches (true или false)
      if (mediaQuery.matches) {
        // Находим родителя заголовка на который мы клмкнулм т.е. <li class="footer__item">
        const parentItem = this.parentNode;
        // Находим у родителя первый элемент с названием .footer__sublist
        const sublist = parentItem.querySelector(".footer__sublist");
        // Находим все элементы с классом .footer__item.open
        const accordionItemsOpen =
          document.querySelectorAll(".footer__item.open");
        // Закрываем все открытые списки
        accordionItemsOpen.forEach((e) => {
          // если элемент с классом .footer__item.open имеет родительский элемент .footer__item, то класс .open не будет удален, так как они равны. В противном случае, класс .open будет удален.
          if (e !== parentItem) {
            e.classList.remove("open");

            if (window.innerWidth > 380) {
              // Устанавливаем задержку перед началом анимации закрытия списка
              setTimeout(() => {
                e.querySelector(".footer__sublist").style.maxHeight = "0";
              }, 250); // 250 миллисекунд - примерная задержка перед анимацией
            } else {
              e.querySelector(".footer__sublist").style.maxHeight = "0";
            }
          }
        });

        // Переключаем класс .open у родительского элемента заголовка
        parentItem.classList.toggle("open");

        // Если список открыт, устанавливаем ему высоту равную его содержимому
        if (parentItem.classList.contains("open")) {
          sublist.style.maxHeight = sublist.scrollHeight + "px";
          sublist.style.marginBottom = "16px";
        } else {
          sublist.style.maxHeight = "0";
          sublist.style.marginBottom = "0";
        }
      }
    });
  });
};
