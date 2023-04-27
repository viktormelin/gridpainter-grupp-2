import { ClientChatMessage } from "../models/ClientChatMessage";
import { ServerChatMessage } from "../models/ServerChatMessage";

export default function handleChatEvent(arg: ClientChatMessage, io: any) {
	io.emit('chat', new ServerChatMessage(arg.message, arg.user, "lightgreen"))
}
