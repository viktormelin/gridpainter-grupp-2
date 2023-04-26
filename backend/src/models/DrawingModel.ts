import { Schema, model } from 'mongoose';

const drawingSchema = new Schema({
  users: {
    type: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        color: {
          type: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  image_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Drawing = model('drawings', drawingSchema);

export default Drawing;
