const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 800,
  spaceBetween: 0,

  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});
