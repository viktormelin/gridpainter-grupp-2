import { Router } from 'express';
const imageRouter = Router();

import { createImage } from '../controllers/image.controller';
import { getAllImages } from '../controllers/getAllImages.controller';

imageRouter.post('/create', createImage) 
imageRouter.get('/getAll', getAllImages) 

export default imageRouter;
