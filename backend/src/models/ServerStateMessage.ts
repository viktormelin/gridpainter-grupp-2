export class ServerStateMessage {
    constructor(
        public userId: string,
        public state: string
    ) {}
}