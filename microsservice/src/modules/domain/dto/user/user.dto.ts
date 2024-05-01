export interface IUserDTO {
  name: string;
  email: string;
  password: string;
  token?: string | null;
  user_type: 'CLIENT' | 'FARMER' | 'SUPPLIER';
}
