import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from '../../../shared/services/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://51.38.51.187:5050/api/v1/users'
  private urlMe = `${this.apiUrl}/me`;

  constructor(private http: HttpClient, private utils: Utils) { }

  getUsers(token: string): Observable<any> {
    let httpOptions = this.utils.getHeaders(token);
    return this.http.get(this.apiUrl, httpOptions)
  }

  getUserMe(token: string): Observable<any> {
    let httpOptions = this.utils.getHeaders(token);
   
    return this.http.get(this.urlMe, httpOptions)
  }

  putUser(token: string, id: string, name: string, surname: string): Observable<any> {
    let httpOptions = this.utils.getHeaders(token)
    let urlPutUsers = `${this.apiUrl}/${id}`;
    let dataUser = {
      "name": `${name}`,
      "surname": `${surname}`
    }
    return this.http.put(urlPutUsers, dataUser, httpOptions)
  }

  deleteUsers(token: string, id: string): Observable<any> {
    let httpOptions = this.utils.getHeaders(token);
    let urldeleteUsers = `${this.apiUrl}/${id}`;
    return this.http.delete(urldeleteUsers, httpOptions)
  }
}
