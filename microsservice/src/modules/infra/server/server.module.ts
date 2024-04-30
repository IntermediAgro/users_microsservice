import { Container } from 'inversify';
import { SERVER_REGISTRY } from './server.registry';
import { EXPRESS_SERVER } from './http/express.server';

export const SERVER_MODULE = new Container({ autoBindInjectable: true });

SERVER_MODULE.bind(SERVER_REGISTRY.HTTP).toConstantValue(EXPRESS_SERVER);
