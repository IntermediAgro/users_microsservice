import { USE_CASE_MODULE } from './use_case.module';
import { USE_CASE_REGISTRY } from './use_case.registry';
import { CreateUserUseCase } from './user/create.use_case';
import { FindUserByEmailUseCase } from './user/find/by/email.use_case';

export const USE_CASE_FACTORY = {
  USER: {
    CREATE: () =>
      USE_CASE_MODULE.get<CreateUserUseCase>(USE_CASE_REGISTRY.USER.CREATE),
    FIND: {
      BY: {
        EMAIL: () =>
          USE_CASE_MODULE.get<FindUserByEmailUseCase>(
            USE_CASE_REGISTRY.USER.FIND.BY.EMAIL,
          ),
      },
    },
  },
};
