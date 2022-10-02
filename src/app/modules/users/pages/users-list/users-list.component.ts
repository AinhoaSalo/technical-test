import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  token: string = ''; //private?
  errorMessage: string = '';
  page: number = 1;



  constructor(private usersService: UsersService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {

    //debugger
    if (!this.storageService.isLoggedIn() || undefined || null) {
      alert('Por favor, tiene que loguearse');
      this.router.navigate(['login']);


    } else {
      this.token = this.storageService.getTokenUser().accessToken;
      this.usersService.getUsers(this.token).subscribe({
        next: (data: any) => {
          console.log(data.items)
          this.users = data.items;
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage)
        }
      });
    }
  }
}
