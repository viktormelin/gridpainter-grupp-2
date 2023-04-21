import { io } from "socket.io-client";
import { IServerDraw } from "./models/IServerDraw";
const socket = io("http://localhost:3000");

const boardSizeX = 15;
const boardSizeY = 15;

export function createGameHTML() {
	let loggedInUser = sessionStorage.getItem('name');

	let boardTable = document.createElement("table")
	boardTable.className = "board";
	boardTable.id = "bigBoard"

	for (let i = 0; i < boardSizeY; i++) {
		let boardTr = document.createElement("tr")
		boardTr.className = "new-tr";

		for (let j = 0; j < boardSizeX; j++) {
			let boardTd = document.createElement("td")
			boardTd.className = "new-td";
			boardTd.id = JSON.stringify(i) + ":" + JSON.stringify(j);
			boardTr.appendChild(boardTd);

			boardTd.addEventListener('click', () => {
				socket.emit("draw", { id: boardTd.id, user: loggedInUser });
			})			
		}
		boardTable.appendChild(boardTr);
	}

	let main = document.querySelector("main") as HTMLElement;

	main.appendChild(boardTable);
}

socket.on("draw", (arg: IServerDraw) => {
	let boardTd = document.getElementById(arg.id) as HTMLTableCellElement;

	boardTd.style.background = arg.color;
});
