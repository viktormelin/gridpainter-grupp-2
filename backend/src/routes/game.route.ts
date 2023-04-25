import { Router } from 'express';
import { createGame } from '../controllers/game.controller';
const gameRouter = Router();


gameRouter.post('/create', createGame) 

export default gameRouter;
