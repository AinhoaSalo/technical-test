import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [ //en los imports solo se meten modulos
        CommonModule, //sirve para exporta todas las directivas y conductos básicos de Angular.
        FormsModule
    ]
})

export class LoginRegisterModule {}