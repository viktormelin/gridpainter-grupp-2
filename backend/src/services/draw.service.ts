import { ClientDrawMessage } from "../models/ClientDrawMessage";
import { GameSession } from "../models/GameSession";
import { ServerDrawMessage } from "../models/ServerDrawMessage";

let gameSession = new GameSession(15);

export default function handleDrawEvent(msg: ClientDrawMessage, io: any) {
	console.log(msg);
	
	gameSession.placeColor(msg.place, "#808080")
	io.emit('draw', new ServerDrawMessage(gameSession.currentState))
}
