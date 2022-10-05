import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../services/api-users.service';
import { Router } from '@angular/router';
import { Utils } from '../../../../shared/services/utils/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../login-register.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name: '',
    surname: '',
    email: '',
    password: '',
  }
  errorMessage: string = '';
  checkError: boolean = false;


  constructor(private apiUsersService: ApiUsersService, private router: Router, private utils: Utils) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, surname, email, password } = this.form;
    const validateEmpty = this.form.name || this.form.surname || this.form.email || this.form.password;
    const validateInputs = this.utils.validate(validateEmpty);

    if (!validateInputs.check) {
      this.checkError = true;
      this.errorMessage= validateInputs.message;
    } else {
      this.apiUsersService.registerService(name, surname, email, password).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        }, error: (err: any) => {
          this.checkError = true;
          this.errorMessage = err.error.message;
        }
      });
    }

  }

}


