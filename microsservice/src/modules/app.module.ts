import 'reflect-metadata';

import { Container } from 'inversify';
import { INFRA_MODULE } from './infra/infra.module';
import { ROUTER_MODULE } from './application/router/router.module';
import { MIDDLEWARE_MODULE } from './application/middleware/middleware.module';
import { REPOSITORY_MODULE } from './application/repository/repository.module';

const _MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(
  _MODULE,
  INFRA_MODULE,
  ROUTER_MODULE,
  MIDDLEWARE_MODULE,
  REPOSITORY_MODULE,
);
