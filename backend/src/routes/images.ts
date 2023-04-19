const express = require('express');
const router = express.Router();
import {Request, Response} from 'express';
import Image from '../models/ImageModel';

router.post('/create', async function(req: Request, res: Response) {   
    const colors: string[] = req.body.colors;

    const isStrings = (arr: string[]) => arr.every(i => typeof i === 'string')
    console.log(isStrings(colors));
    

    if (isStrings(colors) && colors.length > 1 && colors.length < 5) {
        type squareType = {
            squares: {[key: number]: string}          
          };

        const image: squareType = {
            squares: {}
        }

        for (let i:number = 0; i <225; i++) {
            const colorAmount = req.body.colors.length;
            const colorIndex = Math.floor(Math.random()*colorAmount);         
            image.squares[i] = req.body.colors[colorIndex]            
        }         
        
    const newImage = new Image(image);

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












module.exports = router;

