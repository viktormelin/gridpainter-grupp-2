export class GameSession {
	currentState: string[] = [];

	constructor (size: number) {
		this.reset(size);
	}

	placeColor(place: number, color: string) {
		this.currentState[place] = color;
	}

	reset(size: number) {
		for (let i = 0; i < size * size; i++) {
			this.currentState[i] = "#FFFFFF";			
		}
	}
	
}