import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        MessageComponent,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        MessageComponent

    ],
    imports: [ 
        CommonModule,
        AppRoutingModule
    ]
})

export class SharedModule { }
