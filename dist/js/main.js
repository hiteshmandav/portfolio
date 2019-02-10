// selecting Dom elements

const menuBtn = document.querySelector('.menu-btn');
const menuBrand = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');


// Menu/Nav-bar 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menuBrand.classList.add('show');
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuItems.forEach((item) => item.classList.add('show'));

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuItems.forEach((item) => item.classList.remove('show'));

        showMenu = false;}
}