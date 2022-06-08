import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule, ColumnModule } from '@itix/components';

import { HomeComponent } from './home/home.component';
import { GerenciamentoPacientesComponent } from './gerenciamento-pacientes/gerenciamento-pacientes.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        ColumnModule
    ],
    declarations: [
        HomeComponent,
        GerenciamentoPacientesComponent
    ],
    exports: [
        HomeComponent,
        GerenciamentoPacientesComponent
    ]
})
export class ViewsModule {}
