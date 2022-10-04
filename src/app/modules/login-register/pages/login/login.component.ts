import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiUsersService } from '../../services/api-users.service';
import { Router } from '@angular/router';
import { Utils } from '../../../../shared/services/utils/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../login-register.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiUsersService: ApiUsersService, private storageService: StorageService, private router: Router, private utils: Utils) { }
  ngOnInit(): void { }

  //Method to send form data
  onSubmit(): void { 
    let validateEmpty = this.email || this.password;
    let validateInputs = this.utils.validate(validateEmpty);

    if (!validateInputs.check) {
      alert(validateInputs.message)
    } else {
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

}
