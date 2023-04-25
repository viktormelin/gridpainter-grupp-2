export class gameClass {
  constructor(
    public gameID: string,
  ){}
}

export type playerType = {
  _id?: string,
  name?: string,
  color?: string,
}

export interface IGame {

  players: playerType[];
  active: Boolean;
  full: Boolean;
  gameImage: Object;

}