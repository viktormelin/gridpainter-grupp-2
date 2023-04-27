import { io } from 'socket.io-client';
import { IGame, gameClass } from './models/iGame';
import { IUser } from './models/IUser';
import { fetchUser } from './utils/user';
import { createChatHTML } from './chat';
import { createGameHTML } from './draw';

const socket = io(`${import.meta.env.VITE_BASE_URI}`);
const createGame = `${import.meta.env.VITE_BASE_URI}/api/game/create`;

async function joinGameService(arg: IUser | null): Promise<IGame> {
    
    if (!arg) {
        throw "error, no valid user";
    }
    const user: IUser = {
        _id: arg._id,
        username: arg.username
    }
    return fetch(createGame, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then (res => res.json())
        .then(res => {return res})
}


socket.on('gameEvent', (arg: IGame) => {   
    const pageHeader = document.getElementById('header');
    const gameAssemblyContainer = document.querySelector('.gameAssemblyContainer')
    if (gameAssemblyContainer && arg) {
        gameAssemblyContainer.innerHTML = `
        <p>
            Waiting for players... ${arg.players.length}/4
        </p>
        `
        if (arg.full) {
            gameAssemblyContainer.innerHTML = `
        <p>
            Players found! Starting game...
        </p>
        `
		gameAssemblyContainer.classList.remove('gameAssemblyContainer');
		gameAssemblyContainer.innerHTML = "";
		createChatHTML();
		createGameHTML(false);
        pageHeader?.classList.add('smallHeader');
        }
    }
})


export function gameAssemblyHTML(): void {
    const container = document.createElement('div');
    container.classList.add('gameAssemblyContainer');
    document.body.appendChild(container);
}

export async function joinGame(): Promise<void> {
    const game: IGame = await joinGameService(await fetchUser());
    const gameSocket = new gameClass(game._id);
    console.log(gameSocket);
    socket.emit('gameEvent', gameSocket);
    
    gameAssemblyHTML();
}

