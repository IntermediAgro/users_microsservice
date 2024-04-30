import { Container } from 'inversify';
import { ERROR_MIDDLEWARE } from './error/error.middleware';
import { MIDDLEWARE_REGISTRY } from './middleware.registry';
import { LOGGER_MIDDLEWARE } from './log/logger.middleware';

export const MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.ERROR).toConstantValue(
  ERROR_MIDDLEWARE,
);

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.LOGGER.APP).toConstantValue(
  LOGGER_MIDDLEWARE,
);
