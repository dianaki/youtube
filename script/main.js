const channelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});


const recommendlSlider = new Swiper('.recommend-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 2
    },
    800: {
      slidesPerView: 1
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.recommend-button-next',
    prevEl: '.recommend-button-prev',
  },
});

const recChannelSlider = new Swiper('.rec-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.rec-button-next',
    prevEl: '.rec-button-prev',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});
