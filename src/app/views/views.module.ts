import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '@itix/components';

import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class ViewsModule { }
