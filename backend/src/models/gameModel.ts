import { ObjectId, Schema, model, Document } from 'mongoose';

export interface IGame extends Document {

  players: [String];
  active: Boolean;


  }
const gameSchema = new Schema<IGame>(
  {
    players: {
      type: [String],
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  { timestamps: true }
);

const Game = model('Games', gameSchema);

export default Game;
