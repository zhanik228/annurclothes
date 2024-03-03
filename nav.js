const header = document.querySelector(".header");

const mobileMenuToggle = document.querySelector(".mobile-nav-toggle");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector(".mobile-nav__close");
const mobileSubmenuCloseBtn = document.querySelector(".mobile-subnav__close");
const mobileSubnavWrapper = document.querySelector(".mobile-subnav-wrapper");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

mobileMenuToggle.addEventListener("click", function (event) {
  mobileMenu.classList.add("mobile-nav--active");
});

mobileMenuCloseBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("mobile-nav--active");
});

mobileSubmenuCloseBtn.addEventListener("click", function () {
  mobileSubnavWrapper.classList.remove("mobile-subnav-wrapper--active");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (event.target.id === "shop") {
      mobileSubnavWrapper.classList.add("mobile-subnav-wrapper--active");
    }
  });
});

document.addEventListener("scroll", function (event) {
  if (window.scrollY > 60) {
    header.style.background = "#fff";
  } else {
    header.style.background = "transparent";
  }
});
