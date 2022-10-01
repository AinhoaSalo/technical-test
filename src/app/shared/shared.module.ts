import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        SidebarComponent

    ],
    imports: [ 
        CommonModule
    ]
})

export class SharedModule { }