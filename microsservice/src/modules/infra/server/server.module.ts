import { Container } from 'inversify';
import { SERVER_REGISTRY } from './server.registry';
import { EXPRESS_SERVER } from './http/express.server';
import { CORS } from './http/cors';
import { BODY_PARSER } from './http/body.parser';

export const SERVER_MODULE = new Container({ autoBindInjectable: true });

SERVER_MODULE.bind(SERVER_REGISTRY.HTTP).toConstantValue(EXPRESS_SERVER);
SERVER_MODULE.bind(SERVER_REGISTRY.CORS).toConstantValue(CORS);
SERVER_MODULE.bind(SERVER_REGISTRY.PARSER.BODY).toConstantValue(BODY_PARSER);
