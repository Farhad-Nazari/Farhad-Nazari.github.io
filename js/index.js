/* Navigation */
const icon = document.querySelector(".icon");
const nav = document.querySelector(".navigation");
const mobileMenu = document.querySelector(".mobile-menu");
const li = document.querySelectorAll(".navigation-li");
const lang = document.querySelector(".lang");
const fa = document.querySelector(".fa");
const en = document.querySelector(".EN");
const faMobile = document.querySelector(".fa-mobile");

icon.addEventListener("click",function() {
    nav.classList.toggle("shownav");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("icon-2");
    icon.classList.toggle("bi-x");
    en.classList.toggle("hide");
    mobileMenu.classList.toggle("mobile-2");
});

for (let i=0;i<=5;i++) {
    li[i].addEventListener("click",function(){
        nav.classList.remove("shownav");
        icon.classList.add("bi-list");
        icon.classList.remove("icon-2");
        icon.classList.remove("bi-x");
        mobileMenu.classList.remove("mobile-2");
    });
}

lang.addEventListener("click",function(){
    fa.classList.toggle("hide");
});
en.addEventListener("click",function(){
    faMobile.classList.toggle("hide");
});

/* End of  Navigation */

/* Slider */

const slide = document.querySelector(".slider");
const image = document.querySelector(".slider-img");
const control = document.querySelectorAll(".slider-i");
let counter=0;
let i=0;
let widthOfTranslate;

for (let i=0;i<=8;i++) {
    control[i].addEventListener("click",function() {
        widthOfTranslate = image.width;
        counter=i;
        slide.style.transform = `translateX(-${counter*widthOfTranslate}px)`;
        for(let j=0;j<=8;j++) {
            control[j].classList.remove("bi-circle-fill");
            control[j].classList.add("bi-circle");
        }
        control[i].classList.remove("bi-circle");
        control[i].classList.add("bi-circle-fill");
    })
}

function next() {
    counter++;
        widthOfTranslate = image.width;
        slide.style.transform = `translateX(-${counter*widthOfTranslate}px)`;
        control[counter-1].classList.add("bi-circle");
        control[counter-1].classList.remove("bi-circle-fill");
        control[counter].classList.remove("bi-circle");
        control[counter].classList.add("bi-circle-fill");
}

function previous() {
    counter--;
        widthOfTranslate = image.width;
        slide.style.transform = `translateX(-${counter*widthOfTranslate}px)`;
        control[counter+1].classList.add("bi-circle");
        control[counter+1].classList.remove("bi-circle-fill");
        control[counter].classList.remove("bi-circle");
        control[counter].classList.add("bi-circle-fill");
}

setInterval(function(){
    let screen = window.innerWidth;
    if (screen>991 && i==0 && counter<6) {
       next();
    }
    else if (screen>991 && i==0 && counter==6) {
       previous();
        i=1;
    }
    else if (screen>991 && i==1 && counter>0) {
       previous();
    }
    else if (screen>991 && i==1 && counter==0) {
        next();
        i=0;
    }
    else if (screen<=991 && screen>575 && i==0 && counter<7) {
        next();
     }
     else if (screen<=991 && screen>575 && i==0 && counter==7) {
        previous();
         i=1;
     }
     else if (screen<=991 && screen>575 && i==1 && counter>0) {
        previous();
     }
     else if (screen<=991 && screen>575 && i==1 && counter==0) {
         next();
         i=0;
     }
    else if (screen<=575 && i==0 && counter<8) {
        next();
     }
     else if (screen<=575 && i==0 && counter==8) {
        previous();
         i=1;
     }
     else if (screen<=575 && i==1 && counter>0) {
        previous();
     }
     else if (screen<=575 && i==1 && counter==0) {
         next();
         i=0;
     }
     else {
        counter=0;
        i=0;
     }
},5000);

/* end of slider */

const skills = document.querySelector("#skills");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const bootstrap = document.querySelector(".bootstrap");
const less = document.querySelector(".less");
const js = document.querySelector(".javascript");
const jQ = document.querySelector(".jQuery");
const service = document.querySelector("#services");
const services = document.querySelectorAll(".services-icon");
let count=0;

document.addEventListener(("scroll"),function(){
    let percent=0;
    let x= skills.offsetTop;
    let sizeOfScroll = this.documentElement.scrollTop;
    if (sizeOfScroll>(x-200) && count==0){
        count=1;
        setInterval(function(){
            percent++;
            if (percent>90) {
                clearInterval;
            }
            else {
                html.style.width=`${percent}%`;
                css.style.width=`${percent}%`;
            }
        },50);

        setInterval(function(){
            percent++;
            if (percent>85) {
                clearInterval;
            }
            else {
                bootstrap.style.width=`${percent}%`;
            }
        },50);

        setInterval(function(){
            percent++;
            if (percent>85) {
                clearInterval;
            }
            else {
                less.style.width=`${percent}%`;
            }
        },50);

        setInterval(function(){
            percent++;
            if (percent>75) {
                clearInterval;
            }
            else {
                js.style.width=`${percent}%`;
                jQ.style.width=`${percent}%`;
            }
        },60)
    }
    
    let y=service.offsetTop;
    if (sizeOfScroll>y-100) {
        for (let i=0;i<4;i++) {
            services[i].style.transform="translateX(0)";
        }
    }
});

/* --------------------------------------------------------------------------------*/

const emailDiv=document.querySelector(".email-div-container");
const emailBtn=document.querySelector(".email");
const emailClose = document.querySelector(".email-close");
const contactMe = document.querySelector(".contact-me");

emailBtn.addEventListener("click",function(){
    emailDiv.classList.add("show-email");
});
contactMe.addEventListener("click",function(){
    emailDiv.classList.add("show-email");
});
emailClose.addEventListener("click",function(){
    emailDiv.classList.remove("show-email");
});
window.addEventListener("click",function(x){
    if (x.target == emailDiv) {
        emailDiv.classList.remove("show-email");
    }
});

