import { Router } from 'express';
import { addUser, getUsers } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/add', addUser);
userRouter.post('/get', getUsers);

export default userRouter;
