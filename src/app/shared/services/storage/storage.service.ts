import { Injectable } from '@angular/core';

const userToken: string = 'authTokenUser';

type UserToken = {
  'accessToken': string,
  'refreshTokenToken': string,
  'tokenTypen': string
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //Method to save token when the user log in
  saveTokenUser(token: string): void{
    window.sessionStorage.removeItem(userToken);
    window.sessionStorage.setItem(userToken, JSON.stringify(token));
  }

  isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(userToken);
    if (user) {
      return true;
    }
    
    return false;

  }

  getTokenUser(): UserToken {
    const user = window.sessionStorage.getItem(userToken);

    if (user) {
      console.log(JSON.parse(user));
      return JSON.parse(user);
    } 

    return {
      'accessToken': '',
      'refreshTokenToken': '',
      'tokenTypen': ''
    }
  }
}
