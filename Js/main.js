document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var sideNav = document.querySelector('.side-nav');
    
    if (menuBtn && sideNav) {
        menuBtn.addEventListener('click', function () {
            sideNav.classList.toggle('open');
        });
    }
});
