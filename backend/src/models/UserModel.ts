import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = model('Users', userSchema);

export default Users;
