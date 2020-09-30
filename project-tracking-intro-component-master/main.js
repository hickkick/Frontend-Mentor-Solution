const BURGER = document.querySelector('.burger'); 

BURGER.addEventListener('click', () => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu_active');
    
    // for change burger image
    if (BURGER.children[0].attributes.src.value === './images/icon-hamburger.svg') {
        BURGER.children[0].src = './images/icon-close.svg';
    } else {
        BURGER.children[0].src = './images/icon-hamburger.svg';
    }
    
});