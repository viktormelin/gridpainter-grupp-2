import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { createGameSelectHTML } from './game-select';
import { fetchImages } from './utils/image';
import { Image } from './models/IImage';

const generateSwiperImage = (image: Image) => {
  const swiperContainer = document.createElement('table');
  swiperContainer.className = 'board';
  swiperContainer.id = image._id;

  for (let i = 0; i < 15; i++) {
    const boardTr = document.createElement('tr');
    boardTr.className = 'new-tr';

    for (let j = 0; j < 15; j++) {
      const id = 15 * i + j;

      const boardTd = document.createElement('td');
      boardTd.className = 'small-td';
      boardTd.id = String(id);
      boardTd.style.backgroundColor = image.squares[id];

      boardTr.appendChild(boardTd);
    }

    swiperContainer.appendChild(boardTr);
  }

  return swiperContainer;
};

export async function createSavedPicsHTML() {
  const main = document.querySelector('main') as HTMLElement;

  const swiperImages = async () => {
    const images = await fetchImages();
    const latestImages = document.createElement('div');
    latestImages.className = 'swiper-wrapper';

    for (let i = 0; i < images.length; i++) {
      const swiperTemp = document.createElement('div');
      swiperTemp.className = 'swiper-slide';

      const swiperText = document.createElement('p');
      swiperText.style.textAlign = 'center';
      swiperText.style.color = '#000';
      swiperText.innerText = `Image ${i + 1} / ${images.length}`;

      const swiperImage = generateSwiperImage(images[i]);
      swiperTemp.appendChild(swiperImage);
      swiperTemp.appendChild(swiperText);
      latestImages.appendChild(swiperTemp);

      swiperImage.addEventListener('click', () => {
        console.log(`Image ${images[i]._id} was clicked`);
        // DRAW IMAGE WITHOUT PAINTING OPTIONS?
      });
    }

    return latestImages;
  };

  main.innerHTML = `
    <div id="h2Background">
      <h2>Saved pictures</h2>
    </div>
    <div class="swiper">
  

      <div class="swiper-pagination"></div>
 
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
    <button id="backToMenuBtn">Back to menu</button>`;

  const swiperWrapper = document.querySelector('.swiper');
  swiperWrapper?.appendChild(await swiperImages());

  const backToMenuBtn = document.getElementById('backToMenuBtn');

  backToMenuBtn?.addEventListener('click', function () {
    createGameSelectHTML();
  });

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
