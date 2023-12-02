
// const scrollBtns = document.querySelectorAll('.scroll-btn');

// const scrollToSection = function(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     console.log(`href: ${href}`)
//     const offsetTop = document.querySelector(href).offsetTop;
//     const title = document.querySelector('.title');
//     // const navBarHeight = document.querySelector('.navbar sticky').offsetHeight;
//     console.log(`offsetTop: ${offsetTop}`)
//     menu.classList.remove('active');
//     menuBtn.classList.remove('hide');
//     body.classList.remove('disabledScroll');
//     title.scrollIntoView();
    
//     scroll({
//         top: offsetTop - 100, // navbar height (when sticky)
//         behavior: "smooth"
//     })
// }

// for (const scrollBtn of scrollBtns) {
//     scrollBtn.addEventListener('click', scrollToSection);
// }