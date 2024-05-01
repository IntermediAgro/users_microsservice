import { injectable } from 'inversify';
import { UserService } from 'modules/application/service/user/user.service';

@injectable()
export class UserController {
  constructor(private readonly _service: UserService) {}

  async create(user: any) {
    return await this._service.create(user);
  }

  async findByEmail(user: any) {
    return await this._service.findByEmail(user);
  }
}
