import { Injectable } from '@angular/core';
import {
    BaseEntityStore,
    RequestService,
    StoreConfig
} from '@itix/core';

import { PacienteModel } from '../../models/paciente.model';
import { SituacaoPacienteEnum } from '../../models/enums/situacao-paciente.enum';

@Injectable()
export class GerenciamentoPacientesStore extends BaseEntityStore<PacienteModel> {
    constructor(
        requestService: RequestService
    ) {
        super(
            new StoreConfig<PacienteModel>({
                requestService,
                baseUrl: 'gerenciamento-pacientes',
                items: [
                    new PacienteModel({
                        id: 1,
                        nome: 'João da Silva',
                        situacao: SituacaoPacienteEnum.Ativo,
                        dataCadastro: new Date(2022, 5, 3)
                    }),
                    new PacienteModel({
                        id: 2,
                        nome: 'José de Alencar',
                        situacao: SituacaoPacienteEnum.Desativado,
                        dataCadastro: new Date(2018, 2, 2)
                    }),
                    new PacienteModel({
                        id: 3,
                        nome: 'Machado de Assis',
                        situacao: SituacaoPacienteEnum.Desativado,
                        dataCadastro: new Date(2015, 8, 26)
                    }),
                    new PacienteModel({
                        id: 4,
                        nome: 'Leandro Costa',
                        situacao: SituacaoPacienteEnum.AguardandoAtivacao,
                        dataCadastro: new Date(2022, 6, 1)
                    })
                ]
            })
        );
    }
}
