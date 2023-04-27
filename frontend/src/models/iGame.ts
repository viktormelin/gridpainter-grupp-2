export class gameClass {
  constructor(
    public _id: string,
  ){}
}

export type playerType = {
  _id?: string,
  name?: string,
  color?: string,
}

export interface IGame {
  _id: string;
  players: playerType[];
  active: Boolean;
  full: Boolean;
  gameImage: Object;

}