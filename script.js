let menu = document.querySelector('.menu-items');
let button = document.querySelector('.menu');
open = false;

function openMenu() {
    if (open == false) {
        menu.style.top = '90px';
        open = true;
    } else {
        menu.style.top = '-400px'
        open = false;
    }
}