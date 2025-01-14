
import $, { removeData } from "jquery";
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event){

    console.log("DOM loaded");
    
    //wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function(e){
        
        //Load lenis
        console.log(document.querySelector('body'))
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        //Load swiper js
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

    }, false);
    
});


/** GSAP
 * const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
 * 
 * 
 */