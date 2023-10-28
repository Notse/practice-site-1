let closeBtn = document.querySelector(".close");
let menuSlider = document.querySelector(".menu-slider");
let menu = document.querySelector(".hamburger-menu");
let mode = document.querySelector(".switch-menu");

let Root = document.querySelector(":root");

let darkMode = false;

closeBtn.addEventListener("click", () => {
  menuSlider.style.right = "-40rem";
});

menu.addEventListener("click", () => {
  menuSlider.style.right = "0";
});

mode.addEventListener("click", () => {
  if (mode.checked) {
    Root.style.setProperty("--text", "#FFFFFF");
    Root.style.setProperty("--theme", "#111729");
  } else {
    Root.style.setProperty("--text", "#223344");
    Root.style.setProperty("--theme", "#f2f9fe");
  }
});
