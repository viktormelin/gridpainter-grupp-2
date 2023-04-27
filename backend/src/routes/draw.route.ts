import { Router } from 'express';
import { reset, showTemplate } from '../controllers/draw.controller';
const drawRouter = Router();

drawRouter.post('/reset', reset);
drawRouter.post('/showTemplate', showTemplate);

export default drawRouter;
