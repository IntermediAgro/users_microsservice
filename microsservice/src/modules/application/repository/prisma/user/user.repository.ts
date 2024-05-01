import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { ICreateUserDTO } from 'modules/domain/dto/user/create.dto';
import { IFindUserByEmail } from 'modules/domain/dto/user/find/by/email.dto';
import { User } from 'modules/domain/entity/user.entity';
import { IUserRepository } from 'modules/domain/repository/user.repository';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    @inject(MODULE.INFRA.EMGINE.PRISMA)
    private _client: PrismaClient,
  ) {}

  create(user: ICreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findByEmail(user: IFindUserByEmail): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
