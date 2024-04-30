import { logger } from '../../../../../infra/logger.module';
import { ErrorRequestHandler } from 'express';

export const ERROR_LOGGER_MIDDLEWARE: ErrorRequestHandler = (
  err: Error,
  req,
  res,
  next,
) => {
  logger.error({ context: 'APP', message: err.message, error: err });
  next(err);
};
