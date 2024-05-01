import { IUserRepository } from 'modules/domain/repository/user.repository';
import { REPOSITORY_PRISMA_MODULE } from './prisma.module';
import { REPOSITORY_PRISMA_REGISTRY } from './prisma.registry';

export const REPOSITORY_PRISMA_FACTORY = {
  USER: () =>
    REPOSITORY_PRISMA_MODULE.get<IUserRepository>(
      REPOSITORY_PRISMA_REGISTRY.USER,
    ),
};
