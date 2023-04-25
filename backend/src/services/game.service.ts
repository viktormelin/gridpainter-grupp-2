import { Game, gameClass } from "../models/gameModel";
import { ObjectId } from 'mongoose';

export async function handleGameStart(game: gameClass, io: any) {

    
    var gameInfo = await Game.findOne({ _id: game._id })
        console.log(gameInfo);
    io.emit("gameEvent", gameInfo);
}