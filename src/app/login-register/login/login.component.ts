import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ApiUsersService } from '../../services/api-users/api-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private apiUsersService: ApiUsersService, private storageService: StorageService) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      console.log('User log in')
      //Add redirection page users
    }
  }

  //Method to send form data
  onSubmit(): void {
    
    this.apiUsersService.loginService(this.email, this.password).subscribe({
      next: (data: any) => {
        //debugger
        this.storageService.saveTokenUser(data)
        alert('Contraseña correcta')
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage)
      }
    })
  }
  

}
