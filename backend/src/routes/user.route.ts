import { Router } from 'express';
import { templateUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', templateUser);

export default userRouter;
