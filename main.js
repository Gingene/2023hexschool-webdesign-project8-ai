// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import productRender from "./assets/js/product";

function getCurrentFileName() {
  let path = window.location.pathname;
  let fileName = path.split("/").pop();
  return fileName;
}

if (getCurrentFileName() === "index.html") {
  indexHandler();
}

if (getCurrentFileName() === "product.html") {
  productHandler();
  productRender();
}

if (getCurrentFileName() === "about_us.html") {
  aboutHandler();
}

console.log("Hello world!");

function indexHandler() {
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
    pagination: {
      el: ".swiper-pagination",
    },
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

  const text2 = document.querySelector(".text2 p");
  text2.innerHTML = text2.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 20}deg)">${char}</span>`
    )
    .join("");
  console.log(swiper2, text2);
}

function productHandler() {
  const swiper3 = new Swiper(".sw3", {
    // 分頁、左右箭頭、滾動條若有使用則必需設定
    // 分頁
    pagination: {
      el: ".swiper-pagination",
    },
    //
    slidesPerView: 1,
    spaceBetween: 0,

    // 左右箭頭
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const text1 = document.querySelector(".text1 p");
  text1.innerHTML = text1.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 20}deg)">${char}</span>`
    )
    .join("");
}

function aboutHandler() {
  const swiper4 = new Swiper(".sw4", {
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
        spaceBetween: 0,
      },
      // when window width is >= pad
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      // when window width is >= pc
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}
