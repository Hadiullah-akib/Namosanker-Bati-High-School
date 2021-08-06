var burger = document.querySelector(".burger");
var mainNav = document.querySelector(".main-nav");
var mainHeader = document.querySelector(".main-header");

burger.addEventListener("click", () => {
  mainHeader.classList.toggle("h-class-resp");
  mainNav.classList.toggle("v-class-resp");
});
