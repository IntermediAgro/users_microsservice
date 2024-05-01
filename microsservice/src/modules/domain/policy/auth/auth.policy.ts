import { IAuthUserDTO } from '../../dto/user/auth.dto';
import { IAuthOutputDTO } from '../../dto/user/output/auth.dto';

export interface IAuthPolicy {
  execute(DTO: IAuthUserDTO): Promise<IAuthOutputDTO>;
}
