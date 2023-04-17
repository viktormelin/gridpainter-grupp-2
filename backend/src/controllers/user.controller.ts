import asyncHandler from 'express-async-handler';

export const templateUser = asyncHandler(async (req, res) => {
  res.status(200).send('From user controller');

  if ("I'm a error") {
    res.status(500);
    throw new Error('Sending error message');
  }
});
