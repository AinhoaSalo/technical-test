import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../services/api-users.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  email: string = '';
  password: string = '';
  
  constructor(private apiUsersService: ApiUsersService) { }

  login(){

    this.apiUsersService.loginService(this.email, this.password).subscribe((data) =>{
      console.log(data)
    })
    

  }

  ngOnInit(): void {
  }

}
