import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '@itix/components';

import { HomeComponent } from './views/home/home.component';
import { GerenciamentoPacientesComponent } from './views/gerenciamento-pacientes/gerenciamento-pacientes.component';
import { PacientesFormComponent } from './views/gerenciamento-pacientes/form/pacientes-form.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            showChildrenInMenu: true
        },
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    showInMenu: true,
                    title: 'Home',
                    icon: 'fad fa-home'
                }
            },
            {
                path: '',
                data: {
                    isSection: true,
                    title: 'Cadastros',
                    breadcrumb: 'Cadastros'
                },
                children: [
                    {
                        path: 'pacientes',
                        data: {
                            isGroup: true,
                            title: 'Gerenciamento de pacientes',
                            breadcrumb: 'Gerenciamento de pacientes',
                            icon: 'fad fa-user-injured'
                        },
                        children: [
                            {
                                path: '',
                                component: GerenciamentoPacientesComponent,
                                data: {
                                    showInMenu: true,
                                    title: 'Lista'
                                }
                            },
                            {
                                path: 'add',
                                component: PacientesFormComponent,
                                data: {
                                    showInMenu: true,
                                    title: 'Novo',
                                    breadcrumb: 'Novo'
                                }
                            },
                            { path: ':id', component: PacientesFormComponent, data: { breadcrumb: 'Visualizar' } },
                            { path: ':id/edit', component: PacientesFormComponent, data: { breadcrumb: 'Editar' } }
                        ]
                    }
                ]
            }
        ]
    },

    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

