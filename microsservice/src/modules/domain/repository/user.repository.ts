import { ICreateUserDTO } from '../dto/user/create.dto';
import { IFindUserByEmailDTO } from '../dto/user/find/by/email.dto';
import { ISetUserTokenDTO } from '../dto/user/set/token.dto';
import { User } from '../entity/user.entity';

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(user: IFindUserByEmailDTO): Promise<User>;
  setToken(user: ISetUserTokenDTO): void;
}
