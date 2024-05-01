import { JWT } from '../../../../../@types/auth/jwt/jwt.type';
import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { IDecodeAuthDTO } from 'modules/domain/dto/auth/decode.dto';
import { IDecodeAuthOutputDTO } from 'modules/domain/dto/auth/output/decode.dto';
import { IAuthUserDTO } from 'modules/domain/dto/user/auth.dto';
import { IAuthOutputDTO } from 'modules/domain/dto/user/output/auth.dto';
import { IAuthGateway } from 'modules/domain/gateway/auth/auth.gateway';

@injectable()
export class JWTAuthGateway implements IAuthGateway {
  constructor(
    @inject(MODULE.INFRA.EMGINE.AUTH.JWT)
    private readonly _client: JWT,
  ) {}
  encode(DTO: IAuthUserDTO): Promise<IAuthOutputDTO> {
    throw new Error('Method not implemented.');
  }
  decode(DTO: IDecodeAuthDTO): Promise<IDecodeAuthOutputDTO> {
    throw new Error('Method not implemented.');
  }
}
