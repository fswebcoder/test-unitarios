import { ILoginRequest } from "../interfaces/login.interface";

export class LoginRequest implements Partial<ILoginRequest>{
  email: string;
  password: string;
}
