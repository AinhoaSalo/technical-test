import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://51.38.51.187:5050/api/v1/users'

  constructor(private http: HttpClient) { }

  getUsers(token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        })
    };
    return this.http.get(this.apiUrl, httpOptions)
  }

  getUserMe(token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        })
    };
    const urlUserMe = `${this.apiUrl}/me`;
    return this.http.get(urlUserMe, httpOptions)
  }

  putUser(token: string, id: string, name: string, surname: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        })
    };
    const urlPutUsers = `${this.apiUrl}/${id}`;
    const dataUser = {
      "name": `${name}`,
      "surname": `${surname}`
    }
    return this.http.put(urlPutUsers, dataUser, httpOptions)
  }

  deleteUsers(token: string, id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        })
    };
    const urldeleteUsers = `${this.apiUrl}/${id}`;
    return this.http.delete(urldeleteUsers, httpOptions)
  }
}

// function getToken(): any {
// const httpOptions = {
//       headers: new HttpHeaders({ 
//           'Content-Type': 'application/json', 
//           'Authorization': `Bearer ${token}` 
//         })
//     };
// }
