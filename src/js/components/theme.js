export const useTheme = () => {
  const themeTarget = document.querySelector("[data-theme]");
  const themeSwitcher = document.querySelector("[data-theme-switcher]");

  const theme = localStorage.getItem("theme") || "light";
  themeTarget.dataset.theme = theme;

  if (theme === "dark") {
    themeSwitcher.checked = true;
  } else {
    themeSwitcher.checked = false;
  }

  themeSwitcher.addEventListener("click", () => {
    if (themeTarget.dataset.theme == "light") {
      themeTarget.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      themeTarget.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
};
