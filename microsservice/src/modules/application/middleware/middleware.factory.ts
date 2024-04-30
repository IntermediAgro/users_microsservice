import { ErrorRequestHandler } from 'express';
import { MIDDLEWARE_MODULE } from './middleware.module';
import { MIDDLEWARE_REGISTRY } from './middleware.registry';

export const MIDDLEWARE_FACTORY = {
  ERROR: () =>
    MIDDLEWARE_MODULE.get<ErrorRequestHandler>(MIDDLEWARE_REGISTRY.ERROR),
};
