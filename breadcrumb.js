document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#breadcrumb-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    //   autoplay: {
    //     delay: 5000
    //   },
    slidesPerView: 2, // Initially determine the number of slides per view
    slidesPerGroup: 1, // Initially determine the number of slides per group
    //   slidesOffsetAfter: -550,
    spaceBetween: 30,

    //   If we need pagination
    // pagination: {
    //   el: ".breadcrumb-swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".breadcrumb-swiper-button-next",
      prevEl: ".breadcrumb-swiper-button-prev",
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
