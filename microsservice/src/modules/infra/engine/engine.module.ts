import { Container } from 'inversify';
import { ENGINE_REGISTRY } from './engine.registry';
import { PRISMA_ENGINE } from './prisma/prisma.engine';

export const ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ENGINE_MODULE.bind(ENGINE_REGISTRY.PRISMA).toConstantValue(PRISMA_ENGINE);
