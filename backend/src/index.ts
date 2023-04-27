import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route';
import imageRouter from './routes/image.route';
import { Socket, Server } from "socket.io";
import { ClientChatMessage } from './models/ClientChatMessage';
import { ClientDrawMessage } from './models/ClientDrawMessage';
import handleChatEvent from './services/chat.service';
import { handleDrawEvent } from './services/draw.service';
import * as http from 'http';
import connectDB from './config/database';
import gameRouter from './routes/game.route';
import { gameClass } from './models/gameModel';
import { handleGameStart } from './services/game.service';
import drawRouter from './routes/draw.route';


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/ping', (req, res) => {
	res.send('Hello World');
});

app.use('/api/user', userRouter);
app.use('/api/images', imageRouter);
app.use('/api/draw', drawRouter);
app.use('/api/game', gameRouter);

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	socket.on("chat", (arg: ClientChatMessage) => {
		handleChatEvent(arg, io);
	});

	socket.on("gameEvent", (game: gameClass) => {
		handleGameStart(game, io);
	});

	socket.on("draw", (arg: ClientDrawMessage) => {
		handleDrawEvent(arg, io);
	});
	app.locals.socketIo = io;
});


server.listen(PORT, () => {
	console.log(`Socket started on port ${PORT}`);
	connectDB();
});
