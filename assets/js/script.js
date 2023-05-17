const main_swiper = new Swiper('.main', {
  direction: 'horizontal',
  loop: true,

  speed: 1000,
  spaceBetween: 0,

  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

const best_swiper = new Swiper(".best", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});