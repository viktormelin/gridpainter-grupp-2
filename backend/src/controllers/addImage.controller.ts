import {Request, Response} from 'express';
import Image from '../models/ImageModel';
import asyncHandler from 'express-async-handler';

type squareType = {
    squares: {[key: number]: string}          
  };

export const addImage = asyncHandler(async (req: Request, res: Response): Promise<void> => {

    const image: squareType = {
        squares: req.body.squares
    }

    const validateData = (image: squareType) :Boolean => {
        let count = 0

        for (const key in image.squares) {
            if (typeof image.squares[key] !== 'string') {
                return false
            }
            count++
        } 
        if (count === 225) {
            return true
        } else {
            return false
        }
    }

    if (validateData(image)) {
       
    const newImage = await Image.create(image);

    try {
        const response = await newImage.save();            
        res.status(200).json({message: 'image saved in database', id: response._id})

    } catch (error) {
        res.status(500).json({message: 'internal server error', error: error})
    }  

    }   else {
        res.status(401).json({message: 'invalid data', body: req.body})
    }
})