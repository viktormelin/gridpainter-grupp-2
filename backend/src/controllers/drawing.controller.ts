import { Request, Response } from 'express';
import Drawing from '../models/DrawingModel';
import asyncHandler from 'express-async-handler';

export const addDrawing = asyncHandler(async (req: Request, res: Response): Promise<void> => {
 
  if (req.body) {    
    const newDrawing = await Drawing.create(req.body);
      
    try {
      const response = await newDrawing.save();
      res.status(200).json({ message: 'drawing saved in database', drawing: response });
    } catch (error) {
      res.status(500).json({ message: 'internal server error', error: error });
    }
  } else {
    res.status(401).json({ message: 'invalid data', body: req.body });
  }
});
