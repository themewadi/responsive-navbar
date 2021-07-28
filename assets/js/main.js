// Responsive Mobile Menu
const menuButton = document.querySelector(".mobile-menu-btn");
const menuWrapper = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menuWrapper.classList.toggle("show");
});

// ===
const submenuLinks = document.querySelectorAll(".navigation__item--hasItem");
submenuLinks.forEach((submenuLink) => {
  submenuLink.addEventListener("click", () => {
    submenuLink.classList.toggle("active");
    submenuLink.querySelector(".submenu").classList.toggle("show");
  });
});
