

export function createLoginHTML() {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
    <form id="loginForm">
        <label>
            Name: 
            <input type="text" id="inputUsername">
        </label>
        <button id="submitUsername">play</button>
    </form>
    `;

    const submitBtn = document.getElementById('submitUsername') as HTMLButtonElement;
    const usernameInput = document.getElementById('inputUsername') as HTMLInputElement;
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        sessionStorage.setItem('name', usernameInput.value);
    })
}
