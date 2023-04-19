import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route';
import { Socket } from "socket.io";
import { ClientChat } from './models/ClientChat';
import handleChatEvent from './services/chat.service';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/user', userRouter);

const io = socketIo(server, {
	cors: {
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	socket.on("chat", (arg: ClientChat) => {
		handleChatEvent(arg, io);
	});
});

server.listen(3000, () => {
	console.log(`Socket started on port 3000`);
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
