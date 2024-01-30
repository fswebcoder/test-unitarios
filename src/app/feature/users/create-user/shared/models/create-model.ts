import { ICreateUser } from "../interface/create.interface";

export class CreateUsersDTO implements Partial<ICreateUser> {
  name?: string;
  job?: string;
}
