import { CONTROLLER_FACTORY } from './application/controller/controller.factory';
import { GATEWAY_FACTORY } from './application/gateway/gateway.factory';
import { MIDDLEWARE_FACTORY } from './application/middleware/middleware.factory';
import { REPOSITORY_FACTORY } from './application/repository/repository.factory';
import { ROUTER_FACTORY } from './application/router/router.factory';
import { SERVICE_FACTORY } from './application/service/service.factory';
import { USE_CASE_FACTORY } from './application/use_case/use_case.factory';
import { INFRA_FACTORY } from './infra/inra.factory';

export const MODULES = {
  INFRA: INFRA_FACTORY,
  ROUTER: ROUTER_FACTORY,
  MIIDLEWARE: MIDDLEWARE_FACTORY,
  REPOSITORY: REPOSITORY_FACTORY,
  USE_CASE: USE_CASE_FACTORY,
  SERCVICE: SERVICE_FACTORY,
  CONTROLLER: CONTROLLER_FACTORY,
  GATEWAY: GATEWAY_FACTORY,
};
