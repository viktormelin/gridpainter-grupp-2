import { createGameSelectHTML } from "./game-select";

export function createHighscoresHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <div id="h2Background">
      <h2>HighScores</h2>
    </div>
    <div class="highscoresList">
      <ol>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ol>
    </div>
    <button id="backToMenuBtn">Back to menu</button>`;

    const backToMenuBtn = document.getElementById('backToMenuBtn');

    backToMenuBtn?.addEventListener('click', function () {
        createGameSelectHTML();
    })
}