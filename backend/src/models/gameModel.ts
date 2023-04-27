import { ObjectId, Schema, model, Document } from 'mongoose';


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

  players: playerType[];
  active: Boolean;
  full: Boolean;
  gameImage: Object;

}
const gameSchema = new Schema<IGame>(
  {
    players: {
      type: [Object],
      required: true,
      name: {
        type: [String],
        required: true,
      },
      color: {
        type: String,
        default: '#000000'
      }
    },
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    full: {
      type: Boolean,
      required: true,
      default: false
    },
    gameImage: {
      type: Object,
      default: null
    }
  },
  { timestamps: true }
);

export const Game = model('Games', gameSchema);


