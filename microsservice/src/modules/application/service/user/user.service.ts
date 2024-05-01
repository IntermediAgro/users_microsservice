import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { CreateUserUseCase } from 'modules/application/use_case/user/create.use_case';
import { FindUserByEmailUseCase } from 'modules/application/use_case/user/find/by/email.use_case';
import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';
import { IFindUserByEmailDTO } from 'modules/domain/dto/user/find/by/email.dto';
import { User } from 'modules/domain/entity/user.entity';
import { IUserService } from 'modules/domain/service/user/user.service';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(MODULE.USE_CASE.USER.CREATE)
    private readonly _create: CreateUserUseCase,
    @inject(MODULE.USE_CASE.USER.FIND.BY.EMAIL)
    private readonly _findByEmail: FindUserByEmailUseCase,
  ) {}

  async create(user: ICreateUserDTO) {
    return await this._create.execute(user);
  }
  async findByEmail(user: IFindUserByEmailDTO) {
    return await this._findByEmail.execute(user);
  }
}
