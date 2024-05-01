import 'reflect-metadata';

import { Container } from 'inversify';
import { INFRA_MODULE } from './infra/infra.module';
import { ROUTER_MODULE } from './application/router/router.module';
import { MIDDLEWARE_MODULE } from './application/middleware/middleware.module';
import { REPOSITORY_MODULE } from './application/repository/repository.module';
import { USE_CASE_MODULE } from './application/use_case/use_case.module';
import { SERVICE_MODULE } from './application/service/service.module';

const _MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(
  _MODULE,
  INFRA_MODULE,
  ROUTER_MODULE,
  MIDDLEWARE_MODULE,
  REPOSITORY_MODULE,
  USE_CASE_MODULE,
  SERVICE_MODULE,
);
