import { joinGame } from "./game";
import { createHighscoresHTML } from "./highscores";

export function createGameSelectHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <div class="menuContainer">
      <button id="savedPicsBtn">Saved pictures</button>
 
      <button id="highscoresBtn">Highscores</button>
 
      <button id="playBtn">Play</button>
 
      <button id="freePaintBtn">Free Painting</button> 
   </div>`;

   const highscoresBtn = document.getElementById('highscoresBtn');

   highscoresBtn?.addEventListener('click', function () {
      createHighscoresHTML();
   })
   const playBtn = document.getElementById('playBtn');

   playBtn?.addEventListener('click', function () {
      joinGame();
   })

   // Preparement for the menu alternatives

   /*
   const savedPicsBtn = document.getElementById('savedPicsBtn');
   
   const playBtn = document.getElementById('playBtn');
   const freePaintBtn = document.getElementById('freePaintBtn');

   savedPicsBtn?.addEventListener('click', function () {

   })


   playBtn?.addEventListener('click', function () {

   })

   freePaintBtn?.addEventListener('click', function () {

   })
   */
}