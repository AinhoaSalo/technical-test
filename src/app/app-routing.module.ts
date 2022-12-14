import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/component/home.component";
import { LoginComponent } from './modules/login-register/pages/login/login.component';
import { RegisterComponent } from './modules/login-register/pages/register/register.component';
import { UsersListComponent } from './modules/users/pages/users-list/users-list.component';
import { PersonalAreaComponent } from './modules/users/pages/personal-area/personal-area.component';
import { AuthGuard } from "./modules/login-register/guards/auth.guard";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard], //https://binarycoffee.dev/post/guards-en-angular-como-funcionan
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent 
    },    
    {
        path: 'registro',
        component: RegisterComponent 
    },    
    {
        path: 'usuarios',
        component: UsersListComponent 
    },    
    {
        path: 'areapersonal',
        component: PersonalAreaComponent 
    },    
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}