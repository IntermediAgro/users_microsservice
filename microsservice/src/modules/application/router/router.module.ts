import { Container } from 'inversify';
import { ROUTER_REGISTRY } from './router.registry';
import { APP_ROUTER, router } from './app.router';

export const ROUTER_MODULE = new Container({ autoBindInjectable: true });

ROUTER_MODULE.bind(ROUTER_REGISTRY.APP).toConstantValue(APP_ROUTER);
