const express = require('express');
const router = express.Router();
import {Request, Response} from 'express';
import Image from '../models/ImageModel';


router.post('/create', function(req: Request, res: Response) {
   
    const colors = req.body.colors;

    if (colors.length > 1 && colors.length < 5) {
        console.log(colors.length);

        type squareType = {
            id: number,
            squares: {[key: number]: string}          
          };

        const image: squareType = {
            id: 1,
            squares: {}
        }

        for (let i:number = 0; i <225; i++) {
            const colorAmount = req.body.colors.length;
            const colorIndex = Math.floor(Math.random()*colorAmount);         
            
            image.squares[i] = req.body.colors[colorIndex]            
        }         
        
        
    }

    
    res.send(req.body);
    
});












module.exports = router;

