import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from 'src/app/services/api-users/api-users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name: '',
    surname: '',
    email: '',
    password: '',
  }

  errorMessage: string = '';


  constructor(private apiUsersService: ApiUsersService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, surname, email, password } = this.form;

    this.apiUsersService.registerService(name, surname, email, password).subscribe({
      next: (data: any) => {
        console.log(data)
      }, error: (err: any) =>{
      this.errorMessage = err.error.message;
      window.alert(this.errorMessage)
      }
    });//CONTROL OF ERRORS AND VALIDATIONS

  }

}
