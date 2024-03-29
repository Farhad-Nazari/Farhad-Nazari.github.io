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

const previous = document.querySelector(".slider1-previous");
const next = document.querySelector(".slider1-next");
const slider = document.querySelector(".slider1-container");
const row3Img = document.querySelector(".slider1-img");
let counter = 0;
let translateSlider1;

function slider1() {
  slider.style.transform = `translateX(${-translateSlider1*counter}px)`; 
}

next.addEventListener("click",function(){
  let screen = window.innerWidth;
  translateSlider1=row3Img.width;
  counter++;
  if (screen<=575 && counter<10) {
    slider1();
  }
  else if (screen<=575 && counter==10) {
    counter=0; 
    slider1();
  }
  else if (screen>575 && counter<9) {
    slider1();
  }
  else if (screen>575 && counter==9) {
    counter=0; 
    slider1();
  }
});

previous.addEventListener("click",function(){
  let screen = window.innerWidth;
  translateSlider1=row3Img.width;
  counter--;
  if (screen<=575 && counter==-1) {
    counter=9;
    slider1();
  }
  else if(screen<=575 && counter<9) {
    slider1();
  }
  else if (screen>575 && counter==-1) {
    counter=8;
    slider1(); 
  }
  else if (screen>575 && counter<8) {
    slider1();
  }
});

/*slider2*/
const next2 = document.querySelector(".slider2-next");
const previous2 = document.querySelector(".slider2-previous");
const slide2 = document.querySelector(".slider2-container");
const row6Img = document.querySelector(".row6-img");
let counter2 = 0;
let widthOfTranslate;

function slideActive(x) {
  x.classList.remove ("notActive");
  x.classList.add ("active");
  slide2.style.transform = `translateX(-${widthOfTranslate*counter2}px)`; 
}
function slideNonActive(x) {
  x.classList.remove ("active");
  x.classList.add ("notActive");
  slide2.style.transform = `translateX(-${widthOfTranslate*counter2}px)`; 
}
function slider2Next(x) {
  widthOfTranslate= row6Img.width;
  counter2++;
  if (counter2<x && counter2>0) {
    slideActive(previous2);
  }
  else if (counter2==x) {
    slideNonActive(next2);
  }
  else {
    counter2=x;
  }
}
function slider2Previous(x) {
  widthOfTranslate= row6Img.width;
  counter2--;
  if(counter2<x && counter2>0) {
    slideActive(next2);
  }
  else if (counter2==0) {
    slideNonActive(previous2);
  }
  else {
  counter2=0;
  }
}
next2.addEventListener("click",function(){
  let screen = window.innerWidth;
  if (screen<=767){
    slider2Next(5);
  }
  else if (screen>=768 && screen<=991) {
    slider2Next(4);
  }
  else if (screen>=992) {
    slider2Next(3);
  }
});
previous2.addEventListener("click",function(){
  let screen = window.innerWidth;
  if (screen<=767){
    slider2Previous(5);
  }
  else if (screen>=768 && screen<=991) {
    slider2Previous(4);
  }
  else if (screen>=992) {
    slider2Previous(3);
  }
});

/*End*/