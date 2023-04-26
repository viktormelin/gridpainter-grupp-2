import { createChatHTML } from "./chat";
import { createGameHTML } from "./draw";
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

   highscoresBtn?.addEventListener('click', function () {
      createHighscoresHTML();
   })

   
   savedPicsBtn?.addEventListener('click', function () {
      createSavedPicsHTML();
   }) 
   
   const playBtn = document.getElementById('playBtn');
   const freePaintBtn = document.getElementById('freePaintBtn');


   playBtn?.addEventListener('click', function () {

   })

   freePaintBtn?.addEventListener('click', function () {
	let main = document.querySelector('main') as HTMLElement;
	main.innerHTML = "";
	createGameHTML();
	createChatHTML();
   })
}