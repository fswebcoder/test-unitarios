import { CreateUsersDTO } from "../models/create-model"

export interface ICreateUser {
  name:string
  job:string
  createParams():CreateUsersDTO
  createUser(params: CreateUsersDTO):void
}
