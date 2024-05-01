import { PrismaClient } from '@prisma/client';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';

export const ENGINE_FACTORY = {
  PRISMA: ENGINE_MODULE.get<PrismaClient>(ENGINE_REGISTRY.PRISMA),
};
