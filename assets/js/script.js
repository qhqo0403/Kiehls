window.onload = function() {
  const anchors = document.querySelectorAll('a');
  const toggleBtn = document.querySelector('.toggle-btn');
  const gnb = document.querySelector('.gnb');
  const searchBox = document.querySelector('.search');
  const searchBtn = document.querySelector('.icon');
  const clearBtn = document.querySelector('.clear');
  const searchInput = document.querySelector('.input-frame input');

  const items = document.querySelectorAll('.item');
  const itemImg = document.querySelectorAll('.item img');

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
  });
  clearBtn.addEventListener('click', function() {
    if (searchInput.value) {
      searchInput.value = '';
    } else {
      searchBox.classList.remove('active');
    }
  });

  // intro text moving effect
  const movingTxt = () => {
    const introSect = document.querySelector('.intro');
    const left = document.querySelector('.left-moving');
    const right = document.querySelector('.right-moving');
    const startPoint = introSect.offsetTop - (window.innerHeight / 2);

    let posFromTop = introSect.getBoundingClientRect().top;
    console.log(startPoint);
    if (posFromTop < 100 ) {
      left.style.transform = 'translateX(0)';
      right.style.transform = 'translateX(0)';
      return;
    }
    if (posFromTop < startPoint) {
      left.style.transform = `translateX(-${(posFromTop/10) - 10}%)`;
      right.style.transform = `translateX(${(posFromTop/10) - 10}%)`;
    }
  };


  // intro text reveal
  const revealTxt = () => {
    const introSect = document.querySelector('.intro');
    const movingTxt = introSect.querySelectorAll('p.reveal');
    const link = introSect.querySelector('a');
    const targetPos = introSect.offsetTop;

    let initialTop = window.scrollY;

    if (initialTop >= targetPos - 200) {
      movingTxt.forEach((txt, idx) => {
        setTimeout(() => {
          txt.classList.add('active');
        }, 350*idx);
      });
      setTimeout(() => {
        link.classList.add('active');
      }, 1050)
      
    }
  };
  // 베스트 셀러 스와이퍼 재생 지점 제어
  const bestSwiperStart = () => {
    const bestSectTop = document.querySelector('.best').offsetTop;
    let initialTop = window.scrollY;

  /*   console.log(initialTop, bestSectTop); */
    if (initialTop > (bestSectTop / 2)) {
      best_swiper.autoplay.start();
    }
  };

  window.addEventListener('scroll', () => {
    revealTxt();
    movingTxt();
    bestSwiperStart();
  });



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

  /*   autoplay: {
      disableOnInteraction: false,
    }, */
    
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
  });

}
