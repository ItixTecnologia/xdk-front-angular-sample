import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule, ColumnModule, FormModule, CardModule } from '@itix/components';

import { HomeComponent } from './home/home.component';
import { GerenciamentoPacientesComponent } from './gerenciamento-pacientes/gerenciamento-pacientes.component';
import { PacientesFormComponent } from './gerenciamento-pacientes/form/pacientes-form.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        ColumnModule,
        CardModule,
        FormModule
    ],
    declarations: [
        HomeComponent,
        GerenciamentoPacientesComponent,
        PacientesFormComponent
    ],
    exports: [
        HomeComponent,
        GerenciamentoPacientesComponent,
        PacientesFormComponent
    ]
})
export class ViewsModule { }
