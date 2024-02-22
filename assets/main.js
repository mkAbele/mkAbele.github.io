import $, { removeData } from "jquery";
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//import imagesLoaded from "imagesloaded";

import LocomotiveScroll from 'locomotive-scroll';

var loaderText = 

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event){

    console.log("DOM loaded");
    
    //wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function(e){
        let loadP = 0;

        gsap.to($(".loadscreen .loadbar .fill"),{
            width: '100%',
            duration: 1,
            onUpdateParams:[$(this)],
            onUpdate:function(tl){
                //var tlp = tl.progress() * 100 >> 0;
                //$(".loadscreen .counter").html(tlp+"%");
                console.log(tl);
            }
        })

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