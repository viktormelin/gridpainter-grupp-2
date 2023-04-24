import {Request, Response} from 'express';
import Image from '../models/ImageModel';
import asyncHandler from 'express-async-handler';
import { IGame } from '../models/gameModel';

type squareType = {
    squares: {[key: number]: string}          
  };

export const createImage = asyncHandler(async (req: Request, res: Response): Promise<void> => {

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

export const createImageToGame = async (game: IGame) => {

    const image: squareType = {
        squares: {}
    }
    const colorList: string[] = [];
    for (var player of game.players) {
        colorList.push(player.color!);
    }
    for (let i: number = 0; i < 225; i++) {
        const colorAmount = colorList.length;
        const colorIndex = Math.floor(Math.random() * colorAmount);
        image.squares[i] = colorList[colorIndex]
    }
    
    
    const colors: string[] = colorList;

    const isStrings = (arr: string[]) => arr.every(i => typeof i === 'string')

    if (isStrings(colors) && colors.length > 1 && colors.length < 5) {
       
        const newImage = await Image.create(image);

        try {
            const response = await newImage.save();
            return {
                message: 'image saved in database',
                image: {
                    id: response._id,
                    squares: response.squares
                }
            }

        } catch (error) {
            return { message: 'internal server error', error: error }
        }

    } else {
        return { message: 'invalid data', body: game }
    }

}
