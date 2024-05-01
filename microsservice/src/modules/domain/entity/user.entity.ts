import { IUserDTO } from '../dto/user/user.dto';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _user_type: 'CLIENT' | 'FARMER' | 'SUPPLIER',
    private _token?: string | null,
  ) {}

  toDTO(): IUserDTO {
    return {
      name: this._name,
      email: this._email,
      password: this._password,
      user_type: this._user_type,
      token: this._token,
    };
  }

  static fromDTO(DTO: IUserDTO) {
    return new User(
      DTO.name,
      DTO.email,
      DTO.password,
      DTO.user_type,
      DTO.token,
    );
  }
}
