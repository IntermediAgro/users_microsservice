import { APP_ROUTER } from './app.router';
import { ROUTER_MODULE } from './router.module';
import { ROUTER_REGISTRY } from './router.registry';

export const ROUTER_FACTORY = {
  APP: () => ROUTER_MODULE.get<typeof APP_ROUTER>(ROUTER_REGISTRY.APP),
};
