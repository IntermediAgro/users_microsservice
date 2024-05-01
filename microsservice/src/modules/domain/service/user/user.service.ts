import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';
import { User } from '../../entity/user.entity';
import { IFindUserByEmailDTO } from 'modules/domain/dto/user/find/by/email.dto';
import { ISetUserTokenDTO } from 'modules/domain/dto/user/set/token.dto';

export interface IUserService {
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(user: IFindUserByEmailDTO): Promise<User>;
  setToken(user: ISetUserTokenDTO): void;
}
