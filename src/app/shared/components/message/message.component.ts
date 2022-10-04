import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../../../modules/login-register/pages/register/register.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  checkError: boolean = false;
  errorMessage: string = '';

  constructor(private registerComponent: RegisterComponent) { }

  ngOnInit(): void {
  }

}
