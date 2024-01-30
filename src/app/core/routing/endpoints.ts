import { environment } from "@environments/environment";

const API = `${environment.API}`;
export const ENDPOINTS = {
  login: `${API }login`,
  allUsers: `${API }users`,
  deleteUser: `${API }users/`,
  create: `${API }users`
}
