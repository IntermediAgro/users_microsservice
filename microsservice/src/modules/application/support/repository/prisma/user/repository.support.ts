import { injectable } from 'inversify';
import { MODULE } from '../../../../../app.registry';
import { injectRepository } from '../../../../repository/repository.module';
import { IUserRepository } from '../../../../../domain/repository/user.repository';

@injectable()
export abstract class PrismaUserRepositorySupport {
  @injectRepository(MODULE.REPOSITORY.PRISMA.USER)
  protected readonly _repository!: IUserRepository;
}
