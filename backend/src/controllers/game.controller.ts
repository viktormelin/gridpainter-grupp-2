import {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
import {Game, IGame, playerType } from '../models/gameModel';
import { ObjectId } from 'mongoose';
import { type } from 'os';

type player = {
    name: String,  
    color: String
};


const colors = [
    "#00FFFF",
    "#808080",
    "#000080",
    "#C0C0C0",
    "#000000",
    "#008000",
    "#808000",
    "#008080",
    "#0000FF",
    "#00FF00",
    "#800080",
    "#FFFFFF",
    "#FF00FF",
    "#800000",
    "#FF0000",
    "#FFFF00",
]


const giveColour = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    console.log(colorIndex);
    
    return colors[colorIndex];
}


export const createGame = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const player: playerType = {
        name: "req.body.name",
        color: giveColour()
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
                res.send(savedDoc);
            })
        
    }
    
    
    
})