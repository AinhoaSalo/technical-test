import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { UsersService } from '../../services/managementUsers/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  users: any;
  token: string = ''; //private?
  errorMessage: string = '';

  constructor(private usersService: UsersService,private storageService: StorageService) { }

  ngOnInit(): void {
    this.token = this.storageService.getTokenUser().accessToken;
    this.usersService.getUsers(this.token).subscribe({
      next: (data: any) => {
        console.log(data.items)
        this.users = data.items;
      }, error: (err: any) =>{
      this.errorMessage = err.error.message;
      window.alert(this.errorMessage)
      }
    });
  }
}
