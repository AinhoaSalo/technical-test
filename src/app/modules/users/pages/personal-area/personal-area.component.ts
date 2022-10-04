import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  userMe: any;
  token: string = ''; //private?
  errorMessage: string = '';
  checkError: boolean = false;
  modify: boolean = false;
  deleteConfirm: boolean = false;
  form: any = {
    name: '',
    surname: ''
  }

  constructor(private usersService: UsersService, private storageService: StorageService, private router: Router) { }
  
  ngOnInit(): void {
    const UNDEFINED_NULL = undefined || null;
    let callLoggedIn = this.storageService.isLoggedIn();
    
    
    if (!callLoggedIn || UNDEFINED_NULL) {
      alert('Por favor, tiene que loguearse');
      this.router.navigate(['login']);
    } else {
      this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.getUserMe(this.token).subscribe({
        next: (data: any) => {
          this.userMe = data;
          this.form.name = data.name;
          this.form.surname = data.surname;
        }, error: (err: any) => {
          this.checkError = true;
          this.errorMessage = err.error.message;
        }
      });
    }

  }

  buttonModify() {
    this.modify = true;
    this.checkError = false;
  }

  buttonCancelDeleteModify(){
    this.modify = false;
    this.deleteConfirm = false;
    this.checkError = false;
    this.form = this.userMe
     
  }

  buttonDelete(){
    this.modify = true;
    this.deleteConfirm = true;
    this.checkError = false;
  }

  put() {
    if ((this.form.name === "") || (this.form.surname === "")) {
      this.checkError = true;
      this.errorMessage="Campo vacio, introduzca el nombre y el apellido";
    } else {
      this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.putUser(this.token, this.userMe.id, this.form.name, this.form.surname).subscribe({
        next: (data: any) => {
          this.userMe = data;
        }, error: (err: any) => {
          this.checkError = true;
          this.errorMessage = err.error.message;
        }
      });
      this.modify = false;
      this.checkError = false;
    }
    
  }

  delete(){
    this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.deleteUsers(this.token, this.userMe.id).subscribe({
        next: () => {
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
        }
      });
    sessionStorage.removeItem('authTokenUser');
    alert('Usuario borrado');
    this.router.navigate(['']);
    this.modify = false

  }

  logOut() {
    sessionStorage.removeItem('authTokenUser');
    this.router.navigate(['']);
  }

}
