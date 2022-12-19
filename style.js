const styleToggle = document.querySelector(".style-switcher-toggler");
styleToggle.addEventListener("click", () => {
  console.log("hello world");
  document.querySelector(".style-switcher").classList.toggle("open");
});
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
//Theme Colors.
const alternate = document.querySelectorAll(".alternate-style");
function setActibeStyle(color) {
  alternate.forEach((style) => {
    if (color == style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
