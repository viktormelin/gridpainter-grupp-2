import {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
import Game, { IGame } from '../models/gameModel';
import { ObjectId } from 'mongoose';

type player = {
    name: String,  
    color: String
};


export const createGame = asyncHandler(async (req: Request, res: Response): Promise<void> => {
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
    
    
    
})