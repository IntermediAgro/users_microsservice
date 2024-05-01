import { injectable } from 'inversify';
import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';
import { IFindUserByEmailDTO } from 'modules/domain/dto/user/find/by/email.dto';
import { ISetUserTokenDTO } from 'modules/domain/dto/user/set/token.dto';
import { User } from 'modules/domain/entity/user.entity';
import { IUserService } from 'modules/domain/service/user/user.service';

@injectable()
export class UserService implements IUserService {
  create(user: ICreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findByEmail(user: IFindUserByEmailDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  setToken(user: ISetUserTokenDTO): void {
    throw new Error('Method not implemented.');
  }
}
