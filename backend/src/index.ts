import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route';

dotenv.config();

const imagesRouter = require('./routes/images');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/user', userRouter);
app.use('/api/images', imagesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
