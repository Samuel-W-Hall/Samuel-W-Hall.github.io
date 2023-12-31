const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const aboutBtn = document.querySelector('.about-btn');
const aboutSection = document.querySelector('.about');
const scrollBtns = document.querySelectorAll('.scroll-btn');
const currentYear = new Date().getFullYear();
// console.log(currentYear)

// CALLBACK FUNCTIONS
const hideMenu = function() {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disabledScroll');
}



// EVENT LISTENERS
for (const scrollBtn of scrollBtns) {
    scrollBtn.addEventListener('click', hideMenu);
}

menuBtn.addEventListener('click', function() {
    menu.classList.add("active");
    menuBtn.classList.add('hide');
    body.classList.add('disabledScroll');
});

cancelBtn.addEventListener('click', hideMenu);

document.querySelector('.copyright').textContent = `©️ Samuel Hall ${currentYear}`;