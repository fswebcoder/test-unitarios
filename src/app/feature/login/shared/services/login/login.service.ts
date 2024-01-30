import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@core/routing/endpoints';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/login.model';
import { IResponseLogin } from '../../interfaces/response-login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private httpClient:HttpClient){ }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(params: LoginRequest) {
    return this.httpClient.post<IResponseLogin>(ENDPOINTS.login, params).toPromise();
  }
}
