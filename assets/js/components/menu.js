const menuToggler = document.querySelector(".menu-toggle");
const aside = document.querySelector("aside");

menuToggler.addEventListener("click", () => {
  aside.classList.toggle("active");
  menuToggler.querySelector("i").classList.toggle("fa-times");
});

window.addEventListener("scroll", () => {
  aside.classList.remove("active");
  menuToggler.querySelector("i").classList.remove("fa-times");
});
