document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const sideNav = document.querySelector('.side-nav');
    
    if (menuBtn && sideNav) {
        menuBtn.addEventListener('click', function () {
            sideNav.classList.toggle('open');
        });
    }
});