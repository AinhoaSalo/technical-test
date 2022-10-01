import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ApiUsersService } from '../../services/api-users.service';

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
  }

  //Method to send form data
  onSubmit(): void {

    this.apiUsersService.loginService(this.email, this.password).subscribe({
      next: (data) => {
        this.storageService.saveTokenUser(data)
        alert('Contraseña correcta')
      },
      error: err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage)
      }
    })
  }

}
