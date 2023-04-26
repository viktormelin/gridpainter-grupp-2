import { ClientChatMessage } from "../models/ClientChatMessage";
import { ServerChatMessage } from "../models/ServerChatMessage";

export default function handleChatEvent(arg: ClientChatMessage, io: any) {
	console.log('received chat event');
	
	io.emit('chat', new ServerChatMessage(arg.message, arg.user, "green"))
}
