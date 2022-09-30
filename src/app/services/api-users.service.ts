import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  login(): void{
    // const url = `${this.apiUrl}/auth/log-in`
    // this.http.post(  )
    console.log('Estas dentro')
  }


}
