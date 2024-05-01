import { SERVER_MODULE } from '../../../modules/infra/server/server.module';
import { CONTROLLER_REGISTRY } from './controller.registry';
import { UserController } from './user/user.controller';
import { Container } from 'inversify';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const CONTROLLER_MODULE = Container.merge(MODULE, SERVER_MODULE);

CONTROLLER_MODULE.bind(CONTROLLER_REGISTRY.USER).to(UserController);
