import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

//Module Login and Register import in app.module.ts
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule, 
        FormsModule
    ]

})

export class LoginRegisterModule {}