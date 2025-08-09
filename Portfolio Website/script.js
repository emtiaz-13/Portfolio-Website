const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("gmail-icon").addEventListener("click", function (e) {
  e.preventDefault();
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=emtiazahmed1013@gmail.com",
    "_blank"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const skillText = document.querySelector(".skills-text");
  const skillImage = document.querySelector(".skills-image");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    [skillText, skillImage].forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
