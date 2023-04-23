import { Game, gameClass } from "../models/gameModel";
import { ObjectId } from 'mongoose';

export async function handleGameStart(game: gameClass, io: any) {
    var gameInfo = await Game.findOne({ _id: game.gameID, active: true })
    io.emit("gameEvent", gameInfo);
}