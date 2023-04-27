export class ServerDrawMessage {
	constructor(
		public session: string[] = [],
		public userId: string | null
	){}
}