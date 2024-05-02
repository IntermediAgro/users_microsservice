import { CONFIG_REGISTRY } from './config/config.registry';
import { ENGINE_REGISTRY } from './engine/engine.registry';
import { SERVER_REGISTRY } from './server/server.registry';

export const INFRA_REGISTRY = {
  SERVER: SERVER_REGISTRY,
  EMGINE: ENGINE_REGISTRY,
  CONFIG: CONFIG_REGISTRY,
};
