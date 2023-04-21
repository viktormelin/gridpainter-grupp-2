import { ObjectId, Schema, model, Document } from 'mongoose';


export type playerType = {
  name?: String,
  color?: String,
}

export interface IGame {

  players: playerType[];
  active: Boolean;


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
      default: true
    }
  },
  { timestamps: true }
);

export const Game = model('Games', gameSchema);


