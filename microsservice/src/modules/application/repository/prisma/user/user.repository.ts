import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';
import { IFindUserByEmail } from 'modules/domain/dto/user/find/by/email.dto';
import { ISetUserTokenDTO } from 'modules/domain/dto/user/set/token.dto';
import { IUserDTO } from 'modules/domain/dto/user/user.dto';
import { User } from 'modules/domain/entity/user.entity';
import { IUserRepository } from 'modules/domain/repository/user.repository';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    @inject(MODULE.INFRA.EMGINE.PRISMA)
    private _client: PrismaClient,
  ) {}

  async create(user: ICreateUserDTO) {
    const result = await this._client.users.create({ data: user });
    return User.fromDTO(result as IUserDTO);
  }

  async findByEmail(user: IFindUserByEmail) {
    const result = await this._client.users.findUnique({ where: user });
    return User.fromDTO(result as IUserDTO);
  }

  async setToken(user: ISetUserTokenDTO) {
    await this._client.users.update({
      where: { id: user.id },
      data: { token: user.token },
    });
  }
}
