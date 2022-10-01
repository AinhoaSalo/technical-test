import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private apiUrl: string = 'http://51.38.51.187:5050/api/v1'

  constructor(private http: HttpClient) { }

  registerService(name: string, surname: string, email: string, password: string): Observable<any> {
    // debugger
    const urlRegister = `${this.apiUrl}/auth/sign-up`;
    return this.http.post(urlRegister, {
      name,
      surname,
      email,
      password
    }, httpOptions);
  }


  loginService(email: string, password: string): Observable<any> {
    const urlLogin = `${this.apiUrl}/auth/log-in`;
    return this.http.post(urlLogin, {
      email,
      password
    }, httpOptions);
  }




}
