import { Container } from 'inversify';
import { GATEWAY_AUTH_MODULE } from './auth/auth.module';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const GATEWAY_MODULE = Container.merge(MODULE, GATEWAY_AUTH_MODULE);
