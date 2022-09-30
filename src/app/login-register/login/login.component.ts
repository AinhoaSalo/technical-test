import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../services/api-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  
  constructor(private apiUsersService: ApiUsersService) { }

  login(){

    this.apiUsersService.loginService(this.email, this.password).subscribe(
      (data) =>{
        console.log(data.accessToken)
      }
    )
    

  }

  ngOnInit(): void {
  }

}
