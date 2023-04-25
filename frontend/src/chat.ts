import { io } from 'socket.io-client';
import { IServerChat } from './models/IServerChat';
import { fetchUser } from './utils/user';
const socket = io('https://gridpainter-grupp-2-839p7.ondigitalocean.app');
//const socket = io("http://localhost:3000");

export async function createChatHTML() {
  const user = await fetchUser();
  let main = document.querySelector('main') as HTMLElement;

  main.innerHTML = /*html*/ `
		<div id="chatContainer" class="chat-container">
			<div id="chatOutput" class ="chat-output"></div>
			<input type="text" id="chatInput" class="chat-input">
			<button id="sendMessageBtn">Send Chat</button>
		</div>
	`;

  let sendMessageBtn = document.getElementById('sendMessageBtn') as HTMLButtonElement;
  let chatInput = document.getElementById('chatInput') as HTMLInputElement;

  sendMessageBtn.addEventListener('click', e => {
    e.preventDefault();
    socket.emit('chat', { message: chatInput.value, user: user?.username });
    chatInput.value = '';
  });
}

socket.on('chat', (arg: IServerChat) => {
  let chatOutput = document.getElementById('chatOutput') as HTMLDivElement;

  chatOutput.innerHTML += /*html*/ `
		<span style="color: ${arg.color}">[${arg.user}]: </span><span>${arg.message}</span>
		<br>
	`;
});
