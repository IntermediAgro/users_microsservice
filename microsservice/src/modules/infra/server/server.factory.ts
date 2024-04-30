import { SERVER_MODULE } from './server.module';
import { Express } from 'express';
import { SERVER_REGISTRY } from './server.registry';

export const SERVER_FACTORY = {
  HTTP: () => SERVER_MODULE.get<Express>(SERVER_REGISTRY.HTTP),
};
