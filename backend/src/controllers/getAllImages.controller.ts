import {Request, Response} from 'express';
import Image from '../models/ImageModel';
import asyncHandler from 'express-async-handler';

export const getAllImages = asyncHandler(async (req: Request, res: Response): Promise<void> => {  
    try {
        const allImages = await Image.find();       
        res.status(200).json(allImages);

    } catch (error) {
        res.status(500).json({message: 'internal server error', error: error})
    }  
})