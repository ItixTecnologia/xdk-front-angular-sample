import { Injectable } from '@angular/core';
import {
    BaseEntityStore,
    RequestService,
    StoreConfig
} from '@itix/core';

import { PacienteModel } from '../../models/paciente.model';

@Injectable()
export class GerenciamentoPacientesStore extends BaseEntityStore<PacienteModel> {
    constructor(
        requestService: RequestService
    ) {
        super(
            new StoreConfig<PacienteModel>({
                requestService,
                baseUrl: 'gerenciamento-pacientes'
            })
        );
    }
}
