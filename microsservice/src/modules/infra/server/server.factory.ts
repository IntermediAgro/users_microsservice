import { SERVER_MODULE } from './server.module';
import { Express } from 'express';
import { SERVER_REGISTRY } from './server.registry';
import { CORS } from './http/cors';
import { BODY_PARSER } from './http/body.parser';

export const SERVER_FACTORY = {
  HTTP: () => SERVER_MODULE.get<Express>(SERVER_REGISTRY.HTTP),
  CORS: () => SERVER_MODULE.get<typeof CORS>(SERVER_REGISTRY.CORS),
  PARSER: {
    BODY: () =>
      SERVER_MODULE.get<typeof BODY_PARSER>(SERVER_REGISTRY.PARSER.BODY),
  },
};
