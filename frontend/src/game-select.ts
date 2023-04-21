

export function createGameSelectHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <div id="buttonsContainer">
      <button id="savedPicsBtn">Saved pictures</button>
 
      <button id="highscoresBtn">Highscores</button>
 
      <button id="playBtn">Play</button>
 
      <button id="freePaintBtn">Free Painting</button> 
   </div>`;
}