import { Injectable } from '@angular/core';

const userToken: string = 'authTokenUser';

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
    let user = window.sessionStorage.getItem(userToken);
    if (user) {
      return true;
    }else{
      return false;
    }
  }

  getTokenUser(): any {
    let user = window.sessionStorage.getItem(userToken);

    if (user) {
      return JSON.parse(user);
    }
  }
}
