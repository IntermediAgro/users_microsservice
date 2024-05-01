import { IDecodeAuthOutputDTO } from 'modules/domain/dto/auth/output/decode.dto';
import { IAuthUserDTO } from '../../dto/user/auth.dto';
import { IAuthOutputDTO } from '../../dto/user/output/auth.dto';
import { IDecodeAuthDTO } from 'modules/domain/dto/auth/decode.dto';

export interface IAuthGateway {
  encode(DTO: IAuthUserDTO): Promise<IAuthOutputDTO>;
  decode(DTO: IDecodeAuthDTO): Promise<IDecodeAuthOutputDTO>;
}
