import { Router } from 'express';
import { addUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/add', addUser);

export default userRouter;
