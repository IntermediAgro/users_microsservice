import { injectable } from 'inversify';
import { PrismaUserRepositorySupport } from 'modules/application/support/repository/prisma/user/repository.support';
import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';

@injectable()
export class CreateUserUseCase extends PrismaUserRepositorySupport {
  async execute(user: ICreateUserDTO) {
    return this._repository.create(user);
  }
}
