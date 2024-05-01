import { Container } from 'inversify';
import { ENGINE_MODULE } from 'modules/infra/engine/engine.module';
import { PrismaUserRepository } from './user/user.repository';
import { REPOSITORY_PRISMA_REGISTRY } from './prisma.registry';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const REPOSITORY_PRISMA_MODULE = Container.merge(MODULE, ENGINE_MODULE);

REPOSITORY_PRISMA_MODULE.bind(REPOSITORY_PRISMA_REGISTRY.USER).to(
  PrismaUserRepository,
);
