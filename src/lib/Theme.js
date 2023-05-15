export const Theme = () => {
  const btnTheme = document.getElementById("theme");

  let userTheme = localStorage.getItem("theme");
  let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const ThemeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      return;
    }
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  btnTheme?.addEventListener("click", () => {
    themeSwitch();
  });

  ThemeCheck();
};