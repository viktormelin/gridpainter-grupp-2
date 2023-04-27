import { createChatHTML } from "./chat";
import { createGameHTML } from "./draw";
import { joinGame } from "./game";
import { createHighscoresHTML } from "./highscores";
import { createSavedPicsHTML } from "./saved-pics";

export function createGameSelectHTML() {
	const main = document.querySelector('main') as HTMLElement;
	main.classList.remove('game-container');

	const pageHeader = document.getElementById('header');
	pageHeader?.classList.remove('smallHeader');

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
	const freePaintBtn = document.getElementById('freePaintBtn');

	highscoresBtn?.addEventListener('click', function () {
		createHighscoresHTML();
	})
	playBtn?.addEventListener('click', function () {
		joinGame();
	})

	savedPicsBtn?.addEventListener('click', function () {
		createSavedPicsHTML();
	})

	freePaintBtn?.addEventListener('click', function () {
		createChatHTML();
		createGameHTML(true);
	})
}