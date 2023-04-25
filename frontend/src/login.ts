import { createGameSelectHTML } from './game-select';
import { fetchUser, loginUser } from './utils/user';

export async function createLoginHTML() {
  const user = await fetchUser();

  if (user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    createGameSelectHTML();
  } else {
    const main = document.querySelector('main') as HTMLElement;

    main.innerHTML = `
          <form class="loginForm">
              <input aria-label="name inputfield" type="text" id="inputUsername" placeholder="Enter name">
              <p id="inputError"></p>
              <button id="submitUsername">Login</button>
          </form>
          `;

    const submitBtn = document.getElementById('submitUsername') as HTMLButtonElement;
    const usernameInput = document.getElementById('inputUsername') as HTMLInputElement;
    const inputError = document.getElementById('inputError') as HTMLParagraphElement;

    submitBtn.addEventListener('click', async function (e) {
      e.preventDefault();

      inputError.innerText = '';

      if (usernameInput.value && usernameInput.value.length > 0) {
        const re = /^[a-zA-Z0-9\s_.-]*$/;
        if (re.test(usernameInput.value)) {
          const user = await loginUser(usernameInput.value);

          if (!user) {
            inputError.innerText = 'Try a different username';
          } else {
            sessionStorage.setItem('user', JSON.stringify(user));
            createGameSelectHTML();
          }
        } else {
          inputError.innerText = 'Username contains invalid characters';
        }
      } else {
        inputError.innerText = 'No username specified';
      }
    });
  }
}
