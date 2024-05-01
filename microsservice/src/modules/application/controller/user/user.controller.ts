import { inject, injectable } from 'inversify';
import { UserService } from '../../../../modules/application/service/user/user.service';
import { ICreateUserDTO } from '../../../../modules/domain/dto/user/create.dto';
import { MODULE } from '../../../../modules/app.registry';
import { IFindUserByEmailDTO } from '../../../../modules/domain/dto/user/find/by/email.dto';

@injectable()
export class UserController {
  constructor(
    @inject(MODULE.SERVICE.USER)
    private readonly _service: UserService,
  ) {}

  async create(user: ICreateUserDTO) {
    return (await this._service.create(user)).toDTO();
  }

  async findByEmail(user: IFindUserByEmailDTO) {
    return (await this._service.findByEmail(user)).toDTO();
  }
}
