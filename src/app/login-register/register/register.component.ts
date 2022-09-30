import { Component } from '@angular/core';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private apiUsersService: ApiUsersService) { }

  register(){

    this.apiUsersService.registerService(this.name, this.surname, this.email, this.password).subscribe(
      (data: any) =>{
        console.log(data)
      }
    )//CONTROL OF ERRORS AND VALIDATIONS

  }

}
