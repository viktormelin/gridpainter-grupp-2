import { io } from "socket.io-client";
const socket = io("http://localhost:3000");


// sendBtn.addEventListener("click", () => {
// 	socket.emit("chat", { message: 'hello', user: "Name" });
// });

socket.on("chat", (arg) => {
	console.log("chat", arg);
	let chatOutput = document.getElementById('chatOutput') as HTMLDivElement;

	chatOutput.innerHTML += /*html*/ `
		<span>[${arg.user}]: </span><span>${arg.message}</span>
		<br>
	`;
});

export function createChatHTML() {
	let main = document.querySelector('main') as HTMLElement;

	main.innerHTML = /*html*/ `
		<div id="chatContainer">
			<div id="chatOutput" class ="chat-output"></div>
			<input type="text" id="chatInput">
			<button id="sendMessageBtn">Send Chat</button>
		</div>
	`;

	let sendMessageBtn = document.getElementById('sendMessageBtn') as HTMLButtonElement;
	let chatInput = document.getElementById('chatInput') as HTMLInputElement;

	sendMessageBtn.addEventListener('click', (e) => {
		e.preventDefault();

		socket.emit("chat", { message: chatInput.value, user: "User" });

		chatInput.value = "";
	});
}