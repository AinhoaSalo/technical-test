import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../services/api-users.service';
import { Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
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


  constructor(private apiUsersService: ApiUsersService, private router: Router, private utils: Utils) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let { name, surname, email, password } = this.form;

    let validateEmpty = this.form.name || this.form.surname || this.form.email || this.form.password;

    let validateNameSurname = this.form.name.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/);
    // let validateEmail = 
    // let validatePassword = 
    let validateInputs = this.utils.validate(validateEmpty)
    if (!validateInputs.check) {
      alert(validateInputs.message)
    } else {
      this.apiUsersService.registerService(name, surname, email, password).subscribe({
        next: (data: any) => {
          console.log(data)
          alert('Usuario creado');
          this.router.navigate(['/login']);
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage)
        }
      });//CONTROL OF ERRORS AND VALIDATIONS
    }

  }

}


