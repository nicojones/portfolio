import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~env/environment';
import { Observable } from 'rxjs';
import { LoginData, LoginResponse } from '~login/shared/interfaces';


@Injectable()
export class LoginService {

  constructor (
    private http: HttpClient
  ) {}

  public doLogin (data: LoginData): Observable<LoginResponse> {
    const body = new FormData();
    body.append('username', data.username);
    body.append('password', data.password);

    return this.http.post(`${ environment.url }/login/auth`, body);
  }
}
