import { PrismaClient } from '@prisma/client';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { JWT_ENGINE } from './jwt/jwt.engine';

export const ENGINE_FACTORY = {
  PRISMA: ENGINE_MODULE.get<PrismaClient>(ENGINE_REGISTRY.PRISMA),
  JWT: ENGINE_MODULE.get<typeof JWT_ENGINE>(ENGINE_REGISTRY.JWT),
};
