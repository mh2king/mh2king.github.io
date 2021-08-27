function showMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu){
        toggle.addEventListener('click', function(){
            menu.classList.toggle('active');
        })
    }
}
showMenu('cat', 'dog');


const thumbSlider = new Swiper('.thumb_container', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

   
});

const heroSlider = new Swiper('.hero_container', {
    thumbs: {
        swiper: thumbSlider,
    },

    loop: true,
    grabCursor: true,
    effect: "fade",

    keyboard: {
        enable: true,
    },

    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    }
});

const brawlStars = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
})

brawlStars.reveal('.item-shop', {
    origin: 'bottom',
    interval: 200,
})