import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { LoginRegisterModule } from './login-register/login-register.module';
import { httpInterceptorProviders } from './interceptor/http.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginRegisterModule,
    UsersModule,
    HomeModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
