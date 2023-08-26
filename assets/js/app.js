let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}
window.onscroll = function() {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};
let navLinks = document.querySelectorAll(".nav-link a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let toogler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toogler.addEventListener("click", () => {
  menu.classList.toggle("showing");
  menu.classList.contains("showing")
    ? (toogler.querySelector("i").classList =
        "fa-sharp fa-solid fa-bars-staggered")
    : (toogler.querySelector("i").classList = "fa-sharp fa-solid fa-bars");
});
