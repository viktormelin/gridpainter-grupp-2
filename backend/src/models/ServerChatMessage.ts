export class ServerChatMessage {
	constructor(
		public message: string,
		public user: string,
		public color: string,
		public timestamp: Date = new Date()
	){}
}