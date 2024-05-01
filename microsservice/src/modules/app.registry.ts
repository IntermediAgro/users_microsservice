import { MIDDLEWARE_REGISTRY } from './application/middleware/middleware.registry';
import { REPOSITORY_REGISTRY } from './application/repository/repository.registry';
import { ROUTER_REGISTRY } from './application/router/router.registry';
import { INFRA_REGISTRY } from './infra/infra.registry';

export const MODULE = {
  INFRA: INFRA_REGISTRY,
  ROUTER: ROUTER_REGISTRY,
  MIIDLEWARE: MIDDLEWARE_REGISTRY,
  REPOSITORY: REPOSITORY_REGISTRY,
};
