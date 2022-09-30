import { Injectable } from '@angular/core';

const userToken: string = 'authTokenUser';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveUser(token: string): void{
    window.sessionStorage.removeItem(userToken);
    window.sessionStorage.setItem(userToken, JSON.stringify(token))
  }
}
