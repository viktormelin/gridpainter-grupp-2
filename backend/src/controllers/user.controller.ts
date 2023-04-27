import asyncHandler from 'express-async-handler';
import User from '../models/UserModel';
import { colors } from '../services/draw.service';

let i = 0;

export const addUser = asyncHandler(async (req, res) => {	
  try {
    const userExists = await User.find({ username: req.body.username })

	const color = colors[i];
	i = (i + 1) % colors.length;

    
    if (userExists.length === 0) {
      const savedUser = await User.create({ username: req.body.username, color: color })
      res.status(200).json(savedUser)
    } else {
      res.status(401).json({message: 'username already exists'})
    }
  } catch (error) {
    res.status(500).json({message: 'internal server error', error: error})
  }  
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const usersExists = await User.find({_id: {$in:req.body.users}})

    if (usersExists.length > 0 && usersExists.length === req.body.users.length) {
      res.status(200).json(usersExists)
    } else {
      res.status(401).json({message: 'one or more users are not found'})
    }  
  } catch (error) {
    res.status(500).json({message: 'internal server error', error: error})
  }  
});