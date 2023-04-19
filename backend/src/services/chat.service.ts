import { ClientChat } from "../models/ClientChat";
import { ServerChat } from "../models/ServerChat";

export default function handleChatEvent(arg: ClientChat, io: any) {
	io.emit('chat', new ServerChat(arg.message, arg.user))
}
