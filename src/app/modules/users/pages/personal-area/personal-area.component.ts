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
  modify: boolean = false;
  deleteConfirm: boolean = false;

  constructor(private usersService: UsersService, private storageService: StorageService, private router: Router) { }
  
  ngOnInit(): void {
    const callLoggedIn = this.storageService.isLoggedIn();
    
    if (!callLoggedIn || undefined || null) {
      alert('Por favor, tiene que loguearse');
      this.router.navigate(['login']);

    } else {
      this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.getUserMe(this.token).subscribe({
        next: (data: any) => {
          console.log(data)
          this.userMe = data;
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage)
        }
      });
    }

  }

  buttonModify() {
    this.modify = true;
  }

  buttonCancelDeleteModify(){
    this.modify = false;
    this.deleteConfirm = false;
  }

  buttonDelete(){
    this.modify = true;
    this.deleteConfirm = true;
  }

  put() {
    if ((this.userMe.name === "") || (this.userMe.surname === "")) {
      alert("Campo vacio, por favor, introduzca el nombre y el apellido")
    } else {
      this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.putUser(this.token, this.userMe.id, this.userMe.name, this.userMe.surname).subscribe({
        next: (data: any) => {
          console.log(data)
          window.location.reload();
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage)
        }
      });
      this.modify = false;
    }
    
  }

  delete(){
    this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.deleteUsers(this.token, this.userMe.id).subscribe({
        next: (data: any) => {
          console.log(data);
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage)
        }
      });
    sessionStorage.removeItem('authTokenUser');
    alert('Usuario borrado');
    this.router.navigate(['']);
    this.modify = false

  }

  logOut() {
    sessionStorage.removeItem('authTokenUser');
    alert('Sesión cerrada');
    this.router.navigate(['']);
  }

}
