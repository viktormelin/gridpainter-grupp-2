import { Router } from 'express';
const imageRouter = Router();

import { createImage } from '../controllers/image.controller';

imageRouter.post('/create', createImage) 

export default imageRouter;
