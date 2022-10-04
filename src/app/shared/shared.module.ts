import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        MessageComponent,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        MessageComponent

    ],
    imports: [ 
        CommonModule,
        AppRoutingModule
    ]
})

export class SharedModule { }
