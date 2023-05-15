const swiper = new Swiper('.swiper', {
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
