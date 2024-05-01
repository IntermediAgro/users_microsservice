import { SERVICE_MODULE } from './service.module';
import { SERVICE_REGISTRY } from './service.registry';
import { UserService } from './user/user.service';

export const SERVICE_FACTORY = {
  USER: () => SERVICE_MODULE.get<UserService>(SERVICE_REGISTRY.USER),
};
