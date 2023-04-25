import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { createGameSelectHTML } from "./game-select";


export function createSavedPicsHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <div id="h2Background">
      <h2>Saved pictures</h2>
    </div>
    <div class="swiper">
  
      <div class="swiper-wrapper">
    
        <div class="swiper-slide">
          <img src="paint-logo.png" alt="Image 1">
        </div>
        <div class="swiper-slide">
          <img src="bild.jpg" alt="Image 2">
        </div>        
        <div class="swiper-slide">
          <img src="icon.png" alt="Image 3">
        </div>
        ...
     </div>

      <div class="swiper-pagination"></div>
 
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
    <button id="backToMenuBtn">Back to menu</button>`;

    const backToMenuBtn = document.getElementById('backToMenuBtn');

    backToMenuBtn?.addEventListener('click', function () {
        createGameSelectHTML();
    })

    setupSwiper();
}


function setupSwiper() {
    const mySwiper = new Swiper('.swiper', {
        speed: 300,
        spaceBetween: 50,
        slidesPerView: 1,
        
        direction: 'horizontal',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    prevButton?.addEventListener('click', () => {
        mySwiper.slidePrev();
    });
    
    nextButton?.addEventListener('click', () => {
        mySwiper.slideNext();
    });
    

}


