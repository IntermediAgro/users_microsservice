import { IDecodeAuthOutputDTO } from 'modules/domain/dto/auth/output/decode.dto';
import { IDecodeAuthDTO } from 'modules/domain/dto/auth/decode.dto';
import { IEncodeAuthDTO } from 'modules/domain/dto/auth/encode.dto';
import { IEncodeAuthOutputDTO } from 'modules/domain/dto/auth/output/encode.dto';

export interface IAuthGateway {
  generateToken(DTO: IEncodeAuthDTO): IEncodeAuthOutputDTO;
  validateToken(DTO: IDecodeAuthDTO): IDecodeAuthOutputDTO;
}
