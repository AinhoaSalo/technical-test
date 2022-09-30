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
  
  constructor(private apiUsersService: ApiUsersService, private storageService: StorageService) { }

  login(){

    this.apiUsersService.loginService(this.email, this.password).subscribe(
      (data) =>{
        this.storageService.saveUser(data)
      }
    )
    

  }

  ngOnInit(): void {
  }

}
