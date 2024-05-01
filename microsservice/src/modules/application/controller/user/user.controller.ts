import { injectable } from 'inversify';
import { UserService } from '../../../../modules/application/service/user/user.service';
import { ICreateUserDTO } from '../../../../modules/domain/dto/user/create.dto';

@injectable()
export class UserController {
  constructor(private readonly _service: UserService) {}

  async create(user: ICreateUserDTO) {
    return (await this._service.create(user)).toDTO();
  }

  async findByEmail(user: ICreateUserDTO) {
    return (await this._service.findByEmail(user)).toDTO();
  }
}
