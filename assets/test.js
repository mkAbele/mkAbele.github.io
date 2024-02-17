import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener("load", function(e){
        console.log("Page loaded");
    });
});