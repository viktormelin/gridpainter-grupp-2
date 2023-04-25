import { createGameSelectHTML } from './game-select';
import { IUser } from './models/IUser';

const isUserLoggedIn = () => {
  const data = sessionStorage.getItem('user');

  if (data) {
    return JSON.parse(data) as IUser;
  }

  return null;
};

export function createLoginHTML() {
  const user = isUserLoggedIn();

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

    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();

      inputError.innerText = '';

      if (usernameInput.value && usernameInput.value.length > 0) {
        const re = /^[a-zA-Z0-9\s_.-]*$/;
        if (re.test(usernameInput.value)) {
          const user: IUser = {
            _id: '643fdc00090040ae33fb8ff2',
            username: usernameInput.value,
          };

          sessionStorage.setItem('user', JSON.stringify(user));
          createGameSelectHTML();
        } else {
          inputError.innerText = 'Username contains invalid characters';
        }
      } else {
        inputError.innerText = 'No username specified';
      }
    });
  }
}
