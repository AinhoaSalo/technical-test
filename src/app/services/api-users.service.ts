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

  // register(): void{
  //   const url = `${this.apiUrl}/auth/sign-up`
  //   this.http.post(  )
  // }

  loginService(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth/log-in`
    return this.http.post(url, {
      email,
      password
    }, httpOptions)

  }


}
