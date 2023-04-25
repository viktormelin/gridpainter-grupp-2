import { ClientChat } from "../models/ClientChat";
import { ServerChat } from "../models/ServerChat";

export default function handleChatEvent(arg: ClientChat, io: any) {
	console.log('received chat event');
	
	io.emit('chat', new ServerChat(arg.message, arg.user, "green"))
}
