import { Router } from 'express';
const imageRouter = Router();

import { createImage } from '../controllers/image.controller';
import { getAllImages } from '../controllers/getAllImages.controller';
import { addImage } from '../controllers/addImage.controller';

imageRouter.post('/create', createImage) 
imageRouter.get('/getAll', getAllImages) 
imageRouter.post('/add', addImage) 

export default imageRouter;
