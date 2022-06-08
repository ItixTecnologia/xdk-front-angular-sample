import { Injectable } from '@angular/core';
import { BaseTableConfig, TableColumnModel, ColumnTypeEnum } from '@itix/components';

import { PacienteModel } from '../../models/paciente.model';
import { GerenciamentoPacientesStore } from '../../services/stores/gerenciamento-pacientes.store';

@Injectable()
export class GerenciamentoPacientesTableConfig extends BaseTableConfig<PacienteModel> {
    constructor(
        store: GerenciamentoPacientesStore
    ) {
        super();

        this._title = 'Listagem de Pacientes';
        this._name = 'gerenciamento-pacientes';
        this._store = store;
        this._canDelete = true;
        this._canEdit = true;
        this._canView = true;
        this._columns = [
            new TableColumnModel({ name: 'id', title: 'ID', width: '200px', canSort: true, canFilter: true }),
            new TableColumnModel({ name: 'nome', title: 'Nome', canSort: true, canFilter: true }),
            new TableColumnModel({
                name: 'situacao',
                title: 'Situação',
                canSort: true,
                canFilter: true,
                type: ColumnTypeEnum.CustomTemplate
            }),
            new TableColumnModel({
                name: 'dataCadastro',
                title: 'Data de Cadastro',
                canSort: true,
                canFilter: true,
                type: ColumnTypeEnum.DateTime,
                dateTimeFormat: 'dd/MM/yy'
            })
        ];
    }
}
