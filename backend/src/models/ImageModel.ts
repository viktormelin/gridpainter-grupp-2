import { Schema, model } from 'mongoose';

const imageSchema = new Schema(
    
    {
        id: {
            type: Number,
            required: true
        },
        image: {
            id: {
                type: String,
                required: true
            }
        }

    }

);

const Image = model('Users', imageSchema);

export default Image;
