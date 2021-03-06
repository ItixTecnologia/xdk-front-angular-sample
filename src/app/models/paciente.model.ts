import { BaseEntityModel } from '@itix/core';

import { SituacaoPacienteEnum } from './enums/situacao-paciente.enum';

export class PacienteModel extends BaseEntityModel {
    nome!: string;
    situacao!: SituacaoPacienteEnum;
    dataCadastro!: Date;

    constructor(init?: Partial<PacienteModel>) {
        super();
        Object.assign(this, init);
    }
}
