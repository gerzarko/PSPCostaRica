export const BurgerMenu = () => {
  const burgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
    burgerBtn?.classList.toggle("toggle-btn");
  };

  burgerBtn?.addEventListener("click", toggleMenu);
  mobileMenu?.addEventListener("click", toggleMenu);
};
