import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiUsersService } from '../../services/api-users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private apiUsersService: ApiUsersService, private storageService: StorageService, private router: Router) { }
  ngOnInit(): void {}

  //Method to send form data
  onSubmit(): void {

    this.apiUsersService.loginService(this.email, this.password).subscribe({
      next: (data: any) => {
        //debugger
        this.storageService.saveTokenUser(data)
        alert('Contraseña correcta')
        this.router.navigate(['/usuarios']);
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage)
      }
    })
  }

}
