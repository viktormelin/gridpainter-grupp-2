import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route';
import imageRouter from './routes/image.route';
import { Socket, Server } from "socket.io";
import { ClientChat } from './models/ClientChat';
import handleChatEvent from './services/chat.service';
import * as http from 'http';
import connectDB from './config/database';
import gameRouter from './routes/game.route';
import { gameClass } from './models/gameModel';
import { handleGameStart } from './services/game.service';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/user', userRouter);
app.use('/api/images', imageRouter);

app.use('/api/game', gameRouter);

const io = new Server(server, {
	cors: {
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	socket.on("chat", (arg: ClientChat) => {
		handleChatEvent(arg, io);
	});
	socket.on("gameEvent", (game: gameClass) => {
		handleGameStart(game, io);
	});
});

server.listen(3000, () => {
  console.log(`Socket started on port 3000`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
