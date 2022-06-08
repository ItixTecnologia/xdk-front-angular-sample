import { AfterViewInit, Component } from '@angular/core';
import { BasePageComponent, LayoutService } from '@itix/components';

import { GerenciamentoPacientesStore } from '../../services/stores/gerenciamento-pacientes.store';
import { GerenciamentoPacientesTableConfig } from './gerenciamento-pacientes.table-config';
import { SituacaoPacienteEnum } from '../../models/enums/situacao-paciente.enum';

@Component({
    selector: 'app-gerenciamento-pacientes',
    templateUrl: './gerenciamento-pacientes.component.html',
    styleUrls: ['./gerenciamento-pacientes.component.scss'],
    providers: [
        GerenciamentoPacientesStore,
        GerenciamentoPacientesTableConfig
    ]
})
export class GerenciamentoPacientesComponent extends BasePageComponent implements AfterViewInit {
    constructor(
        public tableConfig: GerenciamentoPacientesTableConfig,
        layoutService: LayoutService
    ) {
        super(layoutService);
    }

    ngAfterViewInit(): void {
        this.setupSubheader('Listagem de Pacientes');
    }

    getDescricaoSituacao(situacao: SituacaoPacienteEnum): string {
        switch (situacao) {
            case SituacaoPacienteEnum.AguardandoAtivacao:
                return 'Aguardando ativação';
            case SituacaoPacienteEnum.Ativo:
                return 'Ativo';
            case SituacaoPacienteEnum.Desativado:
                return 'Desativado';
            default:
                return '';
        }
    }
}
