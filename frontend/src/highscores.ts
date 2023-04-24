import { createGameSelectHTML } from "./game-select";

export function createHighscoresHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <h2>Highscores</h2>
    <div id="highscoresList">
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