import { injectable } from 'inversify';
import { PrismaUserRepositorySupport } from '../../../../support/repository/prisma/user/repository.support';
import { IFindUserByEmailDTO } from '../../../../../domain/dto/user/find/by/email.dto';

@injectable()
export class FindUserByEmailUseCase extends PrismaUserRepositorySupport {
  async execute(user: IFindUserByEmailDTO) {
    return this._repository.findByEmail(user);
  }
}
