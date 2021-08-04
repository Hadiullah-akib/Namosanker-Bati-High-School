var burger = document.querySelector(".burger");
var mainNav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
  mainNav.classList.toggle("v-class-resp");
});
