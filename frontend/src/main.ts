import { io } from 'socket.io-client';
import './style/style.scss'

let sendBtn = document.getElementById("sendBtn") as HTMLButtonElement;
const socket = io("http://localhost:3000");

socket.on("chat", (arg) => {
	console.log("chat", arg);
});

sendBtn.addEventListener("click", () => {
	socket.emit("chat", { message: 'hello', user: "Name" });
});