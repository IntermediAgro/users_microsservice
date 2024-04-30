export interface IUserDTO {
  name: string;
  email: string;
  password: string;
  token?: string;
  user_type: 'CLIENT' | 'FARMER' | 'SUPPLIER';
}
