import {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
import {Game, playerType } from '../models/gameModel';
import { createImageToGame } from './image.controller';


type player = {
    _id: String,
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
        _id: req.body._id,
        name: req.body.name,
        color: giveColour()
    }
    Game.findOne().deleteOne();
    var result = await Game.findOne({ full: false });
    
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
        
        
        result.full = true;
        result.active = true;
        await result.save()
            .then(async savedDoc => {
                savedDoc.gameImage = await createImageToGame(savedDoc);
                res.send(savedDoc);
                
            })
        
    }
    
    
    
})