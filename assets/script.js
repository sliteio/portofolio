// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
});

// Mobile menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navUl = document.querySelector("nav ul");

mobileMenuBtn.addEventListener("click", () => {
  navUl.classList.toggle("active");
  mobileMenuBtn.querySelector("i").classList.toggle("fa-bars");
  mobileMenuBtn.querySelector("i").classList.toggle("fa-times");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
    mobileMenuBtn.querySelector("i").classList.toggle("fa-bars");
    mobileMenuBtn.querySelector("i").classList.toggle("fa-times");
  });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
