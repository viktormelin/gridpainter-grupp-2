import { createGameSelectHTML } from "./game-select";


export function createSavedPicsHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <div id="h2Background">
      <h2>Saved pictures</h2>
    </div>
    <div class="savedPics">
      <div class="slideShow"></div>
      <button id="prevBtn">Prev</button>
      <button id="nextBtn">Next</button>
    </div>
    <button id="backToMenuBtn">Back to menu</button>`;

    const backToMenuBtn = document.getElementById('backToMenuBtn');

    backToMenuBtn?.addEventListener('click', function () {
        createGameSelectHTML();
    })
}

