import { ENGINE_FACTORY } from './engine/engine.factory';
import { SERVER_FACTORY } from './server/server.factory';

export const INFRA_FACTORY = {
  SERVER: SERVER_FACTORY,
  ENGINE: ENGINE_FACTORY,
};
