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

  //Methods what connect to the API Hiberus
  registerService(name: string, surname: string, email: string, password: string): Observable<any> {
    // debugger
    const registerUrl = `${this.apiUrl}/auth/sign-up`;
    return this.http.post(registerUrl, {
      name,
      surname,
      email,
      password
    }, httpOptions);
  }

  loginService(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/auth/log-in`;
    return this.http.post(loginUrl, {
      email,
      password
    }, httpOptions);
  }
  //So far
}
