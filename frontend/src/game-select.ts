import { joinGame } from "./game";
import { createHighscoresHTML } from "./highscores";
import { createSavedPicsHTML } from "./saved-pics";

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
   const savedPicsBtn = document.getElementById('savedPicsBtn');
   const playBtn = document.getElementById('playBtn');

   highscoresBtn?.addEventListener('click', function () {
      createHighscoresHTML();
   })
   playBtn?.addEventListener('click', function () {
      joinGame();
   })
   
   savedPicsBtn?.addEventListener('click', function () {
      createSavedPicsHTML();
   })



   // Preparement for the menu alternatives

   /*
   
   
   const playBtn = document.getElementById('playBtn');
   const freePaintBtn = document.getElementById('freePaintBtn');


   playBtn?.addEventListener('click', function () {

   })

   freePaintBtn?.addEventListener('click', function () {

   })
   */
}