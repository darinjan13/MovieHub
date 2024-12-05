import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Configure Swiper to use modules
    modules: [Navigation],
    slidesPerView: 10,
    slidesPerGroup: 5,
    spaceBetween: 10,
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 640px
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 10,
            slidesPerGroup: 10,
        }
    },

    on: {
        init: function () {
            adjustMargins(this);  // Pass the swiper instance to adjustMargins
        },
        reachBeginning: function () {
            adjustMargins(this);  // Pass the swiper instance when reaching the last slide
        },
        reachEnd: function () {
            adjustMargins(this);  // Pass the swiper instance when reaching the last slide
        }
    }
});

// Adjust margins dynamically
function adjustMargins(swiper) {
    const slides = document.querySelectorAll('.swiper-slide');
    const totalSlides = slides.length;

    if (totalSlides > 1) {
        slides[0].style.marginLeft = '10px';
    }

    // Add margin to the last slide if it's the last one
    if (swiper.isEnd) {
        slides[totalSlides - 1].style.marginRight = '10px';
        slides[0].style.marginLeft = '-10px';
    }
}
