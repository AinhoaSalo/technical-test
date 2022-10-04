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
    let { name, surname, email, password } = this.form;
    let validateEmpty = this.form.name || this.form.surname || this.form.email || this.form.password;
    let validateInputs = this.utils.validate(validateEmpty)
    // let validateNameSurname = this.form.name.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/);
    // let validateEmail = 
    // let validatePassword = 

    if (!validateInputs.check) {
      this.checkError = true;
      this.errorMessage= validateInputs.message
    } else {
      this.apiUsersService.registerService(name, surname, email, password).subscribe({
        next: () => {
          //alert('Usuario creado'); TO DO
          this.router.navigate(['/login']);
        }, error: (err: any) => {
          this.checkError = true;
          this.errorMessage = err.error.message;
        }
      });//CONTROL OF ERRORS AND VALIDATIONS
    }

  }

}


