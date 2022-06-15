import {
    BaseFormConfig,
    FormTitleConfigModel,
    FormRowModel,
    FormFieldModel,
    RequiredValidator,
    FormFieldSelectModel,
    FormFieldDateModel
} from '@itix/components';

import { GerenciamentoPacientesStore } from '../../../services/stores/gerenciamento-pacientes.store';

export class PacientesFormConfig extends BaseFormConfig {
    constructor(store: GerenciamentoPacientesStore) {
        super();

        this.titleConfig = new FormTitleConfigModel({
            onCreate: 'Cadastrar paciente',
            onEdit: 'Editar paciente',
            onView: 'Visualizar paciente'
        });
        this.rows = [
            new FormRowModel({
                fields: [
                    new FormFieldModel({
                        name: 'nome',
                        colSize: 6,
                        label: 'Nome',
                        validations: [
                            new RequiredValidator()
                        ]
                    }),
                    new FormFieldSelectModel({
                        name: 'situacao',
                        label: 'Situação',
                        colSize: 4,
                        store: store,
                        storeMethodName: 'listarSituacoes',
                        keyProperty: 'key',
                        valueProperty: 'value'
                    })
                ]
            }),
            new FormRowModel({
                fields: [
                    new FormFieldDateModel({
                        name: 'dataCadastro',
                        label: 'Data de cadastro',
                        colSize: 4
                    })
                ]
            })
        ];
    }
}
