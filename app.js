// JS to find vertical scroll
// function findScroller(element) {
//     element.onscroll = function() { console.log(element)}

//     Array.from(element.children).forEach(findScroller);
// }

// findScroller(document.body);

// JS to find horizontal scroll
// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );

// JS for overflow

// const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
//     return scrollHeight > clientHeight || scrollWidth > clientWidth;
// }


// Swiper JS - Destinations

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });