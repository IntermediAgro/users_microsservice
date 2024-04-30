import { NextFunction } from 'express';

export const TRY = (fn: Function, next: NextFunction) => {
  try {
    return fn();
  } catch (error) {
    next(error);
  }
};
