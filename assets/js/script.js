// 메인 슬라이더 스와이퍼
const main_swiper = new Swiper('.main', {
  direction: 'horizontal',
  loop: true,

  speed: 1000,
  spaceBetween: 0,

  observer: true,
  observeParents: true,

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

// 베스트 셀러 스와이퍼
const best_swiper = new Swiper(".best", {
  slidesPerView: 2,
  spaceBetween: 10,

  observer: true,
  observeParents: true,

  autoplay: {
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  640: {
    slidesPerView: 4,
    spaceBetween: 40
    }
  }
});

// 브랜드 스토리 스와이퍼
const story_swiper = new Swiper(".story", {
  slidesPerView: "auto",
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  observer: true,
  observeParents: true,
})

const anchors = document.querySelectorAll('a');
const toggleBtn = document.querySelector('.toggle-btn');
const gnb = document.querySelector('.gnb');
const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('.icon');
const clearBtn = document.querySelector('.clear');
const searchInput = document.querySelector('.input-frame input');

// a태그 최상단 이동 방지
/* 
이벤트로 조작하는 것보단 속성으로 바꾸는게 좋을것 같아서 수정!
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
  })
}); */
anchors.forEach(anchor => {
  anchor.setAttribute('href', 'javascript:void(0)');
});


// toggle button 누르면 gnb 보이고, 버튼 모양 변형
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('on');
  gnb.classList.toggle('active');
});

// search 관련 기능
searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('active');
})
clearBtn.addEventListener('click', function() {
  if (searchInput.value) {
    searchInput.value = '';
  } else {
    searchBox.classList.remove('active');
  }
});

