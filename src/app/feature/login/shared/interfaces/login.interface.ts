import { LoginRequest } from "../models/login.model"

export interface ILoginRequest {
  email: string,
  password: string
  login(data: ILoginRequest): void
  paramsByLogin():LoginRequest
}


