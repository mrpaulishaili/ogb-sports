import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css";

createApp(App).use(store).use(router).mount("#app");

/* Navigation Module Functions */
const nav = document.querySelector("nav");
const navDisplayToggle = document.querySelector(".control-navigation-display");
const itemCategories = document.querySelectorAll(".item-category");
const closeNav = document.querySelectorAll(".close-nav");

console.log(nav);
console.log(navDisplayToggle);

navDisplayToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

itemCategories.forEach((itemCategory) => {
  itemCategory.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

closeNav.forEach((nave) => {
  nave.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
