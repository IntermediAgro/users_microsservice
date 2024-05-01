import { Container } from 'inversify';
import { REPOSITORY_PRISMA_MODULE } from './prisma/prisma.module';

const MODULE = new Container({ autoBindInjectable: true });

export const REPOSITORY_MODULE = Container.merge(
  MODULE,
  REPOSITORY_PRISMA_MODULE,
);
