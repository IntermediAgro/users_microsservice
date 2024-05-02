import { Container } from 'inversify';
import { SERVER_MODULE } from './server/server.module';
import { ENGINE_MODULE } from './engine/engine.module';
import { CONFIG_MODULE } from './config/config.module';

const MODULE = new Container({ autoBindInjectable: true });

export const INFRA_MODULE = Container.merge(
  MODULE,
  SERVER_MODULE,
  ENGINE_MODULE,
  CONFIG_MODULE,
);
