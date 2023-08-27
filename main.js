import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// init Swiper:
// const swiper = new Swiper(...);
const swiper1 = new Swiper(".sw1", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  //
  slidesPerView: 1,
  spaceBetween: 24,

  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".sw2", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  //
  // slidesPerView: 3,
  // spaceBetween: 30,
  breakpoints: {
    // when window width is >= moblie
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= pad
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= pc
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  // spaceBetween: 24,

  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

console.log("Hello world!");

const text2 = document.querySelector(".text2 p");
text2.innerHTML = text2.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 20}deg)">${char}</span>`
  )
  .join("");
