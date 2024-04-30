import { IUserDTO } from '../dto/user/user.dto';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _type: 'CLIENT' | 'FARMER' | 'SUPPLIER',
    private _token?: string,
  ) {}

  public toDTO(): IUserDTO {
    return {
      name: this._name,
      email: this._email,
      password: this._password,
      user_type: this._type,
      token: this._token,
    };
  }
}
