import { Container } from 'inversify';
import { USE_CASE_MODULE } from '../use_case/use_case.module';
import { SERVICE_REGISTRY } from './service.registry';
import { UserService } from './user/user.service';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERVICE_MODULE = Container.merge(MODULE, USE_CASE_MODULE);

SERVICE_MODULE.bind(SERVICE_REGISTRY.USER).to(UserService);
