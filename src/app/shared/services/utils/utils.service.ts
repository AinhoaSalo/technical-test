import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() { }

  validate(data: string) {
    if (data == undefined || data == null || data == '') {
      return {
        'check': false,
        'message': 'No puede dejar ningún campo vacío'
      }
    } else {
      return {
        'check': true,
        'message': 'Usuario registrado'
      }
    }
  }

  getHeaders(token: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
  

}
