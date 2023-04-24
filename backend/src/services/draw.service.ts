import { ClientDraw } from "../models/ClientDraw";
import { ServerDraw } from "../models/ServerDraw";

export default function handleDrawEvent(arg: ClientDraw, io: any) {
	io.emit('draw', new ServerDraw(arg.id, "red"))
}
