import { IAuthUserDTO } from 'modules/domain/dto/user/auth.dto';
import { IAuthOutputDTO } from 'modules/domain/dto/user/output/auth.dto';

export interface IAuthService {
  login(DTO: IAuthUserDTO): Promise<IAuthOutputDTO>;
}
