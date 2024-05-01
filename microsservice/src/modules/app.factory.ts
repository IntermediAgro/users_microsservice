import { MIDDLEWARE_FACTORY } from './application/middleware/middleware.factory';
import { REPOSITORY_FACTORY } from './application/repository/repository.factory';
import { ROUTER_FACTORY } from './application/router/router.factory';
import { INFRA_FACTORY } from './infra/inra.factory';

export const MODULES = {
  INFRA: INFRA_FACTORY,
  ROUTER: ROUTER_FACTORY,
  MIIDLEWARE: MIDDLEWARE_FACTORY,
  REPOSITORY: REPOSITORY_FACTORY,
};
