let nav_open = document.querySelector(".nav-btn");
let nav_close = document.querySelector(".nav-close");
let nav_list = document.querySelector(".nav-list");
let header_img = document.querySelector(".header-img > img");

window.onresize = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 1140) {
    header_img.setAttribute("src", './images/header/hero_mob.png')
  } else {
    header_img.setAttribute("src", './images/header/hero.png')
  }
}

nav_open.addEventListener("click", () => {
  nav_list.classList.add("open");
});

nav_close.addEventListener("click", () => {
  nav_list.classList.remove("open");
});
