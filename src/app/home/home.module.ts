import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [ //en los imports solo se meten modulos
        CommonModule //sirve para exporta todas las directivas y conductos básicos de Angular.
    ]
})

export class HomeModule {}