import { Container } from 'inversify';
import { CONFIG_MODULE } from 'modules/infra/config/config.module';
import { ENGINE_MODULE } from 'modules/infra/engine/engine.module';
import { GATEWAY_AUTH_REGISTRY } from './auth.registry';
import { JWTAuthGateway } from './jwt/auth.gateway';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const GATEWAY_AUTH_MODULE = Container.merge(
  MODULE,
  ENGINE_MODULE,
  CONFIG_MODULE,
);

GATEWAY_AUTH_MODULE.bind(GATEWAY_AUTH_REGISTRY.JWT).to(JWTAuthGateway);
