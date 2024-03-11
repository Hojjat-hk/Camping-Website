// [+] For High Performance
const $ = document;

// [+] Variables
const openMenuBtn             = $.querySelector(".nav-btn");
const mobileMenu              = $.querySelector(".mobile-menu");
const scrollStatusBar         = $.querySelector(".scroll-status__bar")
const lickDestinationProducts = $.querySelectorAll(".destination__heart");
const scrollUpBtn             = $.querySelector(".btn-up");
// [+] Flag Variables
let menuHasOpen = false;

// [+] Function
function openingMenu() {
    if(menuHasOpen){
        openMenuBtn.classList.remove("nav-btn__item--open");
        mobileMenu.classList.remove("mobile-menu--open")
        menuHasOpen = false;
    }else{
        openMenuBtn.classList.add("nav-btn__item--open");
        mobileMenu.classList.add("mobile-menu--open");
        menuHasOpen = true;
    }
}
function scrollStatusGenerator(){
    let scrollTop = $.documentElement.scrollTop;
    let bodyHeight = $.body.clientHeight;
    let windowHeight = window.innerHeight;
    let percentHeight = scrollTop / (bodyHeight - windowHeight);
    percentHeight *= 100;
    scrollStatusBar.style.width = `${percentHeight}%`;
}
function likeProductManage(event){
    if(event.target.nodeName === "DIV"){
        if(!event.target.firstElementChild.classList.contains("destination__heart--active")){
            event.target.firstElementChild.classList.add("destination__heart--active");
        }else{
            event.target.firstElementChild.classList.remove("destination__heart--active");
        }
    }else{
        if(!event.target.classList.contains("destination__heart--active")){
            event.target.classList.add("destination__heart--active");
        }else{
            event.target.classList.remove("destination__heart--active");
        }
    }
}
function scrollUpHandler(){
    $.documentElement.scrollTo(0, 0)
}
// [+] Events
window.addEventListener("scroll", scrollStatusGenerator);
openMenuBtn.addEventListener("click", openingMenu);
scrollUpBtn.addEventListener("click", scrollUpHandler)
lickDestinationProducts.forEach((button) => {
    button.addEventListener("click", likeProductManage)
});