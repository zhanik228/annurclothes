document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper("#profile-swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: false,
      //   autoplay: {
      //     delay: 5000
      //   },
      slidesPerView: 1.5, // Initially determine the number of slides per view
      slidesPerGroup: 1, // Initially determine the number of slides per group
      //   slidesOffsetAfter: -550,
      spaceBetween: 30,
      freeMode: true,
  
      //   If we need pagination
      // pagination: {
      //   el: ".breadcrumb-swiper-pagination",
      // },
  
      // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
  
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


  const tabsBox = document.querySelector('.profile-nav__list')

  let isDragging = false
  
  const dragging = (e) => {
    if (!isDragging) return
    if (e.type === 'mousemove') {
      tabsBox.scrollLeft -= e.movementX
    } else if (e.type === 'touchmove') {
      const touch = e.touches[0]
      const movementX = touch.clientX - touch.screenX
      tabsBox.scrollLeft -= movementX
    }
  }
  
  const dragStart = () => {
    isDragging = true
  }
  
  const dragStop = () => {
    isDragging = false
  }
  
  tabsBox.addEventListener('mousedown', dragStart)
  tabsBox.addEventListener('touchstart', dragStart)
  
  tabsBox.addEventListener('mousemove', dragging)
  tabsBox.addEventListener('touchmove', dragging)
  
  document.addEventListener('mouseup', dragStop)
  document.addEventListener('touchend', dragStop)