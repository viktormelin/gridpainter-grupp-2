import { ClientDrawMessage } from "../models/ClientDrawMessage";
import { GameSession } from "../models/GameSession";
import { ServerDrawMessage } from "../models/ServerDrawMessage";
import User from "../models/UserModel";

let gameSession = new GameSession(15);

export async function handleDrawEvent(msg: ClientDrawMessage, io: any) {
	console.log('received draw event');
	console.log(msg);
	
	const user = await User.findOne({_id: msg.userId});
	console.log(user);
	
	if (user == null) {
		return;
	}
	
	gameSession.placeColor(msg.place, user.color);
	io.emit('draw', new ServerDrawMessage(gameSession.currentState))
}

export function resetDraw(io: any) {
	gameSession.reset(15);

	io.emit('draw', new ServerDrawMessage(gameSession.currentState))
}
