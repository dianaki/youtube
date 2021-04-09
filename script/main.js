const channelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});


const recommendlSlider = new Swiper('.recommend-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.recommend-button-next',
    prevEl: '.recommend-button-prev',
  },
});

const recChannelSlider = new Swiper('.rec-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.rec-button-next',
    prevEl: '.rec-button-prev',
  },
});
