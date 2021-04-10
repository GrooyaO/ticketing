import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Smth went wrong', err);

  res.status(400).send({
    message: 'Smth went wrong',
  });
};
