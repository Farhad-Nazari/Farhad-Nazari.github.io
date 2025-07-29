/* Navigation */
const icon = document.querySelector(".icon");
const nav = document.querySelector(".navigation");
const li = document.querySelectorAll(".navigation-li");


icon.addEventListener("click",function() {
    nav.classList.toggle("shownav");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x");
});
document.addEventListener("click",function(e){
    if(e.target !== icon && e.target !== nav && !nav.contains(e.target)){
        nav.classList.remove("shownav");
        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
    }
});

for (let i=0;i<=5;i++) {
    li[i].addEventListener("click",function(){
        nav.classList.remove("shownav");
        icon.classList.add("bi-list");
        icon.classList.remove("bi-x");
    });
}


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
const htmlCss = document.querySelector(".htmlCss");
const bootstrapLessSass = document.querySelector(".Bootstrap-less-sass");
const TailwindCSS = document.querySelector(".TailwindCSS");
const jsJquery = document.querySelector(".JavaScript-jQuery");
const reactRedux = document.querySelector(".React-Redux");
const nextjs = document.querySelector(".next");
const wp = document.querySelector(".Wordpress-Woocommerce");
const seo = document.querySelector(".SEO");
const uiux = document.querySelector(".UI-UX");
const php = document.querySelector(".php");
const mysql = document.querySelector(".mysql");
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
            if (percent>100) {
                clearInterval();
            }
            else {
                htmlCss.style.width=`${percent}%`;
                bootstrapLessSass.style.width=`${percent}%`;
                TailwindCSS.style.width=`${percent}%`;
                jsJquery.style.width=`${percent}%`;
                reactRedux.style.width=`${percent}%`;
                nextjs.style.width=`${percent}%`;
                wp.style.width=`${percent}%`;
                seo.style.width=`${percent}%`;
                uiux.style.width=`${percent}%`;
                php.style.width=`${percent}%`;                
            }
        },20);
    }
    
    let y=service.offsetTop;
    if (sizeOfScroll>y-200) {
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

