const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1.33,
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    //And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        640: {
            slidesPerView: 1.8,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 3.33,
        },
    }
});