import { Container } from 'inversify';
import { SERVER_MODULE } from './server/server.module';

const MODULE = new Container({ autoBindInjectable: true });

export const INFRA_MODULE = Container.merge(MODULE, SERVER_MODULE);
