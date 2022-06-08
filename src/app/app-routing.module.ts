import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '@itix/components';

import { HomeComponent } from './views/home/home.component';
import { GerenciamentoPacientesComponent } from './views/gerenciamento-pacientes/gerenciamento-pacientes.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    /**
     * Adicionar aqui as rotas.
     * ATENÇÃO: AQUI APENAS COMO EXEMPLO, UTILIZAR A SUA PRÓPRIA ESTRUTURA E REMOVER O LIXO.
     * Exemplos:
     **/
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
                        component: GerenciamentoPacientesComponent,
                        data: {
                            showInMenu: true,
                            title: 'Gerenciamento de pacientes',
                            icon: 'fad fa-user-injured'
                        }
                    }
                    /**
                     * Exemplo de CRUD:
                     {
                        path: 'products',
                        data: {
                            isGroup: true,
                            title: 'Produtos',
                            breadcrumb: 'Produtos',
                            icon: 'fad fa-fill-drip'
                        },
                        children: [
                            {
                                path: '',
                                component: ProductsComponent,
                                data: {
                                    showInMenu: true,
                                    title: 'Lista'
                                }
                            },
                            {
                                path: 'add',
                                component: ProductFormComponent,
                                data: {
                                    showInMenu: true,
                                    title: 'Novo',
                                    breadcrumb: 'Novo'
                                }
                            },
                            { path: ':id', component: ProductFormComponent, data: { breadcrumb: 'Visualizar' } },
                            { path: ':id/edit', component: ProductFormComponent, data: { breadcrumb: 'Editar' } }
                        ]
                    }
                     */
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
export class AppRoutingModule {}

