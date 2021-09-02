// Navbar
const menuIcon = document.querySelector(".navbar-menu");
const navbar = document.querySelector(".navbar");
const body = document.body;

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
