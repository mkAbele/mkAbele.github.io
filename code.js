const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3.33,
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
});