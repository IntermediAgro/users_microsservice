import { Container } from 'inversify';
import { ENGINE_REGISTRY } from './engine.registry';
import { PRISMA_ENGINE } from './database/prisma/prisma.engine';
import { JWT_ENGINE } from './auth/jwt/jwt.engine';

export const ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ENGINE_MODULE.bind(ENGINE_REGISTRY.PRISMA).toConstantValue(PRISMA_ENGINE);
ENGINE_MODULE.bind(ENGINE_REGISTRY.JWT).toConstantValue(JWT_ENGINE);

ENGINE_MODULE.bind(ENGINE_REGISTRY.DATABASE.PRISMA).toConstantValue(
  PRISMA_ENGINE,
);
ENGINE_MODULE.bind(ENGINE_REGISTRY.AUTH.JWT).toConstantValue(JWT_ENGINE);
