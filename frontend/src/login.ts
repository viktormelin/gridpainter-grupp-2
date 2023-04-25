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
              
              <button id="submitUsername">Login</button>
          </form>
          `;

    const submitBtn = document.getElementById('submitUsername') as HTMLButtonElement;
    const usernameInput = document.getElementById('inputUsername') as HTMLInputElement;
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const user: IUser = {
        _id: '643fdc00090040ae33fb8ff2',
        username: usernameInput.value,
      };

      sessionStorage.setItem('user', JSON.stringify(user));
      createGameSelectHTML();
    });
  }
}
