import { io } from 'socket.io-client';
import { IGame } from './models/iGame';
import { IUser } from './models/IUser';
import { fetchUser } from './utils/user';
const socket = io("https://gridpainter-grupp-2-839p7.ondigitalocean.app");
const createGame = "https://gridpainter-grupp-2-839p7.ondigitalocean.app/api/game/create";



async function joinGameService(user: IUser | null) {
    
    if (!user) {
        return null;
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
    const gameAssemblyContainer = document.querySelector('.gameAssemblyContainer')
    if (gameAssemblyContainer) {
        gameAssemblyContainer.innerHTML = `
        <p>
            Waiting for players... ${arg.players.length}/4
        </p>
        `
    }
})


export function gameAssemblyHTML(): void {
    const container = document.createElement('div');
    container.classList.add('gameAssemblyContainer');
    document.body.appendChild(container);
}

export function joinGame(): void {
    joinGameService(fetchUser());
    gameAssemblyHTML();
}