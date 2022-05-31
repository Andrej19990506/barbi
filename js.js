const footerSocialImg = document.querySelector(".social-item__img");
const headerBarBurger = document.querySelector(".nav-mobile__burger");
const headerBar = document.querySelector(".nav-mobile__menu");
const mediaQuvery = window.matchMedia('(max-width: 768px)');
const overhidenBar = document.querySelector(".overhiden-baar");
const closeBar = document.querySelector(".nav-mobile__desktop-close");


let offset = 0;

headerBarBurger.addEventListener('click', function(){
    headerBar.style.marginRight = offset + "px";
    headerBar.style.display = "block";
    if(headerBar.style.display == "block"){
        overhidenBar.style.display = "block"
    };
    if(headerBar.style.display == "block"){
        document.querySelector(".body").style.overflow = "hidden"
    }
})

closeBar.addEventListener('click', function(){
    headerBar.style.display = "none";
    overhidenBar.style.display = "none";
    document.querySelector(".body").style.overflow = "scroll"
})


