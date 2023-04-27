import { Router } from 'express';
import { reset } from '../controllers/draw.controller';
const drawRouter = Router();

drawRouter.post('/reset', reset);

export default drawRouter;
