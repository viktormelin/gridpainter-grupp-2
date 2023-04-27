import { io } from "socket.io-client";
import { IServerDrawMessage } from "./models/IServerDrawMessage";
import { reset, showTemplate } from "./utils/draw";
const socket = io(`${import.meta.env.VITE_BASE_URI}`);

let ignoreUpdates = false;

const boardSizeX = 15;
const boardSizeY = 15;

let main = document.querySelector("main") as HTMLElement;

export function createGameHTML(freePaint: boolean) {
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
				if (ignoreUpdates) {
					return;
				}

				socket.emit("draw", { place: boardTd.id, userId: user?._id, gameId: "" });
			})
		}
		boardTable.appendChild(boardTr);
	}

	let resetDrawBtn = document.createElement('button');
	resetDrawBtn.id = "resetDrawBtn";
	resetDrawBtn.className = "reset-draw-btn";
	resetDrawBtn.innerText = "Reset painting";


	let doneBtn = document.createElement('button');
	doneBtn.id = "doneBtn";
	doneBtn.innerText = "Done";

	main.innerHTML= ` `

	resetDrawBtn.addEventListener('click', async () => {
		await reset();
	})

	main.append(resetDrawBtn, boardTable, doneBtn);

	if (!freePaint) {
		showTemplate(user._id);
	}
}

socket.on("draw", (msg: IServerDrawMessage) => {
	if (ignoreUpdates) {
		return;
	}

	let user = JSON.parse(sessionStorage.getItem('user') || "{}");

	if (msg.userId != null) {

		if (msg.userId == user._id) {
			ignoreUpdates = true;
			setTimeout(() => {
				ignoreUpdates = false;
			}, 9500);
		} else {
			return;
		}
	}

	let allSquares = document.getElementsByClassName("new-td") as HTMLCollectionOf<HTMLTableCellElement>;

	for (let i = 0; i < msg.session.length; i++) {
		allSquares[i].style.background = msg.session[i];
	}
});

