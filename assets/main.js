import $, { removeData } from "jquery";
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import imagesLoaded from "imagesloaded";
imagesLoaded.makeJQueryPlugin( $ );

import LocomotiveScroll from 'locomotive-scroll';

let loadedCnt = 0;
let loadStatus = 0;
let loadPercent = 0;
const allImgs = $('img').length;
const progressCnt = $('.loadscreen .counter');

let tlProgress = gsap.timeline({
    onUpdate: () => {
        // Update the counter
        loadPercent = Math.floor(tlProgress.progress() * 100);
        progressCnt.html(loadPercent+"%")
    },
    onComplete: () => {
        // Hide the loading container
        let tlComplete = gsap.timeline()
            .to('.loadscreen .loadbar', {'opacity': 0, duration:0.7})
            .to(progressCnt, {'opacity': 0, duration:1})
            .to('.loadscreen', {'y': '-100%'});
    }
});

tlProgress.to('.loadscreen .loadbar .fill', {width: '100%', duration: 2})

$('.wrapper')
    .imagesLoaded()
    .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );

        loadedCnt++;
        loadStatus = loadedCnt/allImgs;
        gsap.to(tlProgress, {progress:loadStatus})
    });

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event){

    console.log("DOM loaded");
    
    //wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function(e){
        let loadP = 0;

        // gsap.to($(".loadscreen .loadbar .fill"),{
        //     width: '100%',
        //     duration: 1,
        //     onUpdateParams:[$(this)],
        //     onUpdate:function(tl){
        //         //var tlp = tl.progress() * 100 >> 0;
        //         //$(".loadscreen .counter").html(tlp+"%");
        //         //console.log(tl);
        //     }
        // })

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        
        
        // $( ".c-scrollbar_thumb" ).append( "<span></span><span></span><span></span><span></span><span></span>" );

        //Load swiper js
        const swiper = new Swiper('.swiper', {
            modules: [Scrollbar],
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

    }, false);
    
});