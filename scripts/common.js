const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add('hide');
    body.classList.add('disabledScroll');
}

cancelBtn.onclick =() => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disabledScroll');
}

window.onscroll = () => {
    if (body.classList.contains("home")) {
        this.scrollY > 30 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
    }
}
