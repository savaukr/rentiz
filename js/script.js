const burger = document.querySelector(".menu-icon");
console.log("burger:", burger);
const menu = document.querySelector(".menu");
const body = document.body;

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}

//---------Filter dropdown

const filter = document.querySelector(".filter");
if (filter) {
  const items = filter.querySelectorAll(".block-filter");

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector(".block-filter__dropdown").classList.toggle("_active");
      item.querySelector(".block-filter__icon").classList.toggle("_active");

      if (event.target.classList.contains("block-filter__item")) {
        item.querySelector(".block-filter__value").textContent =
          event.target.textContent;
      }
    });
  });
}

//------------Swiper start ----------------
const swiper = new Swiper(".popular-slider", {
  spaceBetween: 20,
  slidesPerView: 3,
  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
