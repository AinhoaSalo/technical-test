import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://51.38.51.187:5050/api/v1'

  constructor(private http: HttpClient) { }

  getUsers(token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        })
    };
    
    const urlGetUsers = `${this.apiUrl}/users`;
    return this.http.get(urlGetUsers, httpOptions)
    
  }
}
