import { Container } from 'inversify';
import { REPOSITORY_PRISMA_MODULE } from './prisma/prisma.module';

import getDecorators from 'inversify-inject-decorators';

const MODULE = new Container({ autoBindInjectable: true });

export const REPOSITORY_MODULE = Container.merge(
  MODULE,
  REPOSITORY_PRISMA_MODULE,
);

export const { lazyInject: injectRepository } =
  getDecorators(REPOSITORY_MODULE);
