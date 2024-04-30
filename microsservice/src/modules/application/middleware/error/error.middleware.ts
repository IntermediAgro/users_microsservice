import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { AppError } from '../../error/app.error';

export const ERROR_MIDDLEWARE: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError)
    res.status(error.status).json(error.toStruct());

  res.status(500).json({
    name: error.name,
    status: 500,
    message: error.message,
    error: true,
  });
};
