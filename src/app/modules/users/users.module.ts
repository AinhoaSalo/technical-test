import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { UsersListComponent } from './pages/users-list/users-list.component';


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