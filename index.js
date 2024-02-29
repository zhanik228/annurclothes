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

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000
    },
    slidesPerView: determineSlidesPerView(), // Initially determine the number of slides per view
    slidesPerGroup: determineSlidesPerGroup(), // Initially determine the number of slides per group

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  function determineSlidesPerView() {
    return window.innerWidth < 900 ? 1 : 2; // Adjust as needed
  }

  function determineSlidesPerGroup() {
    return window.innerWidth < 900 ? 1 : 2; // Adjust as needed
  }

  window.addEventListener("resize", function() {
    swiper.params.slidesPerView = determineSlidesPerView(); // Update the number of slides per view on window resize
    swiper.params.slidesPerGroup = determineSlidesPerGroup(); // Update the number of slides per group on window resize
    swiper.update(); // Update swiper instance after changing the configuration
  });
});
