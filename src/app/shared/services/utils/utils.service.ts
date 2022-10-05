import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

type ValidationResponse = {
  'check': boolean,
  'message': string
}

type Headers = {
  headers: HttpHeaders
}

@Injectable({
  providedIn: 'root'
})

export class Utils {

  constructor() { }

  validate(data: string): ValidationResponse {
    if (data == undefined || data == null || data == '') {
      return {
        'check': false,
        'message': 'No puede dejar ningún campo vacío'
      }
    }

    return {
      'check': true,
      'message': 'Usuario registrado'
    }

  }

  getHeaders(token: string): Headers {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

}
