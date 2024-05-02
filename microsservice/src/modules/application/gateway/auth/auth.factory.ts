import { IAuthGateway } from '../../../domain/gateway/auth/auth.gateway';
import { GATEWAY_AUTH_MODULE } from './auth.module';
import { GATEWAY_AUTH_REGISTRY } from './auth.registry';

export const GATEWAY_AUTH_FACTORY = {
  JWT: () => GATEWAY_AUTH_MODULE.get<IAuthGateway>(GATEWAY_AUTH_REGISTRY.JWT),
};
