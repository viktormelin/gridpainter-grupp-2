import { io } from 'socket.io-client';
import { IServerChatMessage } from './models/IServerChatMessage';
import { fetchUser } from './utils/user';

const socket = io(`${import.meta.env.VITE_BASE_URI}`);

export async function createChatHTML() {
	const user = await fetchUser();

	let chatContainer = document.createElement("div");
	chatContainer.id = "chatContainer";
	chatContainer.className = "chat-container";

	let chatOutput = document.createElement("div");
	chatOutput.id = "chatOutput";
	chatOutput.className = "chat-output";

	let chatInput = document.createElement("input");
	chatInput.id = "chatInput";
	chatInput.className = "chat-input";
	chatInput.type = "text";

	let sendMessageBtn = document.createElement("button");
	sendMessageBtn.id = "sendMessageBtn";
	sendMessageBtn.innerText = "Send chat";

	chatContainer.append(chatOutput, chatInput, sendMessageBtn)

	let main = document.querySelector('main') as HTMLElement;
	main.appendChild(chatContainer);

	sendMessageBtn.addEventListener('click', e => {
		e.preventDefault();
		socket.emit('chat', { message: chatInput.value, user: user?.username });
		chatInput.value = '';
	});
}

socket.on('chat', (arg: IServerChatMessage) => {
	let chatOutput = document.getElementById('chatOutput') as HTMLDivElement;

	chatOutput.innerHTML += /*html*/ `
		<span style="color: ${arg.color}">[${arg.user}]: </span><span>${arg.message}</span>
		<br>
	`;
});
