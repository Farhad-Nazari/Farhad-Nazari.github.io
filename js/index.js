/* cookies */
const cookies = document.querySelector(".cookies-container");
const cookiesClose = document.querySelector(".cookies-icon");

window.addEventListener("load",function(){
    cookies.classList.remove ("hidden");
});
cookiesClose.addEventListener("click",function(){
    cookies.classList.add("hidden");
});
window.addEventListener("click",function(x){
    if (x.target == cookies) {
        cookies.classList.add("hidden");
    }
});

/* link to top */
const fixedElement = document.querySelector(".fixed-element");

document.addEventListener("scroll",function(){
    let sizeOfScroll = this.documentElement.scrollTop;
    if (sizeOfScroll>100) {
        fixedElement.classList.remove("hide-fixed-element");
    }
    else {
        fixedElement.classList.add("hide-fixed-element");
    }
});

/* search */
const search = document.querySelector(".search-i");
const searchForm = document.querySelector(".search-form");
const formInput = document.querySelector(".inputNav");
const formI= document.querySelector(".form-i");
const form = document.querySelector(".formNav");

search.addEventListener("click",function() {
    searchForm.classList.toggle("showForm");
    searchForm.classList.toggle("hideForm");
    search.classList.toggle("bi-search");
    search.classList.toggle("bi-x-lg");
});

window.addEventListener ("click",function(x) {
    if (x.target !== searchForm && x.target!==search && x.target !== formInput && x.target!==form && x.target !==formI) {
    searchForm.classList.remove("showForm");
    searchForm.classList.add("hideForm");
    search.classList.remove("bi-x-lg");
    search.classList.add("bi-search");
    }
});

/* navigation */
const bars = document.querySelectorAll(".bars");
const menuClose = document.querySelector(".menuClose");
const submenuLi = document.querySelectorAll(".submenu-li");
const submenu = document.querySelectorAll(".submenu");
const back = document.querySelectorAll(".back");
const navIcon = document.querySelector(".navIcon");
const nav = document.querySelector(".navigation");


navIcon.addEventListener("click", function() {
    nav.classList.toggle ("showNav");
    bars[0].classList.toggle("rotateRight");
    bars[1].classList.toggle("hidden-bar");
    bars[2].classList.toggle("rotateLeft");
    menuClose.classList.toggle("menu-close");
    if (menuClose.textContent=="MENU") {
        menuClose.textContent="CLOSE"
    }
    else {
        menuClose.textContent="MENU"
    }
});

for(let i=0; i<3 ; i++) {
    submenuLi[i].addEventListener("click",function(){
        submenu[i].classList.remove("hideNav");
        submenu[i].classList.add("showNav");
    });
    
    back[i].addEventListener("click",function(){
        submenu[i].classList.remove ("showNav");
        submenu[i].classList.add ("hideNav");
    });
}

/*slider1*/

const images=["images/3.webp", "images/4.webp","images/5.webp","images/6.webp","images/7.webp","images/8.webp","images/9.webp","images/10.webp","images/11.webp","images/12.webp",];
const previous = document.querySelector(".slider1-previous");
const next = document.querySelector(".slider1-next");
const slider = document.querySelectorAll(".slider1");
let activeIndex = 0;



next.addEventListener("click",function() {
    activeIndex++;
    if (activeIndex == 8) {
        activeIndex = 0;
      }
    console.log(slider[0]);
    console.log(slider[1]);
    slider[0].setAttribute("src", images[activeIndex]);
    slider[1].setAttribute("src", images[activeIndex+1]);
});
previous.addEventListener("click",function() {
    activeIndex--;
    if (activeIndex == -1) {
        activeIndex = 8;
      }
    console.log(slider[0]);
    console.log(slider[1]);
    slider[0].setAttribute("src", images[activeIndex]);
    slider[1].setAttribute("src", images[activeIndex+1]);
});