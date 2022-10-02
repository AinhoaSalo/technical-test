import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'


import { FormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

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