import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SingInComponent,
        SingUpComponent
    ],
    exports: [
        SingInComponent,
        SingUpComponent
    ],
    imports: [ //en los imports solo se meten modulos
        CommonModule, //sirve para exporta todas las directivas y conductos básicos de Angular.
        FormsModule
    ]
})

export class SingInUpModule {}