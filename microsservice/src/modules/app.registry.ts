import { CONTROLLER_REGISTRY } from './application/controller/controller.registry';
import { MIDDLEWARE_REGISTRY } from './application/middleware/middleware.registry';
import { REPOSITORY_REGISTRY } from './application/repository/repository.registry';
import { ROUTER_REGISTRY } from './application/router/router.registry';
import { SERVICE_REGISTRY } from './application/service/service.registry';
import { USE_CASE_REGISTRY } from './application/use_case/use_case.registry';
import { INFRA_REGISTRY } from './infra/infra.registry';

export const MODULE = {
  INFRA: INFRA_REGISTRY,
  ROUTER: ROUTER_REGISTRY,
  MIIDLEWARE: MIDDLEWARE_REGISTRY,
  REPOSITORY: REPOSITORY_REGISTRY,
  USE_CASE: USE_CASE_REGISTRY,
  SERVICE: SERVICE_REGISTRY,
  CONTROLLER: CONTROLLER_REGISTRY,
};
