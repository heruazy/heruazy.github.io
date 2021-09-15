// HOVER IN LOGO
const brand = document.querySelector('.navbar-brand');
brand.addEventListener('mouseenter', function() {
    brand.style.color = '#006aff';
    brand.style.transition = '.1s';
});
brand.addEventListener('mouseleave', function() {
    brand.style.color = '#111';
    brand.style.transition = '.7s';
});


// SCROLL NAVBAR
document.addEventListener('scroll', function() {
    const navScroll = document.querySelector('nav');

    if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
        navScroll.classList.add('nav-scrolled');
    } else {
        navScroll.classList.remove('nav-scrolled');
    };
});