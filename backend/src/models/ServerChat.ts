export class ServerChat {
	constructor(
		public message: string,
		public user: string,
		public timestamp: Date = new Date()
	){}
}