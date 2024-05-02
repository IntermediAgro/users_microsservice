import { JWT } from '../../../../../@types/auth/jwt/jwt.type';
import { inject, injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { IDecodeAuthDTO } from 'modules/domain/dto/auth/decode.dto';
import { IEncodeAuthDTO } from 'modules/domain/dto/auth/encode.dto';
import { IDecodeAuthOutputDTO } from 'modules/domain/dto/auth/output/decode.dto';
import { IEncodeAuthOutputDTO } from 'modules/domain/dto/auth/output/encode.dto';
import { IAuthGateway } from 'modules/domain/gateway/auth/auth.gateway';

@injectable()
export class JWTAuthGateway implements IAuthGateway {
  constructor(
    @inject(MODULE.INFRA.EMGINE.AUTH.JWT)
    private readonly _client: JWT,
  ) {}

  encode({ plain_text }: IEncodeAuthDTO): IEncodeAuthOutputDTO {
    return {
      token: this._client.sign(plain_text, ''),
    };
  }
  decode(DTO: IDecodeAuthDTO): IDecodeAuthOutputDTO {
    throw new Error('Method not implemented.');
  }
}
