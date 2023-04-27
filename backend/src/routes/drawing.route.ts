import { Router } from 'express';
import { addDrawing, getDrawing } from '../controllers/drawing.controller';

const drawingRouter = Router();

drawingRouter.post('/add', addDrawing);
drawingRouter.post('/get', getDrawing);

export default drawingRouter;
