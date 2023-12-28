
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

const svg = document.getElementById('circles');
const circles = svg.querySelectorAll('circle');

// FIXME: ONLY WORKS ON VERY LEFT OF CIRCLES
// svg.addEventListener('click', (e) => {
//     console.log(e);
//     const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
//     const rando = () => colors[Math.floor(Math.random()*colors.length)];
//     document.documentElement.style.cssText = `
//     --dark-color: ${rando()};
//     --light-color: ${rando()};
//     `
// })

window.addEventListener('scroll', () => {
        this.scrollY > 30 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
});

window.addEventListener('scroll', () => {
    this.scrollY > 400 ? circles.forEach(circle => circle.classList.add('scrolled')) : circles.forEach(circle => circle.classList.remove('scrolled'));
});