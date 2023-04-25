import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route';
import imageRouter from './routes/image.route';
import { Socket, Server } from "socket.io";
import { ClientChat } from './models/ClientChat';
import { ClientDraw } from './models/ClientDraw';
import handleChatEvent from './services/chat.service';
import handleDrawEvent from './services/draw.service';
import * as http from 'http';
import connectDB from './config/database';


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

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	socket.on("chat", (arg: ClientChat) => {
		handleChatEvent(arg, io);
	});

	socket.on("draw", (arg: ClientDraw) => {
		handleDrawEvent(arg, io);
	});
});

server.listen(3000, () => {
  console.log(`Socket started on port 3000`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
