import { CONTROLLER_MODULE } from './controller.module';
import { CONTROLLER_REGISTRY } from './controller.registry';
import { UserController } from './user/user.controller';

export const CONTROLLER_FACTORY = {
  USER: () => CONTROLLER_MODULE.get<UserController>(CONTROLLER_REGISTRY.USER),
};
