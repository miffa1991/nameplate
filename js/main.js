$(function () {
    // burger-menu
    let btn = document.querySelector('.btn-media');
    let menu = document.querySelector('.header__right-nav');
    let menuBtn = document.querySelector('.header__right .info__btn');

    btn.addEventListener('click', () => {
    btn.classList.toggle('btn-media-active');
    menu.classList.toggle('header__right-nav-active');
    menuBtn.classList.toggle('info__btn-active');
    })

    // fixed menu

    if (window.innerWidth > 1024) {
    function menuFixed() {
        $(window).scroll(function () {
        if ($(window).scrollTop() > 145) {
            $('.headermob').addClass('header-active');
        } else {
            $('.headermob').removeClass('header-active')
        }
        });
    }

    menuFixed();

    }
});