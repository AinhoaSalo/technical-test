import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';


//Module PersonalArea and UserList import in app.module.ts
@NgModule({
    declarations: [
        PersonalAreaComponent,
        UsersListComponent
    ],
    exports: [
        PersonalAreaComponent,
        UsersListComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule 
    ]
})

export class UsersModule {}