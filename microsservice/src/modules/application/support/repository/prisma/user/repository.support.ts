import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { IUserRepository } from 'modules/domain/repository/user.repository';

@injectable()
export abstract class PrismaUserRepositorySupport {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    protected readonly _repository: IUserRepository,
  ) {}
}
