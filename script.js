var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 25,
  autoHeight: false,
  loop: true,
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

function toggleMenu() {
  const navList = document.getElementById('navList');
  const iconMenu = document.querySelector('.icon-menu');

  navList.classList.toggle('active'); // Додає або забирає клас 'active'

  // Зміна іконки з 'menu' на 'close'
  if (navList.classList.contains('active')) {
    iconMenu.textContent = 'close';
  } else {
    iconMenu.textContent = 'menu';
  }
}