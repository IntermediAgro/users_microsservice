import { Container } from 'inversify';
import { CreateUserUseCase } from './user/create.use_case';
import { FindUserByEmailUseCase } from './user/find/by/email.use_case';
import { USE_CASE_REGISTRY } from './use_case.registry';

export const USE_CASE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.USER.CREATE).to(CreateUserUseCase);
USE_CASE_MODULE.bind(USE_CASE_REGISTRY.USER.FIND.BY.EMAIL).to(
  FindUserByEmailUseCase,
);
