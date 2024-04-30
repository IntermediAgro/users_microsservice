import { ICreateUserDTO } from '../dto/user/create.dto';
import { IFindUserByEmail } from '../dto/user/find/by/email.dto';
import { User } from '../entity/user.entity';

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(user: IFindUserByEmail): Promise<User>;
}
