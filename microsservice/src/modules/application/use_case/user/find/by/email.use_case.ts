import { injectable } from 'inversify';
import { PrismaUserRepositorySupport } from 'modules/application/support/repository/prisma/user/repository.support';
import { IFindUserByEmailDTO } from 'modules/domain/dto/user/find/by/email.dto';

@injectable()
export class FindUserByEmailUseCase extends PrismaUserRepositorySupport {
  async execute(user: IFindUserByEmailDTO) {
    return this._repository.findByEmail(user);
  }
}
