export class GameSession {
	currentState: string[] = [];

	constructor (size: number) {
		for (let i = 0; i < size * size; i++) {
			this.currentState[i] = "#FFFFFF";			
		}
	}

	placeColor(place: number, color: string) {
		this.currentState[place] = color;
	}
	
}