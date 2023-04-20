//const express = require('express');
//const router = express.Router();
import { Router } from 'express';
const imageRouter = Router();
import {Request, Response} from 'express';
import Image from '../models/ImageModel';
import { createImage } from '../controllers/image.controller';

imageRouter.post('/create', async function(req: Request, res: Response) {   
    const colors: string[] = req.body.colors;

    const isStrings = (arr: string[]) => arr.every(i => typeof i === 'string')
    console.log(isStrings(colors));
    

    if (isStrings(colors) && colors.length > 1 && colors.length < 5) {
       
    const image = createImage(req.body.colors);

    const newImage = await Image.create(image);

    //const newImage = await Image.create(image) if (newImage) { res.status(201) } else { res.status(500) throw new Error('fel') }

    try {
        const response = await newImage.save();            
        res.status(200).json({message: 'image saved in database', id: response._id})

    } catch (error) {
        res.status(500).json({message: 'internal server error', error: error})
    }  

    }   else {
        res.status(401).json({message: 'invalid data', body: req.body})
    }

});

export default imageRouter;

