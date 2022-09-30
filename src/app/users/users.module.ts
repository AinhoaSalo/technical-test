import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
    declarations: [
        PersonalAreaComponent,
        UsersListComponent
    ],
    exports: [
        PersonalAreaComponent,
        UsersListComponent
    ],
    imports: [ //en los imports solo se meten modulos
        CommonModule //sirve para exporta todas las directivas y conductos básicos de Angular.
    ]
})

export class UsersModule {}