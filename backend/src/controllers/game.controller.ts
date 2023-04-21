import {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
import Game, { IGame } from '../models/gameModel';
import { ObjectId } from 'mongoose';

type player = {
    name: String,  
    color: String
};


export const createGame = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    //const testGame = new Game({ players: ["Tester", "Tester2", "Tester3"]})
    //await testGame.save();
    const player: player = {
        name: "req.body.name",
        color: "#000000"
    }

    var result = await Game.findOne({ active: true });
    
    if (!result) {
        result = new Game({});
    }
    if (result.players.length < 3) { 
        result.players.push(player);
        console.log("Adding player");
        await result.save()
            .then(savedDoc => {
            console.log(savedDoc);
            res.send(savedDoc);
        })
        
        
    } else {
        result.players.push(player);
        console.log("Adding player");
        //Start game
        console.log("Playercount: " + result.players.length + ", starting game");
        result.active = false;
        await result.save()
            .then(savedDoc => {
            console.log(savedDoc);
            res.send(savedDoc);
        })
        
    }
    
    
    
    /*
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
*/
}

)