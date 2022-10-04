import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {}

  isLogged(){
    return this.storageService.isLoggedIn();
  }

}
