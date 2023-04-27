import { ClientStateMessage } from "../models/ClientStateMessage";
import { Game, gameClass } from "../models/gameModel";
import { ObjectId } from 'mongoose';

export async function handleGameStart(game: gameClass, io: any) {
    var gameInfo = await Game.findOne({ _id: game._id })
        console.log(gameInfo);
    io.emit("gameEvent", gameInfo);
}

let doneUsers: string[] = []

export function handleGameState(msg: ClientStateMessage, io: any) {
    /*if (doneUsers.includes(msg.userId)) {
        return;
    } */

    doneUsers.push(msg.userId);
    console.log(doneUsers);
    if (doneUsers.length === 4) {
        io.emit("gameState", "done");
        doneUsers = [];
    }
    
}

