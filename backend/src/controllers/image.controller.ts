import {Request, Response} from 'express';
import Image from '../models/ImageModel';
import asyncHandler from 'express-async-handler';

type squareType = {
    squares: {[key: number]: string}          
  };

export const createImage = asyncHandler(async (req, res): Promise<void> => {

    const image: squareType = {
        squares: {}
    }

    for (let i:number = 0; i <225; i++) {
        const colorAmount = req.body.colors.length;
        const colorIndex = Math.floor(Math.random()*colorAmount);         
        image.squares[i] = req.body.colors[colorIndex]            
    }         

    const colors: string[] = req.body.colors;

    const isStrings = (arr: string[]) => arr.every(i => typeof i === 'string')

    if (isStrings(colors) && colors.length > 1 && colors.length < 5) {
       
    const newImage = await Image.create(image);

    try {
        const response = await newImage.save();            
        res.status(200).json({message: 'image saved in database', image: {
            id: response._id,
            squares: response.squares
        }})

    } catch (error) {
        res.status(500).json({message: 'internal server error', error: error})
    }  

    }   else {
        res.status(401).json({message: 'invalid data', body: req.body})
    }

}
)