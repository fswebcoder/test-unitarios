import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@core/routing/endpoints';
import { CreateUsersDTO } from '../../models/create-model';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private httpClient: HttpClient){

  }
  getUsers() {
    return this.httpClient.get<any>(`${ENDPOINTS.allUsers}?page=${2}`).toPromise();
  }

  createUser(param: CreateUsersDTO) {
    return this.httpClient.post<any>(`${ENDPOINTS.create}`, param).toPromise();
  }

  deleteUserForIndex(index: number) {
    return this.httpClient.delete<any>(`${ENDPOINTS.deleteUser}${index}`).toPromise();

  }
}
