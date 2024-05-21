const header = document.querySelector("header");
const menuLinks = document.querySelector(".menu-links");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

const showMenu = function () {
    if (menuLinks.style.left === '0px') {
        menuLinks.style.left = '-260px';
    } else {
        menuLinks.style.left = '0px';
    }
}

const hideMenu = function () {
    menuLinks.style.left = '-260px';
}

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);