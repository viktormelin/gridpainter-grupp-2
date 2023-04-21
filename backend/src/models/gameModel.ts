import { ObjectId, Schema, model, Document } from 'mongoose';


type PlayerType = {
  name: String,
  color: String,
}

export interface IGame extends Document {

  players: [PlayerType];
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

const Game = model('Games', gameSchema);

export default Game;
