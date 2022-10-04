import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  token: string = ''; //private?
  errorMessage: string = '';
  page: number = 1; //for pagination

  constructor(private usersService: UsersService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    let callLoggedIn = this.storageService.isLoggedIn();
    
    // Make them only accessible if you are logged in
    if (!callLoggedIn || undefined || null) {

      alert('Por favor, tiene que loguearse');
      this.router.navigate(['login']); //redirect to login

    } else {

      this.token = this.storageService.getTokenUser().accessToken;

      this.usersService.getUsers(this.token).subscribe({
        next: (data: any) => {
          this.users = data.items;
        }, error: (err: any) => {
          this.errorMessage = err.error.message;
          alert(this.errorMessage)
        }
      });
    }
  }
}
