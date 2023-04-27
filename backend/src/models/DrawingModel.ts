import { Schema, model } from 'mongoose';

const drawingSchema = new Schema({
  users: {
    type: [
      new Schema (
        {
          user_id: {
            type: Schema.Types.ObjectId,
            required: true
          },
          color: {
            type: String,
            required: true
            },
        },
        {_id: false}
      )
    ],
  },

  image_id: {
      type: Schema.Types.ObjectId,
      required: true
  }
})

const Drawing = model('drawings', drawingSchema);

export default Drawing;
