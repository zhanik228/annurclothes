document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#main-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: determineSlidesPerView(), // Initially determine the number of slides per view
    slidesPerGroup: determineSlidesPerGroup(), // Initially determine the number of slides per group

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = determineSlidesPerView(); // Update the number of slides per view on window resize
    swiper.params.slidesPerGroup = determineSlidesPerGroup(); // Update the number of slides per group on window resize
    swiper.update(); // Update swiper instance after changing the configuration
  });
});
