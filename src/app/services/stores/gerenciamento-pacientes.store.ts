import { Injectable } from '@angular/core';
import {
    BaseEntityStore,
    KeyValueModel,
    RequestService,
    SearchRequestModel,
    SearchResponseModel,
    StoreConfig
} from '@itix/core';
import { Observable } from 'rxjs';

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

    listarSituacoes(request = new SearchRequestModel()): Observable<SearchResponseModel<KeyValueModel>> {
        return this._config.requestService.makePost<SearchResponseModel<KeyValueModel>>(
            this.getRequestModel('listar-situacoes', request)
        );
    }
}
