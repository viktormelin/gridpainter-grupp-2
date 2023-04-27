import { io } from "socket.io-client";
import { IServerDrawMessage } from "./models/IServerDrawMessage";
import { reset } from "./utils/draw";
//const socket = io("http://localhost:5000");
const socket = io("https://gridpainter-grupp-2-839p7.ondigitalocean.app");

const boardSizeX = 15;
const boardSizeY = 15;

let main = document.querySelector("main") as HTMLElement;

export function createGameHTML() {
	let user = JSON.parse(sessionStorage.getItem('user') || "{}");

	let boardTable = document.createElement("table");
	boardTable.className = "board";
	boardTable.id = "bigBoard";

	for (let i = 0; i < boardSizeY; i++) {
		let boardTr = document.createElement("tr");
		boardTr.className = "new-tr";

		for (let j = 0; j < boardSizeX; j++) {
			let boardTd = document.createElement("td");
			boardTd.className = "new-td";
			boardTd.id = JSON.stringify(15 * i + j);
			boardTr.appendChild(boardTd);

			boardTd.addEventListener('click', () => {				
				socket.emit("draw", { place: boardTd.id, userId: user?._id, gameId: ""});
			})			
		}
		boardTable.appendChild(boardTr);
	}
	
	let resetDrawBtn = document.createElement('button');
	resetDrawBtn.id = "resetDrawBtn";
	resetDrawBtn.innerText = "Reset painting";

	let doneBtn = document.createElement('button');
	doneBtn.id = "doneBtn";
	doneBtn.innerText = "Done";

	main.innerHTML= ` `

	main.append(resetDrawBtn, boardTable, doneBtn);

	resetDrawBtn.addEventListener('click', async () => {
		await reset();
	})
}

socket.on("draw", (msg: IServerDrawMessage) => {
	let allSquares = document.getElementsByClassName("new-td") as HTMLCollectionOf<HTMLTableCellElement>;
	
	for (let i = 0; i < msg.session.length; i++) {
		allSquares[i].style.background = msg.session[i];
	}
});

