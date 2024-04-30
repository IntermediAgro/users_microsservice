import { Container } from 'inversify';
import { ERROR_MIDDLEWARE } from './error/error.middleware';
import { MIDDLEWARE_REGISTRY } from './middleware.registry';

export const MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.ERROR).toConstantValue(
  ERROR_MIDDLEWARE,
);
