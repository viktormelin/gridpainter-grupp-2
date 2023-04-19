import {Schema, model } from 'mongoose';

const imageSchema = new Schema(
    
    {
        squares: {
                type: Schema.Types.Mixed,
                required: true
        }
    }
);

const Image = model('Image', imageSchema);

export default Image;
