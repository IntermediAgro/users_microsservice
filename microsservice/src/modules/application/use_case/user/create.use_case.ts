import { injectable } from 'inversify';
import { PrismaUserRepositorySupport } from '../../support/repository/prisma/user/repository.support';
import { ICreateUserDTO } from '../../../domain/dto/user/create.dto';

@injectable()
export class CreateUserUseCase extends PrismaUserRepositorySupport {
  async execute(user: ICreateUserDTO) {
    return this._repository.create(user);
  }
}
